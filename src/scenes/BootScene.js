import loadXAssets from "../entitites/characters/X/loadAssets.js";

import loadXShotAssets from "../entitites/characters/X/shots/loadAssets.js";

import loadZeroAssets from "../entitites/characters/Zero/loadAssets.js";

import loadFlyingEnemy1Assets from "../entitites/enemies/regular/FlyingEnemy1/loadAssets.js"

import loadFlyingEnemy2Assets from "../entitites/enemies/regular/FlyingEnemy2/loadAssets.js";

import loadFlyingEnemy3Assets from "../entitites/enemies/regular/FlyingEnemy3/loadAssets.js";

import loadGroundEnemy1Assets from "../entitites/enemies/regular/GroundEnemy1/loadAssets.js";

import loadGroundEnemy2Assets from "../entitites/enemies/regular/GroundEnemy2/loadAssets.js";

import loadGroundEnemy2ShotAssets from "../entitites/enemies/regular/GroundEnemy2/shots/loadAssets.js";

import loadBigEnemy1Assets from "../entitites/enemies/big/BigEnemy1/loadAssets.js";

import loadBigEnemy2Assets from "../entitites/enemies/big/BigEnemy2/loadAssets.js";

import loadBigEnemy3Assets from "../entitites/enemies/big/BigEnemy3/loadAssets.js";

import loadEnemy1ShotAssets from "../entitites/enemies/regular/FlyingEnemy1/shots/loadAssets.js";

import loadEnemy3ShotAssets from "../entitites/enemies/regular/FlyingEnemy3/shots/loadAssets.js";

import loadBigEnemy2ShotAssets from "../entitites/enemies/big/BigEnemy2/shots/loadAssets.js";

import loadBigEnemy3ShotAssets from "../entitites/enemies/big/BigEnemy3/shots/loadAssets.js";

import loadBigEnemy4Assets from "../entitites/enemies/big/BigEnemy4/loadAssets.js";

import loadBigEnemy4ShotAssets from "../entitites/enemies/big/BigEnemy4/shots/loadAssets.js";

import loadNightmareAssets from "../entitites/enemies/regular/Nightmare/loadAssets.js"

import loadNightmareShotAssets from "../entitites/enemies/regular/Nightmare/shots/loadAssets.js";

import loadNightmareZeroAssets from "../entitites/enemies/boss/NightmareZero/loadAssets.js";

import loadNightmareZeroGigaAttackAssets from "../entitites/enemies/boss/NightmareZero/gigaAttack/loadAssets.js";

import loadMagmaDragoonAssets from "../entitites/enemies/boss/MagmaDragoon/loadAssets.js";

import loadHadokenAssets from "../entitites/enemies/boss/MagmaDragoon/hadoken/loadAssets.js";

import loadMagmaDragoonFireBallAssets from "../entitites/enemies/boss/MagmaDragoon/gigaAttack/loadAssets.js";

import loadBurnDinorexAssets from "../entitites/enemies/boss/BurnDinorex/loadAssets.js";

import loadBurnDinorexFireballAssets from "../entitites/enemies/boss/BurnDinorex/fireball/loadAssets.js";

import loadCrescentGrizzlyAssets from "../entitites/enemies/boss/CrescentGrizzly/loadAssets.js";

import loadCrescentGrizzlySlashAssets from "../entitites/enemies/boss/CrescentGrizzly/slash/loadAssets.js";

import loadSlashBeastAssets from "../entitites/enemies/boss/SlashBeast/loadAssets.js";

import loadSlashBeastSlashAssets from "../entitites/enemies/boss/SlashBeast/slash/loadAssets.js";

import loadExplosionAssets from "../entitites/effects/Explosion/loadAssets.js";

import loadStageAssets from "../stages/loadAssets.js";

import loadGeneralAssets from "../general/loadAssets.js";

import loadDialogAssets from "../dialogs/loadAssets.js";

import SoundManager from "../systems/SoundManager.js";

import createXAnimations from "../entitites/characters/X/createAnimations.js";

import createXShotAnimations from "../entitites/characters/X/shots/createAnimations.js";

import createZeroAnimations from "../entitites/characters/Zero/createAnimations.js";

import createFlyingEnemy1Animations from "../entitites/enemies/regular/FlyingEnemy1/createAnimations.js";

import createFlyingEnemy2Animations from "../entitites/enemies/regular/FlyingEnemy2/createAnimations.js";

import createFlyingEnemy3Animations from "../entitites/enemies/regular/FlyingEnemy3/createAnimations.js";

import createGroundEnemy1Animations from "../entitites/enemies/regular/GroundEnemy1/createAnimations.js";

import createGroundEnemy2Animations from "../entitites/enemies/regular/GroundEnemy2/createAnimations.js";

import createGroundEnemy2ShotAnimations from "../entitites/enemies/regular/GroundEnemy2/shots/createAnimations.js";

import createBigEnemy1Animations from "../entitites/enemies/big/BigEnemy1/createAnimations.js";

import createBigEnemy2Animations from "../entitites/enemies/big/BigEnemy2/createAnimations.js";

import createBigEnemy3Animations from "../entitites/enemies/big/BigEnemy3/createAnimations.js";

import createEnemy1ShotAnimations from "../entitites/enemies/regular/FlyingEnemy1/shots/createAnimations.js";

import createEnemy3ShotAnimations from "../entitites/enemies/regular/FlyingEnemy3/shots/createAnimations.js";

import createBigEnemy2ShotAnimations from "../entitites/enemies/big/BigEnemy2/shots/createAnimations.js";

