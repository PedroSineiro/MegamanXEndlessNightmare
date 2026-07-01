import createStage from "../stages/createStage.js";

import SoundManager from "../systems/SoundManager.js";

import DialogBox from "../systems/DialogBox.js";

import BaseMenu from "../systems/BaseMenu.js";

import InventoryManager from "../systems/InventoryManager.js";

import DataManager from "../systems/DataManager.js";

import { BASE_DIALOGS } from "../constants/BaseDialogs.js";

import UpgradeScreen from "../systems/UpgradeScreen.js";

import SceneHelper from "../systems/SceneHelper.js";
import InterSceneManager from "../systems/InterSceneManager.js";

export default class BaseScene
extends Phaser.Scene {

    constructor() {

        super(
            "BaseScene"
        );

    }

    init(data) {

        this.SceneHelper = SceneHelper;

        this.DataManager = DataManager;

        this.InterSceneManager = InterSceneManager;

        if(data && Object.keys(data).length > 0){

            this.DataManager.saveGameData(data);

        } 

        this.GameData = this.DataManager.loadGameData();

        this.inventoryManager = new InventoryManager(this.GameData);

        this.stage_theme = "new_base_stage";

        this.stage = "new_base_stage";

        this.sfx =
            new SoundManager(
                this
        );

    }

    async create() {

        this.fadeOverlay = this.SceneHelper.createFadeOverlay(this);

        this.sfx =
            new SoundManager(
                this
            );

        this.dialogBox = 
            new DialogBox(this);

        this.playStageMusic();

        this.setupStage();

        await this.initialize();

    }


    async initialize() {

        await this.SceneHelper.fadeFromBlack(this);

         await this.runDialog(

            this.GameData.amountCompletedStages

        );

        this.BaseMenu = new BaseMenu(this);

        this.BaseMenu.createButtons();


    }

    setupStage() {

        createStage(
            this,
            this.stage
        );

    }
    playStageMusic(){

        this.bgm =

        this.sound.add(

            this.stage_theme,

            {
                loop: true,
                volume: 0.15
            }

        );

        this.bgm.play();
    }

    async runDialog(
        stagesBeaten
    ) {

        const dialogs =

            this.getDialogs(

                stagesBeaten

            ); 

        await this.dialogBox.start(

            dialogs

        );


    }

    getDialogs(
        stagesBeaten
    ) {

        return BASE_DIALOGS[stagesBeaten] ?? [];

    }

    showUpgradeScreen(
        character
    ) {

        this.upgradeScreen
            ?.clear();

        this.upgradeScreen =

            new UpgradeScreen(
                this
            );

        this.upgradeScreen
            .show(
                character
            );

        if (
            character === "x"
        ) {

            this.cameras.main
                .setBackgroundColor(
                    "#102050"
                );

        }
        else {

            this.cameras.main
                .setBackgroundColor(
                    "#501010"
                );

        }

    }

    async goTitleScene(){
        await this.SceneHelper.fadeToBlack(this, 1000);

        this.bgm.stop();

        this.scene.start(

            "TitleScene",{});
    }

    async goCombatScene(sceneData){
        await this.SceneHelper.fadeToBlack(this, 1000);

        this.bgm?.stop();

        this.scene.start(

            sceneData.scene, sceneData.data);
    }


    update() {

    }

}