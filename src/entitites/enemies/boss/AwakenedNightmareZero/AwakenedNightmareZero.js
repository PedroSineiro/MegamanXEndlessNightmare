import BaseShot from "../../BaseShot.js";
import NightmareZero from "../NightmareZero/NightmareZero.js";


export default class
AwakenedNightmareZero
extends NightmareZero {

    constructor(
        scene,
        x,
        offsetX,
        y,
        offsetY,
    ) {

        super(
            scene,
            x,
            offsetX,
            y,
            offsetY,
        );

        this.filename =
            "nightmare_zero";

        this.floatingAnimationName = "night_zero_floating";

        this.startShootingAnimationName = "night_zero_start_shooting";

        this.shootingAnimationName = "night_zero_shooting";

        this.auraSound = scene.sound.add(
                "night_zero_aura"
            );

        this.maxHp = 1400;

        this.hp = 1400;

        this.attackDamage = 40;

        this.gigaAttackDamage = 65;

        this.hasShield = true;

        this.shieldActive = true;

        this.shieldCooldown = 2;

        this.spawnMinibossCooldown = 1;

        this.miniboss = null;

        this.maxShieldHp = 180;

        this.shieldHp = this.maxShieldHp;

        this.secondPhase = false;

        this.originalY = y;

        this.minibossX = 900;

        this.minibosses = ["proto_magma_dragoon","proto_high_max", "proto_sigma_head"];

        //
        // sprite
        //

        this.setupSprite(

            "nightmare_zero_floating_1",

            x,

            0

        );

        this.targetSpawnY = y + offsetY;

        //
        // hurtbox
        //

    }

    async createAura() {

        const spawnX = this.sprite.x - 5;

        const spawnY = this.sprite.y - 15;

        this.auraSprite =

            this.scene
                .add
                .sprite(
                    spawnX,
                    spawnY,
                    "night_zero_aura_1"
                );
        
        this.auraSprite.play("night_zero_aura");

        this.auraSprite
            .setScale(2);

        this.auraSprite
            .setOrigin(
                0.5,
                1
            );

        this.auraSprite.setDepth(99);
    }

    updateAura() {

        this.auraSprite.x =
            this.sprite.x - 5;

        this.auraSprite.y =
            this.sprite.y - 15;

    }

    hideShield() {
        this.auraSprite.setVisible(false);
    }

    async spawn() {

        this.isBusy =
            true;

        this.sprite.y =
            -300;

        this.sprite.play(this.floatingAnimationName);

        this.createAura();

        this.auraSound.play({volume:0.15, loop: true});

        await this.moveToY(

            this.targetSpawnY,

            2

        );

        this.auraSound.stop();

        this.sprite.play(

            this.idleAnimationName

        );

        this.createHurtbox(

            60,
            120,

            -30,
            -180

        );

        this.isBusy =
            false;

    }

    async takeTurn(
        onComplete
    ) {

        if (
            this.isDead
        ) {
            onComplete?.();
            return;

        }

        this.isBusy =
            true;

        if(this.scene.isMinibossDying) {
            await this.wait(2000);
        }

        if(!this.shieldActive){
            this.shieldCooldown--;

            this.shieldCooldown = Math.max(this.shieldCooldown,0);

            if(this.shieldCooldown == 0) await this.restoreShield();
        }

        const alivePlayers =

        this.scene.players
            .filter(

                player =>

                    !player.isDead

            );

        if(!this.secondPhase &&  this.hp < this.maxHp *2/3){
            this.secondPhase = true;

            this.scene.sfx.play("night_zero_laugth",{
                volume: 0.2
            });

            await this.wait(2000);
            
        }

        if(this.secondPhase) {

            if(!this.miniboss){
                this.spawnMinibossCooldown--;

                this.spawnMinibossCooldown = Math.max(this.spawnMinibossCooldown,0);

                if(this.spawnMinibossCooldown==0){

                    this.spawnMinibossCooldown = 3;

                    const miniBossId = this.minibosses[Math.floor(Math.random() * this.minibosses.length)];
                
                    await this.teleportMiniboss();

                    this.miniboss = await this.scene.spawnMiniboss(miniBossId);

                    this.miniboss.owner = this;

                    await this.wait(500);

                    await this.miniboss.takeTurn();
                }
            } else {
                await this.miniboss.takeTurn();
            }

        }

        if (
            this.secondPhase
        ) {

            this.gigaAttackCooldown = Math.max(--this.gigaAttackCooldown,0);

            if(this.gigaAttackCooldown == 0){
                this.gigaAttackCooldown = 3;

                await this.gigaAttack();

                this.isBusy =
                false;

                onComplete?.();

                return;
            }

        }

        await this.beforeTurn();
        for (
        const target of
        alivePlayers
        ) {

            if (
                this.isDead || this.scene.isGameOver
            ) {
                break;
            }

            if(this.miniboss) {
                await this.shootRing(
                    target
                );
            } else {
                await this.performAttack(
                    target
                );
            }
            //
            // pequeno delay
            //

            await this.wait(
                600
            );
        }

        await this.wait(500);

        this.isBusy =
            false;

        await this.afterTurn();

        onComplete?.();

    }

    async teleportMiniboss( bossDied = false) {
        if(this.isDead) return;
        await this.teleportOut();

        this.sprite.x = bossDied? this.spawnX: this.minibossX;

        await this.teleportIn();

        this.sprite.play(this.idleAnimationName);
    }

    async restoreShield() {

        this.hp = Math.min(this.hp+300,this.maxHp);

        this.shieldCooldown = 2;

        this.shieldActive = true;

        this.shieldHp = this.maxShieldHp;

        this.sprite.play(this.floatingAnimationName);

        this.auraSound.play({volume:0.15, loop: true});

        this.auraSprite.setVisible(true);

        await this.wait(1500);

        this.sprite.play(this.idleAnimationName);

        this.auraSound.stop();

    }

    async shootRing(target) {
        await this.playAnimation(this.startShootingAnimationName);

        const startX =

            this.sprite.x -
            20;

        const startY =

            this.sprite.y -180;

        this.ring(target, startX, startY);

        await this.playAnimation(this.shootingAnimationName);

        this.sprite.play(this.idleAnimationName);
    }

    ring(target, startX, startY){
    
        let targetX =

            target.hurtbox.x +

            target.hurtbox.width
            / 2;

        let targetY =

            target.hurtbox.y +

            target.hurtbox.height
            / 2;

        const angle =

            Phaser.Math
                .Angle
                .Between(

                    startX,
                    startY,

                    targetX,
                    targetY

                );

        const speed =
            12;

        const velocityX =

            Math.cos(angle) *
            speed;

        const velocityY =

            Math.sin(angle) *
            speed;
        
        const shot =

        new BaseShot(

            this.scene,

            startX,
            startY,

            velocityX,
            velocityY,

            this.attackDamage,
            this,
            "night_zero_ring_1",
            "night_zero_ring",
            true,
            70,
            70,
            false,
            false

        );

        this.shots.push(
            shot
        );
    }

}