import BaseEnemy
from "../../BaseEnemy.js";
import BaseShot from "../../BaseShot.js";


export default class
GroundEnemy2
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
            this.maxHp;

        this.damage = 12;

        this.filename = "ground_enemy_2"

        this.explosionOffsetY = -140;

        this.idleAnimationName = "ground_enemy_2_idle"

        this.startAttackAnimationName = "ground_enemy_2_start_attack"

        this.stopAttackAnimationName = "ground_enemy_2_stop_attack"

        //
        // sprite
        //

        this.originalX = x

        this.originalY = y


        this.setupSprite(
            "ground_enemy_2_idle_1",
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

        this.shoot(startX, startY, velocityX, velocityY);

        await this.playAnimation(this.stopAttackAnimationName);

        this.sprite.play(this.idleAnimationName);
        //
        // espera tiro sair
        //

        await this.wait(
            2000
        );

    }

    shoot(startX, startY, velocityX, velocityY) {

        this.scene.sfx.play("ground_enemy_2_shot",
        {
            volume:0.15
        });

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                velocityX,
                velocityY,

                this.damage,
                this,
                "ground_enemy_2_shot_1",
                "ground_enemy_2_shot",
                true,
                18,
                18

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