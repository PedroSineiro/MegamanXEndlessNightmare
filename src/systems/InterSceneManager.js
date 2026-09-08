
import { BASE_DIALOGS } from "../constants/BaseDialogs.js";

import { COMBAT_DIALOGS } from "../constants/CombatDialogs.js";

import AchievementManager from "./AchievementManager.js";

export default class InterSceneManager {

    static TOTAL_AMOUNT_STAGES = 10;

    static FIRST_BASE_STAGE = {
            stage: "intro_stage",
            theme: "introduction_stage",
            background: "intro_stage",
            boss_theme: "boss",
            layout: [
                    {
                        type: "waves",
                        count: 5
                    },
                    {
                        type: "boss",
                        boss: "blaze_heatnix"
                    }

                ]
        }

    static DEFAULT_BASE_STAGE = {
            stage: "new_base_stage",
            theme: "new_base_stage",
            background: "new_base_stage",
            boss_theme: "boss",
            layout: [
                    {
                        type: "waves",
                        count: 4
                    },

                    {
                        type: "boss",
                        boss: "nightmare_snake"
                    },

                    {
                        type: "waves",
                        count: 4
                    },

                    {
                        type: "boss",
                        boss: "nightmare_snake"
                    }
                ]
        }

    static FIRST_MISSION_STAGE = {
            stage: "base_stage",
            theme: "introduction_stage",
            background: "base_stage",
            boss_theme: "boss",
            layout: [
                    {
                        type: "waves",
                        count: 8
                    },
                    {
                        type: "boss",
                        boss: "nightmare_zero"
                    }
                ]
        }

