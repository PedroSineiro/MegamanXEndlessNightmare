import BaseEnemy
from "../../BaseEnemy.js";
import BaseShot from "../../BaseShot.js";

export default class
Nightmare
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
            30;

        this.hp =
            30;

        this.damage = 18;

        this.filename = "nightmare"

        this.explosionOffsetY = -140;

        this.idleAnimationName = "nightmare_idle"

        this.startAttackAnimationName = "nightmare_inter_attack"

        this.attackAnimationName = "nightmare_attack"

        this.stopAttackAnimationName = "nightmare_inter_attack"

        //
        // sprite
        //

        this.originalX = x

        this.originalY = y


        this.setupSprite(
            "nightmare_idle_1",
            x + offsetX,
            y + offsetY
        );

        this.sprite.play(this.idleAnimationName);

        //
        // hurtbox
        //

        this.createHurtbox(

            30,
            40,

            this.direction===-1?-30:0,
            -150

        );

        //
        // debug
        //

        this.debugGraphics =

            scene
                .add
                .graphics();

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

        this.sprite.play(this.attackAnimationName);

        this.shoot(startX, startY, velocityX, velocityY);

        await this.wait(1000);

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

        this.scene.sfx.play("nightmare_shot",
        {
            volume:0.15
        })

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                velocityX,
                velocityY,

                this.damage,
                this,
                "nightmare_shot_1",
                "nightmare_shot"
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