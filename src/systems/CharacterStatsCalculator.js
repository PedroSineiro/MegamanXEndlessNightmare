import { ARMOR_STATS } from "../constants/ArmorStats.js";

export default class
CharacterStatsCalculator {

    static buildX(
        gameData
    ) {

        let maxHp =
            gameData.x.baseHp;

        const actions  = 4 + 

            (gameData.inventory
                .x
                .abilities
                .extra_offensive_action? 1: 0);

        const heartTanks =

            gameData.inventory
                .x
                .items
                .heart_tank ?? 0;

        maxHp +=
            heartTanks * 50;

        gameData.x.maxHp = maxHp;

        const hasEnergyTank = gameData.inventory
                .x
                .items
                .energy_tank ? true: false;

        const hasBusterPlus = gameData.inventory
                .x
                .abilities
                .buster_plus ?? false;

        const basicShotDamage = ARMOR_STATS[gameData.currentArmors[0]].basicShotDamage + (hasBusterPlus ? 10 : 0);

        const mediumShotDamage = ARMOR_STATS[gameData.currentArmors[0]].mediumShotDamage + (hasBusterPlus ? 15 : 0);

        const chargedShotDamage = ARMOR_STATS[gameData.currentArmors[0]].chargedShotDamage + (hasBusterPlus ? 20 : 0);

        const hasQuickCharge = gameData.inventory
                .x
                .abilities
                .quick_charge?? false;

        const chargingMediumShotActions = (hasQuickCharge? 1: 2);

        const chargingChargedShotActions = (hasQuickCharge? 2: 3);

        const evasion = ARMOR_STATS[gameData.currentArmors[0]].baseEvasion;

        const reduction = ARMOR_STATS[gameData.currentArmors[0]].baseReduction;

        const hasGigaAttack = ARMOR_STATS[gameData.currentArmors[0]].hasGigaAttack;

        const gigaAttackMustRecharge = ARMOR_STATS[gameData.currentArmors[0]].gigaAttackMustRecharge;

        const gigaAttackCooldown = (gameData.inventory
                .x
                .abilities
                .giga_attack_recover? 5: 8);

        return {

            maxHp,

            hasEnergyTank: hasEnergyTank,

            actions: actions,

            basicShotDamage: basicShotDamage,

            mediumShotDamage: mediumShotDamage,

            chargedShotDamage: chargedShotDamage,

            hasQuickCharge: hasQuickCharge,

            chargingMediumShotActions: chargingMediumShotActions,

            chargingChargedShotActions: chargingChargedShotActions,

            evasion: evasion,
            
            reduction: reduction,

            hasGigaAttack: hasGigaAttack,

            gigaAttackMustRecharge: gigaAttackMustRecharge,

            gigaAttackCooldown: gigaAttackCooldown,

            armor:

                gameData
                    .currentArmors[0]

        };

    }

    static buildZero(
        gameData
    ) {

        let maxHp =
            gameData.zero.baseHp;

        const actions  = 4 + 

            (gameData.inventory
                .zero
                .abilities
                .extra_offensive_action? 1: 0);

        const heartTanks =

            gameData.inventory
                .zero
                .items
                .heart_tank ?? 0;

        maxHp +=
            heartTanks * 50;

        gameData.zero.maxHp = maxHp;

        const hasEnergyTank = gameData.inventory
                .zero
                .items
                .energy_tank ? true: false;

        const hasSaberPlus = gameData.inventory
                .zero
                .abilities
                .saber_plus ?? false;

        const slashADamage = ARMOR_STATS[gameData.currentArmors[1]].slashADamage + (hasSaberPlus ? 10: 0);

        const slashBDamage = ARMOR_STATS[gameData.currentArmors[1]].slashBDamage + (hasSaberPlus ? 10: 0);

        const slashCDamage = ARMOR_STATS[gameData.currentArmors[1]].slashCDamage + (hasSaberPlus ? 10: 0);

        const slashPiercingDamage = ARMOR_STATS[gameData.currentArmors[1]].slashPiercingDamage + (hasSaberPlus ? 10: 0);

        const gigaAttackDamage = ARMOR_STATS[gameData.currentArmors[1]].gigaAttackDamage;

        const evasion = ARMOR_STATS[gameData.currentArmors[1]].baseEvasion;

        const reduction = ARMOR_STATS[gameData.currentArmors[1]].baseReduction;

        const piercingSlashActions = (gameData.inventory
                .zero
                .abilities
                .quick_piercing_slash? 2: 3);

        const hasGigaAttack = ARMOR_STATS[gameData.currentArmors[1]].hasGigaAttack;

        const gigaAttackMustRecharge = ARMOR_STATS[gameData.currentArmors[1]].gigaAttackMustRecharge;

        const gigaAttackCooldown = (gameData.inventory
                .zero
                .abilities
                .giga_attack_recover? 5: 8);

        return {

            maxHp,

            hasEnergyTank: hasEnergyTank,

            slashADamage: slashADamage,

            slashBDamage: slashBDamage,

            slashCDamage: slashCDamage,

            slashPiercingDamage: slashPiercingDamage,

            gigaAttackDamage: gigaAttackDamage,

            actions: actions,

            evasion: evasion,
            
            reduction: reduction,

            piercingSlashActions: piercingSlashActions,

            hasGigaAttack: hasGigaAttack,

            gigaAttackMustRecharge: gigaAttackMustRecharge,

            gigaAttackCooldown: gigaAttackCooldown,

            armor:

                gameData
                    .currentArmors[1]

        };

    }

}