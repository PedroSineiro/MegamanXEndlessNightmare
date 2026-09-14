import DataManager from "../systems/DataManager.js";
import SoundManager from "../systems/SoundManager.js";

export default class PauseScene extends Phaser.Scene {

    constructor() {
        super("PauseScene");
    }

    create() {

        this.scene.bringToTop();

        this.volume = this.sound.volume;

        this.sfx =
            new SoundManager(
                this
        );
        
        this.buttons = [];

        this.add.rectangle(
            640,
            360,
            1280,
            900,
            0x000000,
            0.5
        );

        this.add.text(
            500,
            280,
            "PAUSED",
            {
                fontFamily: "MegaManX",
                fontSize: "24px",
                color: "#FFFFFF"
            }
        )
        .setOrigin(0.5);

        this.input.keyboard.once(

            "keydown-ESC",

            () => {

                this.sfx.play(
                    "choosing_menu"
                );

                this.scene.resume(
                    "CombatScene"
                );

                this.scene.stop();

            }

        );

        this.volumeText = this.add.text(
            600,
            50,
            `MASTER VOLUME: 50%`,
            {
                fontFamily: "MegaManX",
                fontSize: "20px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        this.leftButton = this.add.text(
            710,
            65,
            "<",
            {
                fontFamily: "MegaManX",
                fontSize: "20px",
                color: "#FFFFFF"
            }
        )
        .setInteractive({
            useHandCursor:
                true
        });

        this.rightButton = this.add.text(
            750,
            65,
            ">",
            {
                fontFamily: "MegaManX",
                fontSize: "20px",
                color: "#FFFFFF"
            }
        )
        .setInteractive({
            useHandCursor:
                true
        });

        this.leftButton.on("pointerdown", () => {

            this.sfx.play(
                    "choosing_menu",
                    {
                        volume: 0.15
                    }
                );

            this.volume =

                Math.max(
                    0,
                    this.volume - 0.1
                );

            this.updateVolume();

        });

        this.rightButton.on("pointerdown", () => {

            this.sfx.play(
                    "choosing_menu",
                    {
                        volume: 0.15
                    }
                );

            this.volume =

                Math.min(
                    1,
                    this.volume + 0.1
                );

            this.updateVolume();

        });

        this.createMenuButton(

            "RESUME",

            500,
            400,

            () => {
                this.scene.resume("CombatScene");
                this.scene.stop();
            }

        );

        if(DataManager.hasPassedFirstStage()){
            this.createMenuButton(

                "BACK TO BASE",

                500,
                460,

                async () => {

                    await this.switchScene("BaseScene");
                }

            );
        }

        this.createMenuButton(

            "BACK TO TITLE SCREEN",

            500,
            520,

            async () => {
                    await this.switchScene("TitleScene");
            }

        );
        

        this.updateVolume();

    }

    async switchScene(sceneName, sceneArg = {}) {

        this.cameras.main.fadeOut(
            500,
            0,
            0,
            0
        );

        await new Promise(resolve => {

            this.cameras.main.once(
                Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
                resolve
            );

        });

        const combatScene = this.scene.get("CombatScene");

        combatScene.bgm?.stop();
        combatScene.rainSound?.stop();
        this.scene.stop("CombatScene");
        this.scene.stop("PauseScene");

        this.scene.start(
            sceneName,
            sceneArg
        );

    }

    updateVolume() {

        const volume =

            Math.round(
                this.volume * 100
            );

        this.volumeText.setText(
            `MASTER VOLUME: ${volume}%`
        );

        this.sound.setVolume(
            this.volume
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

                this.buttons.forEach(button => button.disableInteractive());

                this.sfx.play(
                    "buying_upgrade",
                    {
                        volume: 0.15
                    }
                );

                callback?.();

            }

        );

        this.buttons.push(button);

        return button;

    }

}