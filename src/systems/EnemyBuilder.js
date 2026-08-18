import { ARMOR_STATS } from "../constants/ArmorStats.js";

export default class
EnemyBuilder {

    static BOSS_DIFFICULTY_MULTIPLIERS = {
        "easy": [
            {
                attackMultiplier: 0.5,
                hpMultiplier: 0.5
            },
            {
                attackMultiplier: 0.8,
                hpMultiplier: 1
            },
            {
                attackMultiplier: 1.3,
                hpMultiplier: 1.5
            },
            {
                attackMultiplier: 1.5,
                hpMultiplier: 2
            },
        ],
        "normal": [
            {
                attackMultiplier: 0.7,
                hpMultiplier: 0.7
            },
            {
                attackMultiplier: 1,
                hpMultiplier: 1.2
            },
            {
                attackMultiplier: 1.5,
                hpMultiplier: 1.8
            },
            {
                attackMultiplier: 1.7,
                hpMultiplier: 2.2
            },
        ],
        "hard": [
            {
                attackMultiplier: 1,
                hpMultiplier: 1
            },
            {
                attackMultiplier: 1.3,
                hpMultiplier: 1.5
            },
            {
                attackMultiplier: 1.8,
                hpMultiplier: 2
            },
            {
                attackMultiplier: 2,
                hpMultiplier: 2.5
            },
        ],
        "nightmare": [
            {
                attackMultiplier: 1,
                hpMultiplier: 1
            },
            {
                attackMultiplier: 1.3,
                hpMultiplier: 1.5
            },
            {
                attackMultiplier: 1.8,
                hpMultiplier: 2
            },
            {
                attackMultiplier: 2.2,
                hpMultiplier: 2.5
            },
        ]
    }

    static ENEMY_DIFFICULTY_MULTIPLIERS = {
        "easy": [
            {
                attackMultiplier: 0.5,
                hpMultiplier: 0.5
            },
            {
                attackMultiplier: 0.8,
                hpMultiplier: 0.7
            },
            {
                attackMultiplier: 1.2,
                hpMultiplier: 0.9
            },
            {
                attackMultiplier: 1.4,
                hpMultiplier: 1.1
            },
        ],
        "normal": [
            {
                attackMultiplier: 0.8,
                hpMultiplier: 0.8
            },
            {
                attackMultiplier: 1.1,
                hpMultiplier: 1
            },
            {
                attackMultiplier: 1.5,
                hpMultiplier: 1.1
            },
            {
                attackMultiplier: 1.7,
                hpMultiplier: 1.3
            },
        ],
        "hard": [
            {
                attackMultiplier: 1,
                hpMultiplier: 1
            },
            {
                attackMultiplier: 1.5,
                hpMultiplier: 1.2
            },
            {
                attackMultiplier: 1.9,
                hpMultiplier: 1.4
            },
            {
                attackMultiplier: 2.2,
                hpMultiplier: 1.6
            },
        ],
        "nightmare": [
            {
                attackMultiplier: 1,
                hpMultiplier: 1
            },
            {
                attackMultiplier: 1.5,
                hpMultiplier: 1.2
            },
            {
                attackMultiplier: 1.9,
                hpMultiplier: 1.4
            },
            {
                attackMultiplier: 2.2,
                hpMultiplier: 1.6
            },
        ]
    }

    static buildBoss(
        boss,
        nightmareLevel,
        difficulty = "normal"
    ) {
        
        let attackMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][0].attackMultiplier;

        let hpMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][0].hpMultiplier;

        switch (nightmareLevel) {
            case 2:
                attackMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][1].attackMultiplier;
                hpMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][1].hpMultiplier;
                break;

            case 3:
                attackMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][2].attackMultiplier;
                hpMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][2].hpMultiplier;
                break;

            case 4:
                attackMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][3].attackMultiplier;
                hpMultiplier = this.BOSS_DIFFICULTY_MULTIPLIERS[difficulty][3].hpMultiplier;
                break;
        }

        boss.attackDamage = Math.floor(boss.attackDamage * attackMultiplier);

        boss.gigaAttackDamage = Math.floor(boss.gigaAttackDamage * attackMultiplier);

        boss.maxHp = Math.floor(boss.maxHp  * hpMultiplier);

        boss.hp = boss.maxHp;

        boss.secondPhase = difficulty == "nightmare";
    }

    static buildEnemy(
        enemy,
        nightmareLevel,
        difficulty = "normal"
    ) {
        let attackMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][0].attackMultiplier;

        let hpMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][0].hpMultiplier;

        switch (nightmareLevel) {
            case 2:
                attackMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][1].attackMultiplier;
                hpMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][1].hpMultiplier;
                break;

            case 3:
                attackMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][2].attackMultiplier;
                hpMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][2].hpMultiplier;
                break;

            case 4:
                attackMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][3].attackMultiplier;
                hpMultiplier = this.ENEMY_DIFFICULTY_MULTIPLIERS[difficulty][3].hpMultiplier;
                break;
        }

        enemy.attackDamage = Math.floor(enemy.attackDamage * attackMultiplier);

        enemy.maxHp = Math.floor(enemy.maxHp  * hpMultiplier);

        enemy.hp = enemy.maxHp;
    }

}