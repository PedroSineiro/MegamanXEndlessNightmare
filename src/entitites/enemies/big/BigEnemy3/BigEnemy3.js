import BaseEnemy
from "../../BaseEnemy.js";

import BaseShot
from "../../BaseShot.js";

export default class
BigEnemy3
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
            140;

        this.hp =
            this.maxHp;

        this.damage = 37;

        this.filename = "big_enemy_3"

        this.explosionOffsetY = -140;

        this.idleAnimationName = "big_enemy_3_idle"

        //
        // sprite
        //

        this.originalX = x

        this.originalY = y


        this.setupSprite(
            "big_enemy_3_1",
            x + offsetX,
            y + offsetY
        );

        //
        // hurtbox
        //

        this.createHurtbox(

            80,
            100,

            -30,
            -160

        );


    }

    async performAttack(
        target
    ) {
        
        //
        // ponto do disparo
        //

        const startX =

            this.sprite.x +

            (
                this.direction === 1
                ? 50
                : -50
            );

        const startY =
            this.sprite.y - 156;

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

        this.shoot(startX, startY, velocityX, velocityY);

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
                "big_enemy3_shot_1",
                "big_enemy3_shot"
            );

        this.shots.push(
            shot
        );

    }

    update() {

        //
        // base
        //

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