import BaseEnemy
from "../../BaseEnemy.js";

import BaseShot
from "../../BaseShot.js";

export default class
BigEnemy2
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
            125;

        this.hp =
            125;

        this.damage = 35;

        this.filename = "big_enemy_2"

        this.explosionOffsetY = -240;

        this.idleAnimationName = "big_enemy_2_idle"

        this.startAttackAnimationName = "big_enemy_2_attack"

        this.stopAttackAnimationName = "big_enemy_2_stop_attack"

        //
        // sprite
        //

        this.originalX = x

        this.originalY = y


        this.setupSprite(
            "big_enemy_2_1",
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
            -280

        );

    }

    async performAttack(
        target
    ) {

        //
        // animação
        //

        await this.playAnimation(
            this.startAttackAnimationName
        );

        
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
            this.sprite.y - 256;

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

        await this.playAnimation(this.stopAttackAnimationName);

        this.sprite.play(this.idleAnimationName);
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
                "big_enemy2_shot_1",
                "big_enemy2_shot"

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