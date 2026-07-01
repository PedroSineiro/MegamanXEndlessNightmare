export default class
TargetSelector {

    constructor(scene) {

        this.scene =
            scene;

        this.isSelecting =
            false;

        this.targets =
            [];

        this.targetHighlights = [];

    }

    startSelection(
        actor,
        callback
    ) {

        if (
            this.isSelecting
        ) {
            return;
        }

         this.clear();

        this.isSelecting = true;

        this.scene.enemies
            .forEach(

            enemy => {

                if (
                    enemy.isDead
                ) {
                    return;
                }

                const blocked =

                    this.scene
                        .isEnemyBlocked(
                            enemy
                        );

                if (
                    blocked
                ) {

                    enemy.sprite
                        .setAlpha(
                            0.45
                        );

                    return;
                }

                enemy.sprite
                    .setAlpha(
                        1
                    );

                //
                // posição fixa
                //

                const x =
                    enemy.spawnX;

                const y =
                    enemy.originalY;

                const width =
                    50;

                const height =
                    50;


                //
                // zona clicável
                //

                const targetZone =

                this.scene
                    .add
                    .zone(
                        x,
                        y,
                        width,
                        height
                    )
                .setInteractive({

                    useHandCursor:
                        true

                });
                //
                // referência
                //

                targetZone.enemy =
                    enemy;

                targetZone.once(

                    "pointerdown",

                    () => {

                        this.clear();

                        callback(
                            enemy
                        );

                    }

                );

                this.targets.push(
                    targetZone
                );

                //
                // debug
                //

                const highlight =

                this.scene
                    .add
                    .rectangle(

                        x,
                        y,

                        width,
                        height,

                        0x00ff00,
                        0.25

                    )

                    .setDepth(
                        99998
                    );

            //
            // animação de piscar
            //

            this.scene.tweens.add({

                targets:
                    highlight,

                alpha:
                    0.05,

                duration:
                    300,

                yoyo:
                    true,

                repeat:
                    -1

            });

            this.targetHighlights.push(
                highlight
            );

            }

        );

    }

    clear() {

        this.targetHighlights
            .forEach(

                highlight => {

                    highlight.destroy();

                }

            );

        this.targetHighlights = [];

        this.targets
            .forEach(

            target => {

                target.destroy();

            }

        );

        this.targets =
            [];

        this.scene.enemies
            .forEach(

            enemy => {

                enemy.sprite
                    ?.setAlpha(
                        1
                    );

            }

        );

        this.isSelecting =
            false;

    }

}