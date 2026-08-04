export default class DataManager {

    static SAVE_KEY =
        "endlessNightmareSave";

    static GAME_KEY =
        "endlessNightmareData";

    static pointer = null;

    static setPointer(pointer) {
        this.pointer = pointer;
    }


    static hasPassedFirstStage() {
        const gameData = this.loadGameData();

        return gameData.amountCompletedStages > 0;
    }

    static loadSaveData() {

        return JSON.parse(

            localStorage.getItem(
                this.SAVE_KEY+this.pointer
            )

        );

    }

    static saveSaveData(
        saveData
    ) {

        localStorage.setItem(

            this.SAVE_KEY+this.pointer,

            JSON.stringify(
                saveData
            )

        );

    }

    static getAllSaves() {

        const saves = [];

        for (
            let pointer = 1;
            pointer <= 3;
            pointer++
        ) {

            saves.push(

                JSON.parse(

                    localStorage.getItem(
                        this.SAVE_KEY + pointer
                    )

                )

            );

        }

        return saves;

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