import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";

export default class
HighMax
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
            "high_max";

        this.idleAnimationName = "high_max_idle";

        this.startAttack1AnimationName = "high_max_start_attack_1";

        this.attack1AnimationName = "high_max_attack_1";

        this.startAttack2AnimationName = "high_max_start_attack_2";

        this.attack2AnimationName = "high_max_attack_2";

        this.startGigaAttackAnimationName = "high_max_start_giga_attack";

        this.gigaAttackAnimationName = "high_max_giga_attack";

        this.stopGigaAttackAnimationName = "high_max_stop_giga_attack";

        this.deathAnimationName = "high_max_dying";

        this.gigaAttackVoice = "high_max_voice";

        this.gigaAttackSound = "high_max_giga_attack_sphere";

        this.arrivalSound = "high_max_arriving";

        this.attackShpereSound = "high_max_attack_sphere";

        this.chargeSound =

            scene.sound.add(
                "high_max_sphere"
            );

        this.name = "High Max";

        this.hudColor = "#ffe924";

        this.maxHp = 880;

        this.hp = this.maxHp;

        this.attackDamage = 22;

        this.gigaAttackDamage = 74;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "high_max_idle_1",

            x,

            -300

        );

        this.targetSpawnY = y + offsetY;

    }

    async spawn() {

        this.isBusy =
            true;

        //
        // começa fora da tela
        //

        this.sprite.y =
            -300;

        await this.moveToY(

            this.targetSpawnY- 100,
            6

        );

        //
        // aterrissagem
        //

        this.scene.sfx.play(this.arrivalSound,{
            volume: 0.2
        });

        await this.moveToY(

            this.targetSpawnY,
            6

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

    async performAttack(
        target
    ) {
        let startAttackAnimationName = target.filename==="x"?this.startAttack1AnimationName:this.startAttack2AnimationName;
        let attackAnimationName = target.filename==="x"?this.attack1AnimationName:this.attack2AnimationName;
        let attackStartYoffset = 260;


        await this.playAnimation(
            startAttackAnimationName
        );

        this.scene.sfx.play(this.attackShpereSound);

        this.sprite.play(
            attackAnimationName
        );

        const startX =

            this.sprite.x +

            (
                this.direction === 1
                ? 50
                : -80
            );

        const startY =
            this.sprite.y - attackStartYoffset;

        //
        // centro da hurtbox
        //

        let targetX =

            target.hurtbox.x +

            target.hurtbox.width
            / 2;

        let targetY =

            target.hurtbox.y +

            target.hurtbox.height
            / 2;

        //
        // direção do tiro
        //

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
            8;

        const velocityX =

            Math.cos(angle) *
            speed;

        const velocityY =

            Math.sin(angle) *
            speed;

        //
        // cria tiro
        //

        this.sphere(startX, startY, velocityX, velocityY);

        await this.wait(1000);

        this.scene.sfx.play(this.attackShpereSound);

        this.sprite.play(
            attackAnimationName
        );

        this.sphere(startX, startY, velocityX, velocityY);

        await this.wait(
            500
        );

    }

    async afterTurn() {
        this.sprite.play(this.idleAnimationName);
    }


    async gigaAttack() {

        this.scene.sfx.play(this.gigaAttackVoice);

        await this.playAnimation(
            this.startGigaAttackAnimationName
        );

        this.sprite.play(this.gigaAttackAnimationName);

        this.chargeSound.play({volume:0.15, loop: true});

        const spawnX = this.sprite.x - 5;

        const spawnY = this.sprite.y - 115;

        this.sphereSprite =

            this.scene
                .add
                .sprite(
                    spawnX,
                    spawnY,
                    "high_max_sphere_1"
                );

        this.sphereSprite.setDepth()
        
        this.sphereSprite.play("high_max_sphere");

        this.sphereSprite
            .setScale(2);

        this.sphereSprite
            .setOrigin(
                0.5,
                1
            );

        this.sphereSprite.setDepth(99999);

        await this.wait(2000);

        for (
            const player of
            this.scene.players
        ) {

            const gigaAttackSpawnY = spawnY - 100;

            let targetX =

                player.hurtbox.x +

                player.hurtbox.width
                / 2;

            let targetY =

                player.hurtbox.y +

                player.hurtbox.height
                / 2;

            //
            // direção do tiro
            //

            const angle =

                Phaser.Math
                    .Angle
                    .Between(

                        spawnX,
                        gigaAttackSpawnY,

                        targetX,
                        targetY

                    );

            const speed =
                8;

            const velocityX =

                Math.cos(angle) *
                speed;

            const velocityY =

                Math.sin(angle) *
                speed;
        
            this.gigaAttackSpere(spawnX, gigaAttackSpawnY, velocityX, velocityY);

            await this.wait(2000);

        }

        this.sphereSprite.destroy();

        this.chargeSound.stop();

        await this.playAnimation(this.stopGigaAttackAnimationName);

        this.sprite.play(
            this.idleAnimationName
        );

    }

    sphere(startX, startY, velocityX, velocityY) {
    
            const shot =
    
                new BaseShot(
    
                    this.scene,
    
                    startX,
                    startY,
    
                    velocityX,
                    velocityY,
    
                    this.attackDamage,
                    this,
                    "high_max_attack_sphere_1",
                    "high_max_attack_sphere",
                    true,
                    40,
                    40,
                    false,
                    false
    
                );
    
            this.shots.push(
                shot
            );
    
        }

    gigaAttackSpere(startX, startY, velocityX, velocityY) {

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                velocityX,
                velocityY,

                this.gigaAttackDamage,
                this,
                "high_max_giga_attack_sphere_1",
                "high_max_giga_attack_sphere",
                false,
                40,
                40,
                false,
                false,
                true,
                this.gigaAttackSound

            );

        this.shots.push(
            shot
        );

    }

}