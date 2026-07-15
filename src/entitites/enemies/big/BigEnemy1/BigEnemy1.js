import BaseEnemy
from "../../BaseEnemy.js";

export default class
BigEnemy1
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
            120;

        this.hp =
            this.maxHp;

        this.damage = 40;

        this.filename = "big_enemy_1"

        //
        // sprite
        //

        this.idleAnimationName = "big_enemy_1_idle";

        this.explosionOffsetY = -140;

        this.originalX = x;

        this.originalY = y;

        this.offsetX = offsetX;

        this.offsetY = offsetY;


        this.setupSprite(
            "big_enemy_1_1",
            x + offsetX,
            y + offsetY
        );

        this.sprite.play(this.idleAnimationName)

        this.startAttackAnimationName = "big_enemy_1_start_attack"

        this.attackAnimationName = "big_enemy_1_attack"

        this.idleAnimationName = "big_enemy_1_idle"

        this.dashAnimationName = "big_enemy_1_dash"

        //
        // hurtbox
        //

        this.createHurtbox(

            80,
            120,

            -30,
            -250

        );

    }

    async performAttack(
        target
    ) {

        const originalX =
            this.spawnX;

        const originalY =
            this.spawnY;

        const originalDirection =
            this.direction;

        const originalFlipX =
            this.sprite.flipX;

        //
        // mover até alvo
        //

        this.scene.sfx.play(
            "mecha_moving",
            {
                volume: 0.2
            }
        );

        const dx =

            target.sprite.x -

            this.sprite.x;

        //
        // virar pro alvo
        //

        this.direction =

            dx > 0
            ? 1
            : -1;

        this.sprite.setFlipX(
            this.direction === 1
        );

        //
        // parar frente a frente
        //

        const stopDistance =
            120;

        const targetX =

            target.sprite.x -

            (
                this.direction *
                stopDistance
            );

        //
        // alinhar pelo pé
        //

        const targetY =
            target.sprite.y+20;

        //
        // dash
        //

        this.sprite.play(
            this.dashAnimationName
        );

        await this.moveTo(

            targetX,

            targetY

        );

        await this.playAnimation(
            this.startAttackAnimationName
        );

        this.scene.sfx.play(
            "mecha_attack",
            {
                volume: 0.2
            }
        );

        this.sprite.play(
            this.attackAnimationName
        );

        const hitboxWidth =
            90;

        const hitboxHeight =
            80;

        const hitboxOffsetX =
            40;

        const hitboxOffsetY = 
            180;

        await this.meleeAttack(target, this.damage, hitboxWidth, hitboxHeight, hitboxOffsetX, hitboxOffsetY);

        //
        // dash de volta
        //

        this.sprite.play(
            this.dashAnimationName
        );

        this.sprite.setFlipX(
            !originalFlipX
        );

        this.scene.sfx.play(
            "mecha_moving",
            {
                volume: 0.2
            }
        );

        await this.moveTo(

            originalX,

            originalY

        );

        this.direction =
            originalDirection;

        this.sprite.setFlipX(
            originalFlipX
        );

        this.sprite.play(
            this.idleAnimationName
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