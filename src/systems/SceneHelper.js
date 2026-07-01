export default class SceneHelper {

    static createFadeOverlay(scene) {

        return scene.add
                .rectangle(

                    0,
                    0,

                    scene.scale.width,
                    scene.scale.height,

                    0x000000

                )

                .setOrigin(0)
                .setDepth(999999)
                .setAlpha(1)
                .setScrollFactor(0);

    }

    static async fadeToBlack(
        scene,
        duration = 500
    ) {

        return new Promise(

            resolve => {

                scene.tweens.add({

                    targets:
                        scene.fadeOverlay,

                    alpha:
                        1,

                    duration,

                    onComplete:
                        resolve

                });

            }

        );

    }
    
    static async fadeFromBlack(
        scene,
        duration = 1000
    ) {

        return new Promise(

            resolve => {

                scene.tweens.add({

                    targets:
                        scene.fadeOverlay,

                    alpha:
                        0,

                    duration,

                    onComplete:
                        resolve

                });

            }

        );

    }

    static wait(scene, ms) {
    
        return new Promise(

            resolve => {

                scene
                    .time
                    .delayedCall(

                        ms,

                        resolve

                    );

            }

        );

    }
}