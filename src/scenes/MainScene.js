import BaseScene from "./BaseScene.js";
import CombatScene from "./CombatScene.js";
import IntroScene from "./IntroScene.js";
import TitleScene from "./TitleScene.js";
import GameOverScene from "./GameOverScene.js"
import BootScene from "./BootScene.js";
import EndingScene from "./EndingScene.js";
import DifficultyScene from "./DifficultyScene.js";
import SaveScene from "./SaveScene.js";
import AchievementScene from "./AchievementScene.js";
import UIScene from "./UIScene.js";

export default class MainScene
extends Phaser.Scene {

    constructor() {

        super(
            "MainScene"
        );

    }

    create() {

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
        UIScene,
        TitleScene,
        DifficultyScene,
        SaveScene,
        AchievementScene,
        IntroScene,
        CombatScene,
        MainScene,
        BaseScene,
        GameOverScene,
        EndingScene
    ]
};

new Phaser.Game(config);