export default class AttackHitbox {

    constructor(
        scene,
        owner,
        config,
        damage
    ) {

        this.scene = scene;

        this.owner =
            owner;

        this.damage = damage;

        this.active =
            true;

        this.hitbox =

            new Phaser
                .Geom
                .Rectangle(

                    0,
                    0,

                    config.width,
                    config.height
                );

        this.offsetX =
            this.owner.direction === 1? config.offsetXRight: config.offsetXLeft;

        this.offsetY =
            config.offsetY;

        this.duration =
            config.duration;

        this.alreadyHit =
            [];

        this.debugGraphics =
            scene.add.graphics();

        scene.time.delayedCall(

            this.duration,

            () => {

                this.destroy();

            }

        );

    }

    update() {

        if (
            !this.active
        ) {
            return;
        }

        const dir =

            this.owner
                .direction;

        this.hitbox.x =

            this.owner
                .sprite.x +

            (
                dir === 1
                ? this.offsetX
                : -this.offsetX
            );

        this.hitbox.y =

            this.owner
                .sprite.y +

            this.offsetY;

        //
        // debug
        //
/*
        this.debugGraphics
            .clear();

        this.debugGraphics
            .fillStyle(
                0xff0000,
                0.4
            );

        this.debugGraphics
            .fillRect(

                this.hitbox.x,

                this.hitbox.y,

                this.hitbox.width,

                this.hitbox.height

            );*/

    }

    destroy() {

        this.active =
            false;

        this.debugGraphics
            ?.destroy();

    }

}