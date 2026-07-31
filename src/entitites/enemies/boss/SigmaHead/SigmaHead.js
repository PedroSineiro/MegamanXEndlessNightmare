import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";

export default class
SigmaHead
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
            "sigma_head";

        this.spawnAnimationName = "sigma_head_spawning";

        this.idleAnimationName = "sigma_head_idle";

        this.attackAnimationName = "sigma_head_attack";

        this.gigaAttackAnimationName = "sigma_head_giga_attack";

        this.stopGigaAttackAnimationName = "sigma_head_stop_giga_attack";

        this.teleportSound = "sigma_head_teleport";

        this.electricSound = "sigma_head_electric";

        this.name = "Sigma";

        this.hudColor = "#851071";

        this.maxHp = 900;

        this.hp = this.maxHp;

        this.attackDamage = 40;

        this.gigaAttackDamage = 17;

        this.originalY = y;

        //
        // sprite
        //

        this.targetSpawnY = y + offsetY;

        this.setupSprite(

            "sigma_head_spawning_0",

            x,

            this.targetSpawnY

        );

    }

    async spawn() {

        this.isBusy =
            true;

        await this.wait(1000);

        this.scene.sfx.play(this.teleportSound);

        await this.playAnimation(this.spawnAnimationName);

        this.sprite.play(this.idleAnimationName);

        await this.wait(500);

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
        const startX =

            this.sprite.x +

            (
                this.direction === 1
                ? 50
                : -150
            );

        const startY =
            this.sprite.y - 300;

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

        this.scene.sfx.play(this.electricSound);

        this.sphere(startX, startY, velocityX, velocityY);

        await this.wait(1000);

    }

    async beforeTurn() {
        this.sprite.play(this.attackAnimationName);
    }

    async afterTurn() {
        this.sprite.play(this.idleAnimationName);
    }


    async gigaAttack() {

        await this.playAnimation(
            this.gigaAttackAnimationName
        );

        const spawnX = this.sprite.x - 90;

        const spawnY = this.sprite.y - 170;

        

        for (

            let i = 0;

            i < 4;

            i++

        ) {

            for (

                const player of

                this.scene.players

            ) {
                if(player.isDead) return;

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
                            spawnY,

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
            
                this.gigaAttackSpere(spawnX, spawnY, velocityX, velocityY);

                await this.wait(500);

            }

        }

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
                    "sigma_head_attack_sphere_1",
                    "sigma_head_attack_sphere",
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
                "sigma_head_giga_attack_sphere_1",
                "sigma_head_giga_attack_sphere",
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