export default class BossHUD {

    constructor(
        scene,
        x = 800,
        y = 820
    ) {

        this.scene =
            scene;

        this.boss =
            scene.boss;

        this.container =

            scene.add
                .container(
                    x,
                    y
                )

                .setDepth(
                    99999
                );

        //
        // fundo
        //

        this.background =

            scene.add
                .rectangle(

                    100,
                    0,

                    300,
                    100,

                    0x111111,
                    0.85

                )

                .setOrigin(
                    0,
                    0
                );

        //
        // texto
        //

        this.bossText =

            scene.add.text(

                100,
                10,

                "",

                {
                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "14px",

                    color:
                        this.boss.hudColor
                }

            );

        this.container.add([

            this.background,

            this.bossText

        ]);

    }

    update() {

        if (
            !this.boss ||
            this.boss.isDead
        ) {
            return;
        }

        this.bossText
            .setText(

` ${this.boss.name}
 HP: ${this.boss.hp}/${this.boss.maxHp}`

            );

    }

    async destroy() {

        if (
            !this.container
        ) {
            return;
        }

        //
        // fade out
        //

        await new Promise(

            resolve => {

                this.scene
                    .tweens
                    .add({

                        targets:
                            this.container,

                        alpha: 0,

                        duration:
                            500,

                        ease:
                            "Quad.easeOut",

                        onComplete:
                            resolve

                    });

            }

        );

        this.container
            .destroy();

        this.container =
            null;

    }

}