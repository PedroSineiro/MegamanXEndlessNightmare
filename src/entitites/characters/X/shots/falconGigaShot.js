export default class FalconGigaShot {

    constructor(

        scene,

        owner,

        x,

        y,

        direction,

        damage

    ) {

        this.scene =
            scene;

        this.owner = owner;

        this.active =
            true;

        this.direction =
            direction;

        this.damage =
            damage;

        this.throughShield = true;

        this.speed =
            16;

        this.sprite =

            scene.add.sprite(

                x,
                y,

                "falcon_charged_shot_1"

            );

        this.sprite.play(
            "falcon_charged_shot_moving"
        );

        this.sprite.setDepth(
            9999
        );

        this.sprite.setScale(
            2
        );

        //
        // sprite aponta para direita
        //

        if (
            direction === -1
        ) {

            this.sprite.setAngle(
                -90
            );

        } else {

            this.sprite.setAngle(
                90
            );

        }

        this.hitbox =

            new Phaser
                .Geom
                .Rectangle(

                    x - 20,
                    y - 40,

                    40,
                    80

                );

    }

    update() {

        if (
            !this.active
        ) {
            return;
        }

        this.sprite.y +=

            this.speed *
            this.direction;

        this.hitbox.x =
            this.sprite.x - 20;

        this.hitbox.y =
            this.sprite.y - 40;

        const screenHeight =

            this.scene.scale
                .height;

        if (

            this.sprite.y <
            -200 ||

            this.sprite.y >
            screenHeight + 200

        ) {

            this.destroy();

        }

    }

    destroy() {

        this.active =
            false;

        this.sprite?.destroy();

        this.owner.gigaShots = this.owner.gigaShots.filter(gigaShot => gigaShot.active);

    }

}