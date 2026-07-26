import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";

export default class
Sigma
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
            "sigma";

        this.startSpawnAnimationName = "sigma_start_spawning";

        this.spawnAnimationName = "sigma_spawning";

        this.capeIdleAnimationName = "sigma_cape_idle";

        this.startPreparingAnimationName = "sigma_start_preparing";

        this.preparingAnimationName = "sigma_preparing";

        this.idleAnimationName = "sigma_idle";

        this.attackAnimationName = "sigma_attack";

        this.stopAttackAnimationName = "sigma_stop_attack";

        this.deathAnimationName = "sigma_dying";

        this.name = "Sigma";

        this.hudColor = "#851071";

        this.maxHp = 900;

        this.hp = this.maxHp;

        this.attackDamage = 45;

        this.gigaAttackDamage = 75;

        this.originalY = y;

        //
        // sprite
        //

        this.targetSpawnY = y + offsetY;

        this.setupSprite(

            "sigma_spawning_0",

            x,

            300

        );

    }

    async spawn() {

        this.isBusy =
            true;

        await this.wait(500);

        await this.playAnimation(this.startSpawnAnimationName);

        this.sprite.play(this.spawnAnimationName);

        await this.moveToY(this.targetSpawnY,1.5);

        this.sprite.play(this.capeIdleAnimationName);

        await this.wait(500);

        await this.playAnimation(this.startPreparingAnimationName);

        this.throwCape({

            startX: this.sprite.x,

            startY: this.sprite.y - 180,

            velocityX: 4,

            velocityY: -8,

            gravity: 0.35,

            rotationSpeed: 0

        });

        await this.playAnimation(this.preparingAnimationName);

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

    async throwCape({

        startX,

        startY,

        velocityX,

        velocityY,

        gravity = 0.35,

        rotationSpeed = 0.15

    }) {

        return new Promise(

            resolve => {

                const cape =

                    this.scene.add.sprite(

                        startX,

                        startY,

                        "sigma_cape"

                    );

                cape.setScale(2);

                let vx =
                    velocityX;

                let vy =
                    velocityY;

                const event =

                    this.scene.time.addEvent({

                        delay: 16,

                        loop: true,

                        callback: () => {

                            cape.x += vx;

                            cape.y += vy;

                            vy += gravity;

                            cape.rotation +=
                                rotationSpeed;

                            if (

                                cape.y >

                                this.scene.scale.height + 200

                            ) {

                                event.remove();

                                cape.destroy();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    async performAttack(
        target
    ) {

        await this.playAnimation(this.attackAnimationName);

        const startX =

            this.sprite.x +

            (
                this.direction === 1
                ? 50
                : -50
            );

        const startY =
            this.sprite.y - 240;

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


        this.wave(startX, startY, velocityX, velocityY);

        await this.playAnimation(this.stopAttackAnimationName);
        this.sprite.play(this.idleAnimationName);

        await this.wait(1000);

    }


    async gigaAttack() {

        await this.playAnimation(
            this.attackAnimationName
        );

        const spawnX = this.sprite.x - 90;

        const spawnY = this.sprite.y - 170;

        this.gigaAttackBlock(spawnX, spawnY);

        await this.wait(2000);

        await this.playAnimation(
            this.stopAttackAnimationName
        );

        this.sprite.play(this.idleAnimationName);
    }

    wave(startX, startY, velocityX, velocityY) {
    
            const shot =
    
                new BaseShot(
    
                    this.scene,
    
                    startX,
                    startY,
    
                    velocityX,
                    velocityY,
    
                    this.attackDamage,
                    this,
                    "sigma_attack_wave_1",
                    "sigma_attack_wave",
                    true,
                    40,
                    40,
                    false,
                    true
    
                );
    
            this.shots.push(
                shot
            );
    
        }

    gigaAttackBlock(startX, startY) {

       const shot =

        new BaseShot(

            this.scene,

            startX,
            startY,

            -7,
            0,

            this.gigaAttackDamage,
            this,
            "sigma_block_1",
            "sigma_block",
            false,
            200,
            180,
            true,
            false,
            true

        );


        this.shots.push(
            shot
        );

    }

}