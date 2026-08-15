import { ARMOR_STATS } from "../constants/ArmorStats.js";

export default class
CharacterStatsCalculator {

    static buildX(
        gameData
    ) {

        let maxHp =
            gameData.x.baseHp;

        const abilities = gameData.inventory.x.abilities;

        const items = gameData.inventory.x.items;

        const actions  = 4 + (abilities.extra_offensive_action? 1: 0);

        const heartTanks = items.heart_tank ?? 0;

        maxHp +=
            heartTanks * 50;

        gameData.x.maxHp = maxHp;

        const armor = ARMOR_STATS[gameData.currentArmors[0]];

        const hasEnergyTank = items.energy_tank ? true: false;

        const hasBusterPlus = abilities.buster_plus ?? false;

        const hasSaberPlus = abilities.saber_plus ?? false;

        const basicShotDamage = armor.basicShotDamage + (hasBusterPlus ? 10 : 0);

        const mediumShotDamage = armor.mediumShotDamage + (hasBusterPlus ? 15 : 0);

        const chargedShotDamage = armor.chargedShotDamage + (hasBusterPlus ? 20 : 0);

        const slashDamage = armor.slashDamage + (hasSaberPlus ? 30 : 0);

        const isChargedShotPiercing = armor.piercingShot?? false;

        const hasQuickCharge = abilities.quick_charge?? (gameData.currentArmors[0] == "gaea"? true: false);

        const chargingMediumShotActions = (hasQuickCharge? 1: 2);

        const chargingChargedShotActions = (hasQuickCharge? 2: 3);

        const evasion = armor.baseEvasion + (abilities.agility_buffer?0.05:0);

        const reduction = armor.baseReduction + (gameData.currentArmors[0] == "x"? (abilities.shock_buffer?0.5:0):0);

        const hasGigaAttack = gameData.currentArmors[0] == "x" ? (items.hidden_capsule?? false) : armor.hasGigaAttack;

        const gigaAttackMustRecharge = armor.gigaAttackMustRecharge;

        const gigaAttackCooldown = (abilities.giga_attack_recover? 4: 7);

        const lifeRecover = abilities.life_recover?? false;

        return {

            maxHp,

            hasEnergyTank: hasEnergyTank,

            actions: actions,

            basicShotDamage: basicShotDamage,

            mediumShotDamage: mediumShotDamage,

            chargedShotDamage: chargedShotDamage,

            slashDamage: slashDamage,

            isChargedShotPiercing: isChargedShotPiercing,

            hasQuickCharge: hasQuickCharge,

            chargingMediumShotActions: chargingMediumShotActions,

            chargingChargedShotActions: chargingChargedShotActions,

            evasion: evasion,
            
            reduction: reduction,

            hasGigaAttack: hasGigaAttack,

            gigaAttackMustRecharge: gigaAttackMustRecharge,

            gigaAttackCooldown: gigaAttackCooldown,

            lifeRecover: lifeRecover,

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

        const abilities = gameData.inventory.zero.abilities;

        const items = gameData.inventory.zero.items;

        const actions  = 4 + (abilities.extra_offensive_action? 1: 0);

        const heartTanks = items.heart_tank ?? 0;

        maxHp +=
            heartTanks * 50;

        gameData.zero.maxHp = maxHp;

        const hasEnergyTank = items.energy_tank ? true: false;

        const hasSaberPlus = abilities.saber_plus ?? false;

        const armor = ARMOR_STATS[gameData.currentArmors[1]];

        const slashADamage = armor.slashADamage + (hasSaberPlus ? 15: 0);

        const slashBDamage = armor.slashBDamage + (hasSaberPlus ? 15: 0);

        const slashCDamage = armor.slashCDamage + (hasSaberPlus ? 15: 0);

        const slashPiercingDamage = armor.slashPiercingDamage + (hasSaberPlus ? 15: 0);

        const gigaAttackDamage = armor.gigaAttackDamage;

        const evasion = armor.baseEvasion + (abilities.agility_buffer?0.05:0);

        const reduction = armor.baseReduction + (gameData.currentArmors[1] == "zero"? (abilities.shock_buffer?0.50:0):0);

        const piercingSlashActions = (abilities.quick_piercing_slash? 2: 3);

        const hasGigaAttack = armor.hasGigaAttack;

        const gigaAttackMustRecharge = armor.gigaAttackMustRecharge;

        const gigaAttackCooldown = (abilities.giga_attack_recover? 4: 7);

        const lifeRecover = abilities.life_recover?? false;

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

            lifeRecover: lifeRecover,

            armor:

                gameData
                    .currentArmors[1]

        };

    }

}