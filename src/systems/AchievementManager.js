import { ACHIEVEMENTS } from "../constants/AchievementDefinition.js";

export default class AchievementManager {

    static uiScene = null;

    static setUIScene(
        uiScene
    ) {

        this.uiScene =
            uiScene;

    }

    static unlock(id) {

        const data =
            this.load();

        if (data[id]) {
            return;
        }

        data[id] = true;

        this.save(data);

        const achievement =
            ACHIEVEMENTS[id];

        this.uiScene?.showAchievement(
            achievement
        );

        this.checkAllAchievements();

    }

    static relock(id) {
        const data =
            this.load();

        data[id] = false;

        this.save(data);
    }

    static relockAll() {

        const data =
            this.load() || {};

        Object.keys(
            ACHIEVEMENTS
        ).forEach(id => {

            data[id] = false;

        });

        this.save(data);

    }

    static isUnlocked(id) {

        const data =
            this.load();

        return !!data[id];

    }

    static load() {

        return JSON.parse(

            localStorage.getItem(
                "endlessNightmareAchievements"
            )

        ) || {};

    }

    static save(data) {

        localStorage.setItem(

            "endlessNightmareAchievements",

            JSON.stringify(data)

        );

    }

    static checkAllAchievements() {

        const data =
            this.load();

        //
        // ignorar a própria achievement
        //

        const requiredAchievements =

            Object.keys(
                ACHIEVEMENTS
            ).filter(

                id =>

                    id !==
                    "all_achievements"

            );

        const allUnlocked =

            requiredAchievements.every(

                id => data[id]

            );

        if (

            allUnlocked &&

            !data["all_achievements"]

        ) {

            this.unlock(
                "all_achievements"
            );

        }

    }

}