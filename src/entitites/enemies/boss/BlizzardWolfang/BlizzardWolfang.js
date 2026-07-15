import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";

export default class
BlizzardWolfang
extends BaseBoss {

    constructor(
        scene,
        x,
        offsetX,
        y,
        offsetY,
    ) {

        super(
            scene,
            x + offsetX,
            y + offsetY
        );

        this.filename =
            "blizzard_wolfang";

        this.idleAnimationName = "blizzard_wolfang_idle";

        this.runningAnimationName = "blizzard_wolfang_running";

        this.startHowlAnimationName = "blizzard_wolfang_start_howl";

        this.howlAnimationName = "blizzard_wolfang_howl";

        this.attackAnimationName = "blizzard_wolfang_attack";

        this.startJumpingAnimationName = "blizzard_wolfang_stop_charge";

        this.jumpingAnimationName = "blizzard_wolfang_charge";

        this.deathAnimationName = "blizzard_wolfang_dying";

        this.iceSound = "ice_break";

        this.howlSound = "blizzard_wolfang_howl";

        this.chargeSound = "blizzard_wolfang_charge";

        this.stopGigaAttackSound = "charge_break";

        this.deathVoice = "blizzard_wolfang_dying";

        this.name = "Blizzard Wolfang";

        this.hudColor = "#cecbf5";


        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 42;

        this.gigaAttackDamage = 35;

        this.originalX = x;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "blizzard_wolfang_idle_1",

            1200,

            this.originalY

        );

        this.targetSpawnX = x + offsetX;

        this.targetSpawnY = y + offsetY;

        //
        // hurtbox
        //

    }

    async spawn() {

        this.isBusy =
            true;

        //
        // começa fora da tela
        //

        this.sprite.x = 1200;

        this.sprite.y =
            this.targetSpawnY;

        //
        // animação light
        //

        this.sprite.play(
            this.runningAnimationName
        );

        //
        // desce
        //

        await this.moveTo(
            this.targetSpawnX,
            this.targetSpawnY,
            10
        );

        await this.playAnimation(this.startHowlAnimationName);

        this.sprite.play(this.howlAnimationName);

        this.scene.sfx.play(this.howlSound, {volume: 0.15});

        await this.wait(1000);

        this.sprite.play(this.idleAnimationName);



        this.createHurtbox(

            60,
            120,

            -30,
            -180

        );

        this.isBusy =
            false;

    }

    async performAttack(
        target
    ) {

        this.scene.sfx.play(this.iceSound, {volume: 0.15});

        await this.playAnimation(this.attackAnimationName);

        const startX =

            this.sprite.x -
            70;

        const startY =

            this.sprite.y -
            160;

        this.ice(target, startX, startY);

        await this.wait(1000);

        this.sprite.play(this.idleAnimationName);
    }


    async gigaAttack() {

        await this.chargePlayers();

        if(this.scene.isGameOver) return;

        await this.chargePlayers();

        this.sprite.play(this.runningAnimationName);

        await this.moveTo(
            this.targetSpawnX,
            this.targetSpawnY,
            10);

        this.sprite.play(this.idleAnimationName);
    }


    async chargePlayers(){
            for (

                const player of
                this.scene.players

            ) {
            
            this.sprite.play(
                this.runningAnimationName
            );

            await this.moveToY(
                player.sprite.y,
                15
            );

            await this.playAnimation(
                this.startJumpingAnimationName
            );

            this.sprite.play(
                this.jumpingAnimationName
            );

            this.scene.sfx.play(
                this.chargeSound,
                {
                    volume: 0.15
                }
            );

            const targetX =

                player.filename === "x"

                ? 100

                : 700;

            await this.moveTowards(
            {
                targetX,

                speed: 12,

                onUpdate: () => {
                    
                    const hitbox = this.setupHitbox();

                    this.checkChargeHit([player], hitbox, this.gigaAttackDamage);
                }
                
            }
        );

            this.scene.sfx.play(this.stopGigaAttackSound, {volume: 0.15});

            this.sprite.play(this.startJumpingAnimationName);

            await this.performBrake();

            this.setDirection(

                player.filename === "x"

                ? 1

                : -1

            );

        }
    }


    ice(target, startX, startY){

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
            "blizzard_wolfang_ice_1",
            "blizzard_wolfang_ice",
            true,
            70,
            70,
            false

        );

        this.shots.push(
            shot
        );
    }

}