import createBigEnemy3ShotAnimations from "../entitites/enemies/big/BigEnemy3/shots/createAnimations.js";

import createBigEnemy4Animations from "../entitites/enemies/big/BigEnemy4/createAnimations.js";

import createBigEnemy4ShotAnimations from "../entitites/enemies/big/BigEnemy4/shots/createAnimations.js";

import createNightmareAnimations from "../entitites/enemies/regular/Nightmare/createAnimations.js";

import createNightmareShotAnimations from "../entitites/enemies/regular/Nightmare/shots/createAnimations.js";

import createNightmareZeroAnimations from "../entitites/enemies/boss/NightmareZero/createAnimations.js";

import createNightmareZeroGigaAttackAnimations from "../entitites/enemies/boss/NightmareZero/gigaAttack/createAnimations.js";

import createMagmaDragoonAnimations from "../entitites/enemies/boss/MagmaDragoon/createAnimations.js";

import createHadokenAnimations from "../entitites/enemies/boss/MagmaDragoon/hadoken/createAnimations.js";

import createMagmaDragoonFireBallAnimations from "../entitites/enemies/boss/MagmaDragoon/gigaAttack/createAnimations.js";

import createBurnDinorexAnimations from "../entitites/enemies/boss/BurnDinorex/createAnimations.js";

import createBurnDinorexFireballAnimations from "../entitites/enemies/boss/BurnDinorex/fireball/createAnimations.js";

import createCrescentGrizzlyAnimations from "../entitites/enemies/boss/CrescentGrizzly/createAnimations.js";

import createCrescentGrizzlySlashAnimations from "../entitites/enemies/boss/CrescentGrizzly/slash/createAnimations.js";

import createSlashBeastAnimations from "../entitites/enemies/boss/SlashBeast/createAnimations.js";

import createSlashBeastSlashAnimations from "../entitites/enemies/boss/SlashBeast/slash/createAnimations.js";

import createExplosionAnimations from "../entitites/effects/Explosion/createAnimations.js";

import createGeneralAnimations from "../general/createAnimations.js";

import createDialogAnimations from "../dialogs/createAnimations.js";




export default class BootScene
extends Phaser.Scene {

    constructor() {

        super(
            "BootScene"
        );

    }

    preload() {
        this.loadAssets();

    }

    loadAssets() {
        loadFlyingEnemy1Assets(this);
        loadFlyingEnemy2Assets(this);
        loadFlyingEnemy3Assets(this);
        loadGroundEnemy1Assets(this);
        loadGroundEnemy2Assets(this);
        loadGroundEnemy2ShotAssets(this);
        loadBigEnemy1Assets(this);
        loadBigEnemy2Assets(this);
        loadBigEnemy3Assets(this);
        loadXAssets(this);
        loadZeroAssets(this);
        loadXShotAssets(this);
        loadEnemy1ShotAssets(this);
        loadEnemy3ShotAssets(this);
        loadBigEnemy2ShotAssets(this);
        loadBigEnemy3ShotAssets(this);
        loadBigEnemy4Assets(this);
        loadBigEnemy4ShotAssets(this);
        loadNightmareAssets(this);
        loadNightmareShotAssets(this);
        loadNightmareZeroAssets(this);
        loadNightmareZeroGigaAttackAssets(this);
        loadMagmaDragoonAssets(this);
        loadHadokenAssets(this);
        loadMagmaDragoonFireBallAssets(this);
        loadBurnDinorexAssets(this);
        loadBurnDinorexFireballAssets(this);
        loadCrescentGrizzlyAssets(this);
        loadCrescentGrizzlySlashAssets(this);
        loadSlashBeastAssets(this);
        loadSlashBeastSlashAssets(this);
        loadExplosionAssets(this);
        loadGeneralAssets(this);
        loadStageAssets(this);
        loadDialogAssets(this);
        loadGeneralAssets(this);
        loadStageAssets(this);
        loadDialogAssets(this);
    }

    createAnimations(){
        createXAnimations(this);
        createXShotAnimations(this);
        createZeroAnimations(this);
        createFlyingEnemy1Animations(this);
        createFlyingEnemy2Animations(this);
        createFlyingEnemy3Animations(this);
        createGroundEnemy1Animations(this);
        createGroundEnemy2Animations(this);
        createGroundEnemy2ShotAnimations(this);
        createBigEnemy1Animations(this);
        createBigEnemy2Animations(this);
        createBigEnemy3Animations(this);
        createEnemy1ShotAnimations(this);
        createEnemy3ShotAnimations(this);
        createBigEnemy2ShotAnimations(this);
        createBigEnemy3ShotAnimations(this);
        createBigEnemy4Animations(this);
        createBigEnemy4ShotAnimations(this);
        createNightmareAnimations(this);
        createNightmareShotAnimations(this);
        createNightmareZeroAnimations(this);
        createNightmareZeroGigaAttackAnimations(this);
        createMagmaDragoonAnimations(this);
        createHadokenAnimations(this);
        createMagmaDragoonFireBallAnimations(this);
        createBurnDinorexAnimations(this);
        createBurnDinorexFireballAnimations(this);
        createCrescentGrizzlyAnimations(this);
        createCrescentGrizzlySlashAnimations(this);
        createSlashBeastAnimations(this);
        createSlashBeastSlashAnimations(this);
        createExplosionAnimations(this);
        createGeneralAnimations(this);
        createDialogAnimations(this);
        createGeneralAnimations(this);
        createDialogAnimations(this);
    }

    create() {
        this.createAnimations();

        this.scene.start(
            "TitleScene"
        );

    }
}