export default class DataManager {

    static SAVE_KEY =
        "endlessNightmareSave";

    static GAME_KEY =
        "endlessNightmareData";

    static hasSaveData() {

        try {

            const save = this.loadSaveData();

            return save !== null;

        } catch {

            return false;

        }

    }

    static hasPassedFirstStage() {
        const gameData = this.loadGameData();

        return gameData.amountCompletedStages > 0;
    }

    static loadSaveData() {

        return JSON.parse(

            localStorage.getItem(
                this.SAVE_KEY
            )

        );

    }

    static saveSaveData(
        saveData
    ) {

        localStorage.setItem(

            this.SAVE_KEY,

            JSON.stringify(
                saveData
            )

        );

    }

    static loadGameData() {

        return JSON.parse(

            localStorage.getItem(
                this.GAME_KEY
            )

        );

    }

    static saveGameData(
        gameData
    ) {

        localStorage.setItem(

            this.GAME_KEY,

            JSON.stringify(
                gameData
            )

        );

    }


}