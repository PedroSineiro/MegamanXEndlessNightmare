import BaseEnemy
from "../../BaseEnemy.js";

export default class
FlyingEnemy2
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
            15;

        this.hp =
            15;

        this.damage = 20;

        this.filename = "flying_enemy_2"

        //
        // sprite
        //

        this.originalX = x

        this.originalY = y

        this.idleAnimationName = "flying_enemy_2_idle"


        this.direction = direction

        this.setupSprite(
            "flying_enemy_2_1",
            x + offsetX,
            y + offsetY
        );

        this.sprite.play(this.idleAnimationName)

        //
        // hurtbox
        //

        this.createHurtbox(

            80,
            60,

            this.direction===-1?-50:-20,
            -150

        );

    }

    async performAttack(
        target
    ) {

        const originalX =
            this.spawnX;

        const originalY =
            this.spawnY;

        //
        // salva direção/orientação original
        //

        const originalDirection =
            this.direction;

        const originalFlipX =
            this.sprite.flipX;

        //
        // virar pro alvo
        //

        const dx =

            target.sprite.x -

            this.sprite.x;

        this.direction =

            dx > 0
            ? 1
            : -1;

        this.sprite.setFlipX(
            this.direction === 1
        );

        //
        // aproxima
        //

        const stopDistance =
            0;

        const targetX =

            target.sprite.x -

            (
                this.direction *
                stopDistance
            );

        await this.moveTo(

            targetX,

            target.sprite.y

        );

        //
        // hitbox ataque
        //

        const attackHitbox =

            new Phaser
                .Geom
                .Rectangle(

                    this.hurtbox.x,

                    this.hurtbox.y,

                    this.hurtbox.width,

                    this.hurtbox.height

                );

        //
        // acertou?
        //

        const hit =

            Phaser
                .Geom
                .Intersects
                .RectangleToRectangle(

                    attackHitbox,

                    target.hurtbox

                );

        if (
            hit
        ) {

            target.receiveAttack(this.damage, this);

        }

        //
        // virar para trás
        //

        this.sprite.setFlipX(
            !originalFlipX
        );

        //
        // volta
        //

        await this.moveTo(

            originalX,

            originalY

        );

        //
        // restaura orientação original
        //

        this.direction =
            originalDirection;

        this.sprite.setFlipX(
            originalFlipX
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