import DataManager from "../systems/DataManager.js";
import SceneHelper from "../systems/SceneHelper.js";
import SoundManager from "../systems/SoundManager.js";
import InterSceneManager from "../systems/InterSceneManager.js";

export default class IntroScene
extends Phaser.Scene {

    constructor() {

        super(
            "IntroScene"
        );

    }

    preload() {

        this.sfx =
            new SoundManager(
                this
            );

        this.load.audio(
            "text_beep",
            "assets/sounds/dialog/dialog.wav"
        );

        this.load.audio(
            "warning_beep",
            "assets/sounds/beggining_ending_phase/warning.wav"
        );

    }

    init(data) {

        this.data =
            data;

        this.createGameData();

        this.load.audio(
            "text_beep",
            "assets/sounds/dialog/dialog.wav"
        );

    }

    async create() {

         this.startWarningLoop();
        
        //
        // fundo
        //

        const background =

            this.add.rectangle(

                0,
                0,

                this.scale.width,

                this.scale.height,

                0x000000

            )

            .setOrigin(0);

        //
        // pisca vermelho
        //

        this.tweens.add({

            targets:
                background,

            alpha:
                0.8,

            duration:
                650,

            yoyo:
                true,

            repeat:
                -1

        });

        const redOverlay =

            this.add.rectangle(

                0,
                0,

                this.scale.width,

                this.scale.height,

                0x440000

            )

            .setOrigin(0)

            .setAlpha(0);

        this.tweens.add({

            targets:
                redOverlay,

            alpha:
                0.4,

            duration:
                650,

            yoyo:
                true,

            repeat:
                -1

        });

        const button =

            this.add.text(

                500,
                560,

                "CONTINUE",

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

            .setOrigin(
                0.5
            )
            .setInteractive(
                {
                    useHandCursor:
                        true
                }
            );

        //
        // hover
        //

        button.on(

            "pointerover",

            () => {

                button.setScale(
                    1.05
                );

            }

        );

        button.on(

            "pointerout",

            () => {

                button.setScale(
                    1
                );

            }

        );

        //
        // click
        //

        button.on(

            "pointerdown",

                async () => {

                    this.sfx.play(
                        "buying_upgrade",
                        {
                            volume: 0.15
                        }
                    );

                    button.disableInteractive();

                    this.cameras.main
                        .fadeOut(
                            1000,
                            0,
                            0,
                            0
                        );

                    await SceneHelper.wait(this, 
                        1000
                    );

                    const test = false;

                    const sceneData = InterSceneManager.handleNextSceneAfterBase(this.GameData, DataManager);

                    this.stopWarningLoop();

                    if(!test){
                         this.scene.start(

                        sceneData.scene,sceneData.data)

                    } else {
                        const waves = [];
                        waves.push({

                            type: "boss",

                            boss: "nightmare_zero"

                        });

                        this.scene.start(

                        "CombatScene",

                        {

                            stage:
                                "introduction_stage",

                            players: [

                                "x",
                                "zero"

                            ],

                            waves: waves,
                            dialogs: [],

                            stage_theme: "introduction_stage",
                            boss_theme:"boss",
                            nightmare_scrap_reward: 2000

                        }

                    );
                    }

            }

        );

        //
        // texto
        //

        const text =

            this.add.text(

                150,
                250,

                "",

                {

                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "12px",

                    color:
                        "#FFFFFF",

                    wordWrap: {
                        width: 1600
                    }

                }

            );

        const introText =

`After the Gate Incident...

The Nightmare Virus
was thought to have
been eradicated.

For a time,

peace returned.

But suddenly,

an unknown infection
struck the headquarters
of the Maverick Hunters.

The Nightmare
has returned.

A new crisis
is about to begin...`;

        await this.typeText(
            text,
            introText
        );

    }

    startWarningLoop() {

        this.warningActive = true;

        const playWarning = async () => {

            while (
                this.warningActive
            ) {

                this.sfx.play(
                    "warning_beep",
                    {
                        volume: 0.3
                    }
                );

                await SceneHelper.wait(this,
                    1300
                );

            }

        };

        playWarning();

    }

    stopWarningLoop() {

        this.warningActive =
            false;

    }

    async typeText(
        textObject,
        fullText
    ) {

        for (

            let i = 0;

            i < fullText.length;

            i++

        ) {

            textObject.setText(

                fullText.substring(
                    0,
                    i + 1
                )

            );

            //
            // beep
            //

            if (

                fullText[i] !== " " &&

                fullText[i] !== "\n"

            ) {

                this.sound.play(

                    "text_beep",

                    {
                        volume: 0.08
                    }

                );

            }

            await SceneHelper.wait(this, 
                35
            );

        }

    }

    createGameData(){
        const GameData = {

            difficulty: this.data.difficulty,

            currentArmors: ["x","zero"],

            x: {
                baseHp: 400,
                maxHp: 400
            },

            zero: {
                baseHp: 400,
                maxHp: 400
            },

            inventory: {

                x: {

                    items: {
                    },

                    abilities: {
                    },

                    armors: {

                        x: true,
                        fourth: false,
                        ultimate: false,
                        falcon: false,
                        blade: false

                    }

                },

                zero: {

                    items: {

                    },

                    abilities: {

                    },

                    armors: {

                        zero: true,
                        black_zero: false

                    }

                }

            },

            completedStages: [],

            amountCompletedStages: 0,

            nightmareScrap: 0,

            nightmareLevel: 1,

            storyFlags: {
                hasSeenRepliforce: false
            }

        };

        this.GameData = GameData;

        DataManager.saveGameData(GameData);

        DataManager.saveSaveData(GameData);
    }

}
