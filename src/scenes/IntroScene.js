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

        this.combatData =
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

                    let firstHalf = [];

                    if(!test){
                        firstHalf =

                        InterSceneManager.generateWaves({

                            numberOfWaves: 8,

                            spawnPercentage: 0.50,

                            smallEnemySpawnPercentage: 0.70,

                            bigEnemySpawnPercentage: 0.30,

                            nightmareSpawnPercentage: 0.0

                        });

                        firstHalf.push({

                            type: "boss",

                            boss: "nightmare_zero"

                        });

                    } else {
                        firstHalf.push({

                            type: "boss",

                            boss: "spiral_pegasus"

                        });
                    }

                    this.stopWarningLoop();

                    this.scene.start(

                        "CombatScene",

                        {

                            stage:
                                "destroyed_base_stage",

                            players: [

                                "x",
                                "zero"

                            ],

                            waves: firstHalf,
                            dialogs: [

                                {
                                    waveIndex: 0,
                                    isAfterBossSpawn: false,

                                    dialogs: [
                                        {
                                        speaker: "alia",
                                        text: "X, Zero. You've just entered the affected sector. Be careful, reports indicate the Nightmare outbreak is spreading faster than expected."
                                        },
                                        {
                                            speaker: "x",
                                            text: "The damage is worse than I imagined..."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "And the mechaniloids are already attacking anything that moves."
                                        },

                                        {
                                            speaker: "alia",
                                            text: "We've lost contact with every Hunter team deployed here. No survivors have reported back."
                                        },

                                        {
                                            speaker: "x",
                                            text: "Then our priority is containing the outbreak before it reaches the remaining sectors."
                                        },

                                        {
                                            speaker: "alia",
                                            text: "There's something else. Security records show a Reploid moving through the infected zones shortly before communications went down."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "The one that looks like me."
                                        },

                                        {
                                            speaker: "alia",
                                            text: "Yes. The sightings match your appearance almost perfectly."
                                        },

                                        {
                                            speaker: "x",
                                            text: "Any idea who it is?"
                                        },

                                        {
                                            speaker: "alia",
                                            text: "None. But every major incident seems connected to its presence."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "Then we'll find it."
                                        },

                                        {
                                            speaker: "alia",
                                            text: "Be careful. Whatever is behind this, it doesn't resemble any Maverick activity we've encountered before."
                                        },

                                        {
                                            speaker: "x",
                                            text: "We'll secure the area and investigate the source."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "And if that impostor is responsible, I'll make sure this ends here."
                                        }
                                    ]

                                },

                                {
                                    waveIndex: 8,
                                    isAfterBossSpawn: true,

                                    dialogs:[
                                        {
                                            speaker: "x",
                                            text: "Impossible..."
                                        },

                                        {
                                            speaker: "x",
                                            text: "That form... Zero, it's the same Nightmare form I fought during the Gate Incident."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "So that's what Alia detected."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "A Nightmare copy of me."
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "RRRAAAAGH!!"
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "DESTROY...!"
                                        },

                                        {
                                            speaker: "x",
                                            text: "He's completely out of control."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "No. He's worse."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "The original Nightmare Zero vanished after that day..."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "This thing shouldn't exist anymore."
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "KILL...!"
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "DESTROY EVERYTHING!!"
                                        },

                                        {
                                            speaker: "x",
                                            text: "The Nightmare Virus must have recreated him somehow."
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "X!!"
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "DIE!!"
                                        },

                                        {
                                            speaker: "x",
                                            text: "He remembers me..."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "Maybe. Or maybe all that's left are fragments of hatred."
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "ZERO...!"
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "ERASE...!"
                                        },

                                        {
                                            speaker: "zero",
                                            text: "Whatever he is, it's time to end."
                                        },

                                        {
                                            speaker: "zero",
                                            text: "Let's put him to rest."
                                        },

                                        {
                                            speaker: "nightmare_zero",
                                            text: "RRRAAAAAAAAGH!!!"
                                        }
                                    ]
                                }

                            ],

                            stage_theme: "introduction_stage",
                            boss_theme:"boss",
                            nightmare_scrap_reward: 2000

                        }

                    );

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

            currentChapter: 1,

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
                        ultimate: false

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

        DataManager.saveGameData(GameData);
    }

}
