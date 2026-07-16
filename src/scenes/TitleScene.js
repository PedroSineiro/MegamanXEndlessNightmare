import SceneHelper from "../systems/SceneHelper.js";

import DataManager from "../systems/DataManager.js";

import SoundManager from "../systems/SoundManager.js";

export default class TitleScene extends Phaser.Scene {

    constructor() {

        super(
            "TitleScene"
        );

    }

    preload() {


        //
        // logo
        //

        this.load.image(

            "game_logo",

            "assets/images/logo.png"

        );

        this.load.image(

            "x_and_zero",

            "assets/images/x_and_zero.png"

        );

        this.load.audio(
            "buying_upgrade",
            "assets/sounds/menu/selecting_menu_2.wav"
        );

        this.load.audio(

            "openning_music",

            "assets/music/openning.mp3"

        );

        //
        // botão
        //

    }

    async create() {

        this.volume = this.sound.volume;

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


        this.bgm =

        this.sound.add(

           "openning_music",

            {
                loop: true,
                volume: 0.15
            }

        );

        this.bgm.play();

        this.cameras.main
            .setBackgroundColor(
                "#000000"
            );

        //
        // logo
        //

        const logo =

            this.add.image(

                500,
                220,

                "game_logo"

            );

        logo.setDisplaySize(
            550,
            200
        );

        this.logo = logo;

        const xAndZero =

            this.add.image(

                500,
                620,

                "x_and_zero"

            );

        this.xAndZero = xAndZero;

        //
        // botão
        //

        this.newGameButton = 

        this.createMenuButton(

            "NEW GAME",

            500,
            460,

            () => this.startNewGame()

        );

        if (
            DataManager.hasSaveData()
        ) {
            this.continueGameButton = 

            this.createMenuButton(

                "CONTINUE",

                500,
                520,

                () => this.continueGame()

            );

        }

        this.howToPlayButton = 

        this.createMenuButton(

            "HOW TO PLAY",

            500,
            580,

            () => this.changeMenu(true)

        );

        this.howToPlayText =

    this.add.text(

        120,
        180,

`MEGAMAN ENDLESS NIGHTMARE

Megaman Endless Nightmare is a turn-based game where you control X and Zero.

Each character has 4 actions per turn and can use them offensively or defensively.

ATTACK
Use attacks to damage enemies. X specializes in ranged attacks while Zero excels in close combat.

DEFENSE
Characters can use turns to raise their evasion chance and damage reduction for the turn.

POWERFULL ATTACKS
Powerfull attacks cost more actions to use, X can shoot charged shoots and Zero can do Saber combos to do more damage.

GIGA ATTACKS
Both hunters can possess devastating special attacks capable of turning the tide of battle, it recharges in some turns.

UPGRADES
Collect Nightmare Scrap during missions to purchase Heart Tanks, Energy Tanks, Armors and other upgrades.

OBJECTIVE
Clear enemy waves, defeat Mavericks and uncover the source of the Nightmare outbreak.`,

        {

            fontFamily: "MegaManX",

            fontSize: "14px",

            color: "#FFFFFF",

            wordWrap: {
                width: 760
            }

        }

    )

    .setDepth(100)

    .setVisible(false);

    this.backButton =

        this.createMenuButton(

            "BACK",

            500,
            720,

            () => this.changeMenu(false)

        );

    this.backButton.setVisible(false);


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

        this.updateVolume();
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

    changeMenu(showHowToPlay){

        //
        // menu principal
        //

        this.logo.setVisible(
            !showHowToPlay
        );

        this.xAndZero.setVisible(
            !showHowToPlay
        );

        this.newGameButton.setVisible(
            !showHowToPlay
        );

        this.continueGameButton?.setVisible(
            !showHowToPlay
        );

        this.howToPlayButton.setVisible(
            !showHowToPlay
        );

        //
        // tutorial
        //

        this.howToPlayText.setVisible(
            showHowToPlay
        );

        this.backButton.setVisible(
            showHowToPlay
        );

    }

    async startNewGame(){
         //
        // fade
        //

        this.newGameButton.disableInteractive();

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

        this.bgm?.stop();

        this.bgm?.destroy();

        //
        // start combat
        //

        this.scene.start(

        "IntroScene", {}

        );
    }

    async continueGame() {

        this.continueGameButton.disableInteractive();

        const saveData =

            DataManager.loadSaveData();

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


        this.bgm?.stop();

        this.scene.start(

            "BaseScene",

            saveData

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