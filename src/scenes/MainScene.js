import BaseScene from "./BaseScene.js";
import CombatScene from "./CombatScene.js";
import IntroScene from "./IntroScene.js";
import TitleScene from "./TitleScene.js";
import GameOverScene from "./GameOverScene.js"
import BootScene from "./BootScene.js";
import EndingScene from "./EndingScene.js";

export default class MainScene
extends Phaser.Scene {

    constructor() {

        super(
            "MainScene"
        );

    }

    create() {

        this.scene.start(

            "CombatScene",

            {

                stage:
                    "highway",

                players: [

                    "x",
                    "zero"

                ],

                waves: [

                    {
                        type: "enemies",

                        enemies: [

                            {
                                type: "ground_enemy_1",
                                lane: "bottom",
                                slot: 0
                            }
                        ]
                    },
                    {
                        type: "enemies",

                        enemies: [

                            {
                                type: "flying_enemy_1",
                                lane: "top",
                                slot: 0
                            }

                        ]
                    },
                     {
                        type: "boss",

                        boss: "nightmare_zero"
                    },
                    {
                        type: "enemies",

                        enemies: [

                            {
                                type: "flying_enemy_1",
                                lane: "top",
                                slot: 0
                            }

                        ]
                    },
                ],
                    dialogs: [

                    {
                        waveIndex: 0,
                        isAfterBossSpawn: false,

                        dialogs: [

                            {
                                speaker: "alia",
                                text: "X! We are detecting Nightmare activity!"
                            },

                            {
                                speaker: "x",
                                text: "I'm heading out."
                            }

                        ]
                    },

                    {
                        waveIndex: 2,
                        isAfterBossSpawn: true,

                        dialogs: [

                            {
                                speaker: "nightmare_zero",
                                text: "You are too late..."
                            },

                            {
                                speaker: "zero",
                                text: "..."
                            }

                        ]
                    }

                ],
                stage_theme: "introduction_stage",
                boss_theme:"boss"

            }

        );

    }

}

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    backgroundColor: "#000000",
    pixelArt: true,
    scene: [
        BootScene,
        TitleScene,
        IntroScene,
        CombatScene,
        MainScene,
        BaseScene,
        GameOverScene,
        EndingScene
    ]
};

new Phaser.Game(config);