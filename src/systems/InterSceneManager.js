
import { BASE_DIALOGS } from "../constants/BaseDialogs.js";

import { COMBAT_DIALOGS } from "../constants/CombatDialogs.js";

export default class InterSceneManager {

    static TOTAL_AMOUNT_STAGES = 6;

    static MAVERIC_STAGES = {
        volcano_stage: {
            stage: "volcano_stage",
            theme: "volcano_stage",
            background: "volcano_stage",
            boss_theme: "boss",
            bosses: [
                "magma_dragoon",
                "burn_dinorex"
            ],
        },

        cave_stage: {
            stage: "cave_stage",
            theme: "cave_stage",
            background: "cave_stage",
            boss_theme: "boss",
            bosses: [
                "slash_beast",
                "crescent_grizzly"
            ],
        },

        frozen_stage: {
            stage: "frozen_stage",
            theme: "frozen_stage",
            background: "frozen_stage",
            boss_theme: "boss",
            bosses: [
                "frost_walrus",
                "blizzard_wolfang"
            ],
        },

        cyber_stage: {
            stage: "cyber_stage",
            theme: "cyber_stage",
            background: "cyber_stage",
            boss_theme: "boss",
            bosses: [
                "spiral_pegasus",
                "cyber_peacock"
            ],
        }
    };

    static FINAL_STAGES = [
        {
            0: {
            stage: "repliforce_stage",
            theme: "repliforce_stage",
            background: "repliforce_stage",
            boss_theme: "boss",
            bosses: [
                "colonel",
                "double"
            ],
            }
        }
    ]


    static DEFAULT_WAVE_CONFIG = {

        numberOfWaves: 8,

        spawnPercentage: 0.80,

        smallEnemySpawnPercentage: 0.70,

        bigEnemySpawnPercentage: 0.25,

        nightmareSpawnPercentage: 0.05

    };

    static SMALL_ENEMY_REWARD = 5;

    static BIG_ENEMY_REWARD = 15;

    static NIGHTMARE_ENEMY_REWARD = 30;

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


    static handleNextSceneAfterBase(
        gameData,
        DataManager
    ) {

        const nextStage =

            this.getNextStage(
                gameData
            );

        //
        // primeira metade
        //

        const firstHalf =

            this.generateWaves(this.DEFAULT_WAVE_CONFIG);

        //
        // primeiro boss
        //

        firstHalf.push({

            type: "boss",

            boss: nextStage.bosses[0]

        });

        //
        // segunda metade
        //

        const secondHalf =

            this.generateWaves(this.DEFAULT_WAVE_CONFIG);

        //
        // segundo boss
        //

        secondHalf.push({

            type: "boss",

            boss: nextStage.bosses[1]

        });

        //
        // waves completas
        //

        const waves = [

            ...firstHalf,

            ...secondHalf

        ];

        const nightmareScrapReward =

            this.calculateNightmareScrap(
                waves
            );

        const dialogs = this.getCombatDialogs(nextStage, gameData.storyFlags.hasSeenRepliforce, gameData.amountCompletedStages);
        
        

        return {

            scene: "CombatScene",

            data: {

                stage:
                    nextStage.stage,

                players: [

                    "x",
                    "zero"

                ],

                waves,

                dialogs: dialogs,

                stage_theme:
                    nextStage.theme,

                boss_theme:
                    nextStage.boss_theme,

                nightmare_scrap_reward:
                    nightmareScrapReward

            }

        };

    }

    static handleNextSceneAfterCombat(gameData, DataManager, combatData){
        gameData.amountCompletedStages++;

        if(gameData.amountCompletedStages>1){
            gameData.storyFlags.hasSeenRepliforce = true;
        }

        gameData.nightmareLevel = this.updateNightmareLevel(gameData.nightmareLevel, gameData.amountCompletedStages);
        
        gameData.completedStages.push(combatData.stage);

        gameData.nightmareScrap += combatData.nightmare_scrap_reward;

        DataManager.saveGameData(gameData);

        if(gameData.amountCompletedStages < this.TOTAL_AMOUNT_STAGES) {
            return {scene: "BaseScene", data: {}}
        }

        return {scene: "EndingScene", data: {}}
    }

    static handleGameOver(gameData, DataManager, combatData){
        return {scene: "GameOverScene", data: combatData}
    }

    static getNextStage(
        gameData
    ) {

        const amountCompletedStages = gameData.amountCompletedStages;

        if(amountCompletedStages < 5){
            const availableStages =

            Object.keys(this.MAVERIC_STAGES)

                .filter(

                    key =>

                        !gameData.completedStages.includes(
                            key
                        )

                );

            if (
                availableStages.length === 0
            ) {
                return null;
            }

            const selectedStage = availableStages[

                Math.floor(
                    Math.random() *
                    availableStages.length
                )

            ];

            return this.MAVERIC_STAGES[selectedStage];
        } else {
            return this.FINAL_STAGES[amountCompletedStages-5][amountCompletedStages-5];
        }

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

                totalReward +=
                    this.BOSS_REWARD;

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
        if(amountOfCompletedStages == 3 || amountOfCompletedStages == 5) nightmareLevel++;
        
        return nightmareLevel;
    }


    static getBaseDialogs(
        stagesBeaten
    ) {

        return BASE_DIALOGS[stagesBeaten] ?? [];

    }

    static getCombatDialogs(selectedStage, hasSeenRepliforce, amountOfCompletedStages) {

        if(amountOfCompletedStages < 5){
            if(hasSeenRepliforce){
                return COMBAT_DIALOGS[selectedStage.stage].later ?? [];
            }
            return COMBAT_DIALOGS[selectedStage.stage].first ?? []
        }

        return COMBAT_DIALOGS[selectedStage.stage] ?? [];

    }
}