    static STAGES = {
        volcano_stage: {
            stage: "volcano_stage",
            theme: "volcano_stage",
            background: "volcano_stage",
            boss_theme: "boss",
            layout: [
                    {
                        type: "waves",
                        count: 8
                    },

                    {
                        type: "boss",
                        boss: "magma_dragoon"
                    },

                    {
                        type: "waves",
                        count: 8
                    },

                    {
                        type: "boss",
                        boss: "burn_dinorex"
                    }
                ]
        },

        cave_stage: {
            stage: "cave_stage",
            theme: "cave_stage",
            background: "cave_stage",
            boss_theme: "boss",
            layout: [

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "slash_beast"
                },

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "crescent_grizzly"
                }
            ]
        },

        frozen_stage: {
            stage: "frozen_stage",
            theme: "frozen_stage",
            background: "frozen_stage",
            boss_theme: "boss",
            layout: [

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "frost_walrus"
                },

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "blizzard_wolfang"
                }
            ]
        },

        cyber_stage: {
            stage: "cyber_stage",
            theme: "cyber_stage",
            background: "cyber_stage",
            boss_theme: "boss",
            layout: [

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "spiral_pegasus"
                },

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "cyber_peacock"
                }
            ]
        },
        repliforce_stage: {
            stage: "repliforce_stage",
            theme: "repliforce_stage",
            background: "repliforce_stage",
            boss_theme: "boss",
            layout: [

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "colonel"
                },

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "double"
                }
            ]
        },
        sigma_stage: {
            stage: "sigma_stage",
            theme: "sigma_stage",
            background: "sigma_stage",
            boss_theme: "final_boss",
            layout: [

                {
                    type: "waves",
                    count: 4
                },

                {
                    type: "boss",
                    boss: "high_max"
                },

                {
                    type: "waves",
                    count: 4
                },

                {
                    type: "boss",
                    boss: "dynamo"
                },

                {
                    type: "waves",
                    count: 8
                },

                {
                    type: "boss",
                    boss: "sigma_head"
                },

                {
                    type: "boss",
                    boss: "sigma"
                }

            ]
        },
        first_gate_stage: {
            stage: "first_gate_stage",
            theme: "gate_stage",
            boss_theme: "final_boss",
            layout: [

                {
                    type: "boss",
                    boss: "slash_beast"
                },

                {
                    type: "boss",
                    boss: "crescent_grizzly"
                },

                {
                    type: "boss",
                    boss: "magma_dragoon"
                },

                {
                    type: "boss",
                    boss: "burn_dinorex"
                },

                {
                    type: "boss",
                    boss: "colonel"
                },

                {
                    type: "boss",
                    boss: "double"
                },

            ]
        },
        second_gate_stage: {
            stage: "second_gate_stage",
            theme: "gate_stage",
            boss_theme: "final_boss",
            layout: [

                {
                    type: "boss",
                    boss: "frost_walrus"
                },

                {
                    type: "boss",
                    boss: "blizzard_wolfang"
                },
                
                {
                    type: "boss",
                    boss: "spiral_pegasus"
                },

                {
                    type: "boss",
                    boss: "cyber_peacock"
                },

                {
                    type: "boss",
                    boss: "dynamo"
                },

                {
                    type: "boss",
                    boss: "high_max"
                }

            ]
        },
        final_stage: {
            stage: "zero_stage",
            theme: "gate_stage",
            boss_theme: "final_stage",
            layout: [

                {
                    type: "waves",
                    count: 4
                },

                {
                    type: "boss",
                    boss: "awakened_nightmare_zero"
                }

            ]
        }
    };

    static FINAL_STAGE_KEYS = [

        "repliforce_stage",

        "sigma_stage",

        "first_gate_stage",

        "second_gate_stage",

        "final_stage"

    ];

        static INTRODUCTION_BASE_STAGE_CONFIG = {

        numberOfWaves: 8,

        spawnPercentage: 0.25,

        smallEnemySpawnPercentage: 0.90,

        bigEnemySpawnPercentage: 0.10,

        nightmareSpawnPercentage: 0.0

    };

    static INTRODUCTION_MISSION_STAGE_CONFIG = {

        numberOfWaves: 8,

        spawnPercentage: 0.50,

        smallEnemySpawnPercentage: 0.70,

        bigEnemySpawnPercentage: 0.30,

        nightmareSpawnPercentage: 0.0

    };


    static DEFAULT_BASE_CONFIG = {

        numberOfWaves: 4,

        spawnPercentage: 0.60,

        smallEnemySpawnPercentage: 0.65,

        bigEnemySpawnPercentage: 0.10,

        nightmareSpawnPercentage: 0.20

    };


    static DEFAULT_MISSION_CONFIG = {

        numberOfWaves: 8,

        spawnPercentage: 0.80,

        smallEnemySpawnPercentage: 0.70,

        bigEnemySpawnPercentage: 0.25,

        nightmareSpawnPercentage: 0.05

    };

    static SMALL_ENEMY_REWARD = 5;

    static BIG_ENEMY_REWARD = 15;

    static NIGHTMARE_ENEMY_REWARD = 30;

    static BASE_BOSS_REWARD = 100;

    static BOSS_REWARD = 200;

    static ENEMY_REWARDS = {

        ground_enemy_1: 5,
        ground_enemy_2: 5,
        flying_enemy_1: 5,
        flying_enemy_2: 5,
        flying_enemy_3: 5,

        big_enemy_1: 15,
        big_enemy_2: 15,
        big_enemy_3: 15,
        big_enemy_4: 15,

        nightmare: 30


    };

    static FIRST_BASE_STAGE_REWARD = 400;

    static FIRST_MISSION_STAGE_REWARD = 2000;

    static prepareForCombats(gameData, DataManager) {
        gameData.currentStage = "first";
        gameData.nightmareScrapForCombats = 0;
        DataManager.saveGameData(gameData);
    }

    static handleNextSceneAfterBase(
        gameData,
        DataManager
    ) {

        if(gameData.amountCompletedStages == this.TOTAL_AMOUNT_STAGES) {
            return {scene: "EndingScene", data: {}}
        }


        const nextStage =

            this.getNextStage(
                gameData
            );

        const waves = [];

        for (

            const segment of nextStage.layout

        ) {

            if (

                segment.type === "waves"

            ) {

                const config = gameData.currentStage == "first"? (gameData.amountCompletedStages==0? this.INTRODUCTION_BASE_STAGE_CONFIG: this.DEFAULT_BASE_CONFIG):(gameData.amountCompletedStages==0? this.INTRODUCTION_MISSION_STAGE_CONFIG: this.DEFAULT_MISSION_CONFIG);

                config.numberOfWaves = segment.count;

                waves.push(

                    ...this.generateWaves(config)

                );

            }

            if (

                segment.type === "boss"

            ) {

                waves.push({

                    type: "boss",

                    boss: segment.boss

                });

            }

        }

        const nightmareScrapReward = this.getNightmareScrapReward(gameData, waves);


        const rainActive = (gameData.difficulty == "nightmare" || gameData.difficulty == "hard")? true: false;

        let rainDamage = 1;

        if(gameData.difficulty == "nightmare") {
            rainDamage++;
        }

        if(gameData.amountCompletedStages >= 3){
            rainDamage++;
        }

        if(gameData.amountCompletedStages >= 5){
            rainDamage++;
        }

        if(gameData.amountCompletedStages >= 7){
            rainDamage++;
        }

        const dialogs = this.getCombatDialogs(nextStage, gameData.storyFlags.hasSeenRepliforce, gameData.amountCompletedStages,gameData.currentStage, gameData.missionTeam);

        const team = gameData.currentStage == "first" ? gameData.baseTeam: gameData.missionTeam;

        return {

            scene: "CombatScene",

            data: {

                stage:
                    nextStage.stage,

                players: team,

                waves,

                dialogs: dialogs,

                is_rain_active: rainActive,

                rain_damage: rainDamage,

                stage_theme:
                    nextStage.theme,

                boss_theme:
                    nextStage.boss_theme,

                nightmare_scrap_reward:
                    nightmareScrapReward

            }

        };

    }

    static getNightmareScrapReward(gameData, waves) {

        if(gameData.amountCompletedStages == 0) {
            if(gameData.currentStage=="first"){
                return this.FIRST_BASE_STAGE_REWARD;
            }
            return this.FIRST_MISSION_STAGE_REWARD;
        }
        
        return this.calculateNightmareScrap(
                waves
            );

    }

    static handleNextSceneAfterCombat(gameData, DataManager, combatData){

        gameData.nightmareScrapForCombats+= combatData.nightmare_scrap_reward;

        if(gameData.currentStage == "first") {
            gameData.currentStage = "second";

            DataManager.saveGameData(gameData);

            return this.handleNextSceneAfterBase(gameData, DataManager);
        }

        gameData.amountCompletedStages++;

        if(gameData.amountCompletedStages>1){
            gameData.storyFlags.hasSeenRepliforce = true;
        }

        if(gameData.currentArmors[0] != "x" || gameData.currentArmors[1] != "zero"  || gameData.currentArmors[2] != "axl") {
            gameData.achievementFlags.usedOtherArmors = true;
        }

        const ending = gameData.amountCompletedStages == this.TOTAL_AMOUNT_STAGES;

        gameData.nightmareLevel = this.updateNightmareLevel(gameData.nightmareLevel, gameData.amountCompletedStages);
        
        gameData.completedStages.push(combatData.stage);

        gameData.nightmareScrap += Math.floor(gameData.nightmareScrapForCombats*((gameData.difficulty=="nightmare" || gameData.difficulty=="hard")?0.9:1)) ;

        DataManager.saveGameData(gameData);

        return {scene: "BaseScene", data:{ending}}
    }

    static handleGameOver(gameData, DataManager, combatData) {
        gameData.achievementFlags.hasDied = true;
        
        DataManager.saveHasDied();

        return {scene: "GameOverScene", data: combatData}
    }

    static getNextStage(
        gameData
    ) {

        const amountCompletedStages =

            gameData.amountCompletedStages;

        if(gameData.currentStage == "first"){
            if(amountCompletedStages == 0) {
                return this.FIRST_BASE_STAGE;
            }

            return this.DEFAULT_BASE_STAGE;

        } else {
            if(amountCompletedStages == 0) {
                return this.FIRST_MISSION_STAGE;
            }

            if (

                amountCompletedStages < 5

            ) {

                const availableStages =

                    Object.keys(
                        this.STAGES
                    )

                    .filter(

                        stage =>

                            !this.FINAL_STAGE_KEYS
                                .includes(stage)

                    )

                    .filter(

                        stage =>

                            !gameData
                                .completedStages
                                .includes(stage)

                    );

                if (

                    availableStages.length === 0

                ) {

                    return null;

                }

                const selectedStage =

                    availableStages[

                        Math.floor(

                            Math.random() *

                            availableStages.length

                        )

                    ];

                return this.STAGES[
                    selectedStage
                ];

            }

            if (

                amountCompletedStages === 5

            ) {

                return this.STAGES
                    .repliforce_stage;

            }

            if (

                amountCompletedStages === 6

            ) {

                return this.STAGES
                    .sigma_stage;

            }

            if (

                amountCompletedStages === 7

            ) {

                return this.STAGES
                    .first_gate_stage;

            }

            if (

                amountCompletedStages === 8

            ) {

                return this.STAGES
                    .second_gate_stage;

            }

            if (

                amountCompletedStages === 9

            ) {

                return this.STAGES
                    .final_stage;

            }

        }

        return null;

    }


    static generateWaves({

        numberOfWaves,

        spawnPercentage,

        smallEnemySpawnPercentage,
        bigEnemySpawnPercentage,
        nightmareSpawnPercentage,

        smallEnemies = ["flying_enemy_1","flying_enemy_2","flying_enemy_3", "ground_enemy_1", "ground_enemy_2"],
        bigEnemies = ["big_enemy_1","big_enemy_2","big_enemy_3", "big_enemy_4"],
        nightmareEnemies = ["nightmare"]

    }) {

        const waves = [];

        const slots = [0, 1, 2, 3];

        const lanes = [
            "top",
            "bottom"
        ];

        for (

            let waveIndex = 0;

            waveIndex < numberOfWaves;

            waveIndex++

        ) {

            const enemies = [];

            for (

                const lane of lanes

            ) {

                for (

                    const slot of slots

                ) {

                    if (

                        Math.random() >

                        spawnPercentage

                    ) {

                        continue;

                    }

                    const roll =

                        Math.random();

                    let enemyPool;

                    if (

                        roll <

                        smallEnemySpawnPercentage

                    ) {

                        enemyPool =
                            smallEnemies;

                    }

                    else if (

                        roll <

                        smallEnemySpawnPercentage +

                        bigEnemySpawnPercentage

                    ) {

                        enemyPool =
                            bigEnemies;

                    }

                    else {

                        enemyPool =
                            nightmareEnemies;

                    }


                    if (

                        enemyPool.length === 0

                    ) {

                        continue;

                    }

                    const enemyType =

                        enemyPool[

                            Phaser.Math.Between(

                                0,

                                enemyPool.length - 1

                            )

                        ];

                    enemies.push({

                        type:
                            enemyType,

                        lane,

                        slot

                    });

                }

            }

            if (

                enemies.length === 0

            ) {

                const lane =

                    Phaser.Math.RND.pick(
                        lanes
                    );

                const slot =

                    Phaser.Math.Between(
                        0,
                        3
                    );

                const enemyType =

                    Phaser.Math.RND.pick(
                        smallEnemies
                    );

                enemies.push({

                    type:
                        enemyType,

                    lane,

                    slot

                });

            }

            waves.push({

                type:
                    "enemies",

                enemies

            });

        }

        return waves;

    }


    static calculateNightmareScrap(
        waves
    ) {

        let totalReward = 0;

        for (

            const wave of waves

        ) {

            //
            // boss
            //

            if (

                wave.type === "boss"

            ) {

                totalReward += wave.boss != "nightmare_snake"?
                    this.BOSS_REWARD: this.BASE_BOSS_REWARD;

                continue;

            }

            //
            // enemies
            //

            for (

                const enemy of wave.enemies

            ) {

                    totalReward +=

                        this
                            .ENEMY_REWARDS[enemy.type];

                }

        }

        return totalReward;

    }

    static updateNightmareLevel(nightmareLevel, amountOfCompletedStages){
        if(amountOfCompletedStages == 3 || amountOfCompletedStages == 5 || amountOfCompletedStages == 7) nightmareLevel++;
        
        return nightmareLevel;
    }


    static getBaseDialogs(
        stagesBeaten
    ) {

        return BASE_DIALOGS[stagesBeaten] ?? [];

    }

    static getCombatDialogs(selectedStage, hasSeenRepliforce, amountOfCompletedStages, currentStage, characters) {

        if(currentStage == "first") {
            if(amountOfCompletedStages == 0) {
                return COMBAT_DIALOGS[this.FIRST_BASE_STAGE.stage] ?? [];
            }
            
            return [];

        } else {
            if(amountOfCompletedStages == 0) {
                return COMBAT_DIALOGS[this.FIRST_MISSION_STAGE.stage] ?? [];
            }

            const charactersKey = this.getCharactersKey(characters);

            if(amountOfCompletedStages < 5){
                if(hasSeenRepliforce){
                    return COMBAT_DIALOGS[selectedStage.stage].later[charactersKey] ?? [];
                }

                return COMBAT_DIALOGS[selectedStage.stage].first[charactersKey] ?? []
            }

            return COMBAT_DIALOGS[selectedStage.stage]?
            COMBAT_DIALOGS[selectedStage.stage][charactersKey] : [];
        }

    }

    static getCharactersKey(characters) {

        return [...characters]

            .sort()

            .map(
                character =>
                    character[0]
            )

            .join("");

    }

    static checkBaseAchievements(gameData) {

        const achievements = [];

        if(gameData.amountCompletedStages == 1){
            achievements.push("first_stage");
        }

        if(gameData.nightmareLevel==2){
            achievements.push("nightmare_level_rising");
        }

        if(gameData.nightmareLevel==4){
            achievements.push("nightmare_level_max");
        }

        if(gameData.amountCompletedStages == this.TOTAL_AMOUNT_STAGES){
            achievements.push("beat_first_time");

            if(!gameData.achievementFlags.usedOtherArmors){
                achievements.push("base_armors");
            }

            if(!gameData.achievementFlags.hasDied){
                achievements.push("flawless_victory");
            }

            if(gameData.difficulty == "nightmare"){
                achievements.push("beat_nightmare_diff");
                if(!gameData.achievementFlags.usedOtherArmors){
                    achievements.push("base_armors_nightmare");
                }
            }

        }

        return achievements;
    }
}