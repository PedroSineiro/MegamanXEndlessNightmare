import { ARMOR_STATS } from "../constants/ArmorStats.js";

export default class
EnemyBuilder {

    static buildBoss(
        boss,
        nightmareLevel
    ) {
        
        let attackMultiplier = 1;

        let hpMultiplier = 1;

        switch (nightmareLevel) {
            case 2:
                attackMultiplier = 1.3;
                hpMultiplier = 1.5;
                break;

            case 3:
                attackMultiplier = 1.8;
                hpMultiplier = 2;
                break;
        }

        boss.attackDamage = Math.floor(boss.attackDamage * attackMultiplier);

        boss.gigaAttackDamage = Math.floor(boss.gigaAttackDamage * attackMultiplier);

        boss.maxHp = Math.floor(boss.maxHp  * hpMultiplier);

        boss.hp = boss.maxHp;
    }

    static buildEnemy(
        enemy,
        nightmareLevel
    ) {
        let attackMultiplier = 1;

        let hpMultiplier = 1;

        switch (nightmareLevel) {
            case 2:
                attackMultiplier = 1.3;
                hpMultiplier = 1.2;
                break;

            case 3:
                attackMultiplier = 1.8;
                hpMultiplier = 1.4;
                break;
        }

        enemy.attackDamage = Math.floor(enemy.attackDamage * attackMultiplier);

        enemy.maxHp = Math.floor(enemy.maxHp  * hpMultiplier);

        enemy.hp = enemy.maxHp;
    }

}