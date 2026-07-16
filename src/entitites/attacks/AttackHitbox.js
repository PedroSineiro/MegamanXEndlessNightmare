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

    startGrowing({

        startWidth,

        endWidth,

        duration

    }) {

        this.hitbox.width =
            startWidth;

        this.scene.tweens.add({

            targets: this.hitbox,

            width: endWidth,

            duration

        });

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

        if (this.owner.direction === 1) {

            this.hitbox.x =

                this.owner.sprite.x +

                this.offsetX;

        }
        else {

            this.hitbox.x =

                this.owner.sprite.x +

                this.offsetX -

                this.hitbox.width;

        }

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

            );

        this.debugGraphics.setDepth(99999);*/

    }

    destroy() {

        this.active =
            false;

        this.debugGraphics
            ?.destroy();

    }

}