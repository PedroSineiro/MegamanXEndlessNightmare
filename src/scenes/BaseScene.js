import createStage from "../stages/createStage.js";

import SoundManager from "../systems/SoundManager.js";

import DialogBox from "../systems/DialogBox.js";

import BaseMenu from "../systems/BaseMenu.js";

import InventoryManager from "../systems/InventoryManager.js";

import DataManager from "../systems/DataManager.js";

import UpgradeScreen from "../systems/UpgradeScreen.js";

import SceneHelper from "../systems/SceneHelper.js";

import InterSceneManager from "../systems/InterSceneManager.js";

import AchievementManager from "../systems/AchievementManager.js";

import SaveNotificator from "../systems/SaveNotificator.js";

import CharacterSelector from "../systems/CharacterSelector.js";

export default class BaseScene
extends Phaser.Scene {

    constructor() {

        super(
            "BaseScene"
        );

    }

    init(data) {

        this.data = data;

        this.isEnding = data.ending ?? false;

        this.SceneHelper = SceneHelper;

        this.DataManager = DataManager;

        this.InterSceneManager = InterSceneManager;

        this.SaveNotificator = SaveNotificator;

        if(data && Object.keys(data).length > 1){

            this.DataManager.saveGameData(data);

        }

        this.GameData = this.DataManager.loadGameData();

        this.inventoryManager = new InventoryManager(this.GameData);

        this.stage_theme = this.isEnding ? "ending":"new_base";

        this.stage = "new_base";

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

        const achievements = this.InterSceneManager.checkBaseAchievements(this.GameData);

        achievements?.forEach(achievement => {AchievementManager.unlock(achievement)});

        this.setupStage();

        await this.initialize();

    }


    async initialize() {

        await this.SceneHelper.fadeFromBlack(this);

         await this.runDialog(

            this.GameData.amountCompletedStages

        );

        if(!this.isEnding){
            this.BaseMenu = new BaseMenu(this);

            this.clearScreen();

            this.BaseMenu.createUpgradeButtons();
        } else {
            await this.goEndingScene();
        }


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

            this.InterSceneManager.getBaseDialogs(

                stagesBeaten

            ); 

        await this.dialogBox.start(

            dialogs

        );

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
        else if(character === "zero") {

            this.cameras.main
                .setBackgroundColor(
                    "#501010"
                );

        } else {
            this.cameras.main
                .setBackgroundColor(
                    "#100a4b"
                );
        }

    }

    showTeamSelectScreen(
    ) {

        this.upgradeScreen
            ?.clear();

        
        this.cameras.main
            .setBackgroundColor(
                "#040916"
            );

        this.characterSelector = new CharacterSelector(this);
    }

    clearScreen() {
        this.cameras.main
            .setBackgroundColor(
                "#040916"
            );
    }

    showChooseTeamScreen() {
        this.characterSelector =
            new CharacterSelector(this.scene);
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

    async goEndingScene() {
        await this.SceneHelper.fadeToBlack(this, 1000);

        this.scene.start(

            "EndingScene",{});
    }

    getCurrentArmors() {
        return this.GameData.currentArmors;
    }

    enableNextMission(shouldEnable = true) {
        this.BaseMenu.confirmButton.setVisible(shouldEnable);
    }

    getMissionTeam() {
        return this.characterSelector.selectedCharacters;
    }

    goToMissions() {

        const missionTeam = this.getMissionTeam();

        this.GameData.missionTeam = missionTeam;

        const baseTeam = ["x", "zero", "axl"].filter(character => !missionTeam.includes(character));

        this.GameData.baseTeam = baseTeam;

        this.DataManager.saveGameData(this.GameData);

        this.InterSceneManager.prepareForCombats(this.GameData, this.DataManager);

        const sceneData = this.InterSceneManager.handleNextSceneAfterBase(this.GameData, this.DataManager);

        this.goCombatScene(sceneData);

    }

    update() {

    }

}