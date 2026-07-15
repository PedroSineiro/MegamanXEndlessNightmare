import BaseEnemy
from "../../BaseEnemy.js";
import BaseShot from "../../BaseShot.js";

export default class
FlyingEnemy1
extends BaseEnemy {

    constructor(
        scene,
        x,
        offsetX,
        y,
        offsetY,
        direction
    ) {

        super(
            scene,
            x + offsetX,
            y + offsetY,
            direction
        );

        //
        // stats
        //

        this.maxHp =
            20;

        this.hp =
            this.maxHp;

        this.damage = 15;

        this.filename = "flying_enemy_1"

        //
        // sprite
        //

        this.idleAnimationName = "flying_enemy_1_idle"

        this.originalX = x

        this.originalY = y


        this.setupSprite(
            "flying_enemy_1_1",
            x + offsetX,
            y + offsetY
        );

        this.sprite.play(
            this.idleAnimationName
        );

        //
        // hurtbox
        //

        this.createHurtbox(

            30,
            40,

            this.direction===-1?-30:0,
            -150

        );

    }

    async performAttack(
        target
    ) {

        this.scene.sfx.play("generic_shot",
            {
                volume:0.2
            })

        //
        // ponto do disparo
        //

        const startX =

            this.sprite.x +

            (
                this.direction === 1
                ? 30
                : -30
            );

        const startY =
            this.sprite.y - 125;

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

        this.shoot(startX, startY, velocityX, velocityY)

        //
        // espera tiro sair
        //

        await this.wait(
            1500
        );

    }

    shoot(startX, startY, velocityX, velocityY) {

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                velocityX,
                velocityY,

                this.damage,
                this,
                "enemy1_shot_1",
                "enemy1_shot"

            );

        this.shots.push(
            shot
        );

    }

    update() {

        super.update();

        if (
            !this.active
        ) {
            return;
        }

    }

    destroy() {

        super.destroy();

    }

}