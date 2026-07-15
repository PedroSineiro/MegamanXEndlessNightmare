import BaseEnemy
from "../../BaseEnemy.js";

export default class
GroundEnemy1
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
            35;

        this.hp =
            this.maxHp;

        this.damage = 20;

        this.filename = "ground_enemy_1";

        this.idleAnimationName = "ground_enemy_1_idle";

        this.originalX = x;

        this.originalY = y;

        this.setupSprite(
            "ground_enemy_1_1",
            x + offsetX,
            y + offsetY
        );

        this.sprite.play(this.idleAnimationName)

        //
        // hurtbox
        //

        this.createHurtbox(

            60,
            60,

            -30,
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
            this.direction === -1
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
        // ataque
        //

        //
        // hitbox do ataque
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

            //
            // evasion
            //

            target.receiveAttack(this.damage,this);

        }

                //
        // volta
        //

        await this.moveTo(

            originalX,

            originalY

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