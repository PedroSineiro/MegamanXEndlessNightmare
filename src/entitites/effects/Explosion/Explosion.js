export default class
Explosion {

    constructor(
        scene,
        x,
        y,
        scale = 2
    ) {

        this.scene =
            scene;

        //
        // sprite
        //

        this.sprite =
            scene.add.sprite(
                x,
                y,
                "explosion_1"
            );

        this.sprite
            .setScale(scale);

        //
        // depth
        //

        this.sprite
            .setDepth(y + 100);

        //
        // som
        //

        scene.sound.play(
            "explosion",{
                volume: 0.1
            }
        );

        //
        // animação
        //

        this.sprite.play(
            "explosion"
        );

        //
        // remove sozinho
        //

        this.sprite.once(

            Phaser.Animations
            .Events
            .ANIMATION_COMPLETE,

            () => {

                this.destroy();

            }

        );

    }

    destroy() {

        this.sprite
            ?.destroy();

    }

}