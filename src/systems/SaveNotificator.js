export default class SaveNotificator {

    static uiScene = null;

    static currentNotification = null;

    static setUIScene(uiScene) {
        this.uiScene = uiScene;
    }

    static notify() {

        if (!this.uiScene) {
            return;
        }

        if (this.currentNotification) {

            this.currentNotification.destroy();

            this.currentNotification = null;
        }

        const scene = this.uiScene;

        const container = scene.add.container(
            500,
            -100
        );

        const bg = scene.add.rectangle(
            0,
            0,
            250,
            60,
            0x000000,
            0.9
        );

        bg.setStrokeStyle(
            2,
            0xffffff
        );

        const text = scene.add.text(
            0,
            0,
            "GAME SAVED",
            {
                fontFamily: "MegaManX",
                fontSize: "12px",
                color: "#33ff21"
            }
        ).setOrigin(0.5);

        container.add([
            bg,
            text
        ]);

        container.setDepth(999999);

        this.currentNotification = container;

        scene.tweens.add({

            targets: container,

            y: 60,

            duration: 250,

            onComplete: () => {

                scene.time.delayedCall(

                    2000,

                    () => {

                        scene.tweens.add({

                            targets: container,

                            y: -100,

                            duration: 250,

                            onComplete: () => {

                                if (this.currentNotification === container) {
                                    this.currentNotification = null;
                                }

                                container.destroy();
                            }

                        });

                    }

                );

            }

        });

    }

}