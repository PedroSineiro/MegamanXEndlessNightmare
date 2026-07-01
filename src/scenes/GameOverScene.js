import SceneHelper from "../systems/SceneHelper.js";

import DataManager from "../systems/DataManager.js";

import SoundManager from "../systems/SoundManager.js";

export default class GameOverScene extends Phaser.Scene {

    constructor() {

        super(
            "GameOverScene"
        );

    }

    init(data) {
        this.combatData = data;
    }

    async create() {

        this.sfx =
            new SoundManager(
                this
        );

        //
        // fundo
        //

        this.cameras
            .main
            .fadeIn(

                500,

                0,
                0,
                0

            )

        this.cameras.main
            .setBackgroundColor(
                "#000000"
            );

        this.add.text(

                360,
                300,

                "GAME OVER",

                {

                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "30px",

                    color:
                        "#FFFFFF",

                    stroke:
                        "#000000",

                    strokeThickness:
                        6

                }

        );

        //
        // botão
        //

        this.createMenuButton(

            "RETRY",

            500,
            400,

            () => this.switchScene("CombatScene", this.combatData)

        );

        if(DataManager.hasPassedFirstStage()){
            this.createMenuButton(

                "BACK TO BASE",

                500,
                460,

                () => this.switchScene("BaseScene")

            );
        }

        this.createMenuButton(

            "BACK TO TITLE SCREEN",

            500,
            520,

            () => this.switchScene("TitleScene")

        );

    }

    async switchScene(sceneName, sceneArg = {}) {
        //
        // fade
        //

        this.cameras
            .main
            .fadeOut(

                500,

                0,
                0,
                0

            );

        await new Promise(

            resolve => {

                this.time
                    .delayedCall(

                        500,

                        resolve

                    );

            }

        );

        this.scene.start(

        sceneName, sceneArg

        );
    }

    async retry(){
        //
        // fade
        //

        this.cameras
            .main
            .fadeOut(

                500,

                0,
                0,
                0

            );

        await new Promise(

            resolve => {

                this.time
                    .delayedCall(

                        500,

                        resolve

                    );

            }

        );

        this.scene.start(

        "CombatScene", this.combatData

        );
    }

    async backToBase() {

        this.cameras
            .main
            .fadeOut(

                500,

                0,
                0,
                0

            );

        await new Promise(

            resolve => {

                this.time
                    .delayedCall(

                        500,

                        resolve

                    );

            }

        );


        this.scene.start(

            "BaseScene",

            {}

        );

    }


    createMenuButton(
        text,
        x,
        y,
        callback
    ) {

        const button =

            this.add.text(

                x,
                y,

                text,

                {

                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "22px",

                    color:
                        "#FFFFFF",

                    stroke:
                        "#000000",

                    strokeThickness:
                        6

                }

            )

            .setOrigin(0.5)

            .setInteractive({

                useHandCursor:
                    true

            });

        button.on(

            "pointerover",

            () => button.setScale(
                1.05
            )

        );

        button.on(

            "pointerout",

            () => button.setScale(
                1
            )

        );


        button.on(

            "pointerdown",

            () => {

                button.disableInteractive();

                this.sfx.play(
                    "buying_upgrade",
                    {
                        volume: 0.15
                    }
                );

                callback?.();

            }

        );

        return button;

    }

}