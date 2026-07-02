export default class ZeroGigaShot {

    constructor(
        scene,
        x,
        y,
        damage
    ) {

        this.scene =
            scene;

        this.active =
            true;

        this.speed =
            14;

        this.damage = damage;

        //
        // sprite
        //

        this.sprite =
            scene.add.sprite(
                x,
                y,
                "zero_giga_shot_1"
            );

        this.sprite.play(
            "zero_giga_shot"
        );

        this.sprite.setScale(
            2
        );

        //
        // depth
        //

        this.sprite.setDepth(
            9999
        );

        //
        // hitbox
        //

        this.hitbox =
            new Phaser
                .Geom
                .Rectangle(
                    x - 40,
                    y - 40,
                    70,
                    40
                );

        //
        // debug
        //
        /*
        this.debugGraphics =
            scene.add.graphics();

        this.debugGraphics
            .setDepth(
                99999
            );*/

    }

    update() {

        if (
            !this.active
        ) {
            return;
        }

        //
        // sobe
        //

        this.sprite.y -=
            this.speed;

        //
        // atualiza hitbox
        //

        this.hitbox.x =
            this.sprite.x - 40;

        this.hitbox.y =
            this.sprite.y - 40;

        //
        // debug
        //

        /*
        this.debugGraphics
            .clear();

        this.debugGraphics
            .fillStyle(
                0x00ffff,
                0.3
            );

        this.debugGraphics
            .fillRect(

                this.hitbox.x,

                this.hitbox.y,

                this.hitbox.width,

                this.hitbox.height

            );*/

        //
        // saiu da tela
        //

        if (
            this.sprite.y <
            -100
        ) {

            this.destroy();

        }

    }

    destroy() {

        this.active =
            false;

        this.sprite
            ?.destroy();

        this.debugGraphics
            ?.destroy();

    }

}