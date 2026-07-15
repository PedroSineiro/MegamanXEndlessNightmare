export default class IcicleSpear {

    constructor(
        scene,
        x,
        y,
        spriteName,
        animationName
    ) {

        this.scene =
            scene;

        this.sprite =

        scene.add
            .sprite(

                x,
                y,

                spriteName

            )

            .setScale(
                2
            )

            .setDepth(
                500
            );

        if (
            animationName
        ) {

            this.sprite.play(
                animationName
            );

        }

    }

    async flyUp(
        speed = 12
    ) {

        return new Promise(

            resolve => {

                const event =

                    this.scene.time.addEvent({

                        delay:
                            16,

                        loop:
                            true,

                        callback: () => {

                            this.sprite.y -=
                                speed;

                            //
                            // saiu da tela?
                            //

                            if (

                                this.sprite.y <

                                -200

                            ) {

                                event.remove();

                                this.destroy();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    destroy() {

        this.sprite?.destroy();

    }

}