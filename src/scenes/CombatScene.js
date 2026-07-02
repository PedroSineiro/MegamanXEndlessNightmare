import X from "../entitites/characters/X/X.js"

import Zero from "../entitites/characters/Zero/Zero.js";

import createStage from "../stages/createStage.js";

import { ENEMY_SPAWN_CONFIG } from "../constants/EnemySpawnOffset.js";

import { ENEMY_REGISTRY } from "../constants/EnemyRegistry.js";

import { BOSS_CONFIG } from "../constants/BossRegistry.js";

import { BOSS_SPAWN_CONFIG } from "../constants/BossSpawnOffset.js";

import DataManager from "../systems/DataManager.js";

import TurnManager
from "../systems/TurnManager.js";

import DialogBox from "../systems/DialogBox.js";

import ActionMenu
from "../systems/ActionMenu.js";

import CombatHUD
from "../systems/CombatHUD.js";

import BossHUD
from "../systems/BossHUD.js";

import TargetSelector
from "../systems/TargetSelector.js";

import CharacterActionRunner 
from "../systems/CharacterActionRunner.js";

import CharacterStatsCalculator 
from "../systems/CharacterStatsCalculator.js";

import SceneHelper 
from "../systems/SceneHelper.js";

import SoundManager 
from "../systems/SoundManager.js";
import InterSceneManager from "../systems/InterSceneManager.js";

export default class CombatScene
extends Phaser.Scene {

    constructor() {

        super(
            "CombatScene"
        );

    }

    init(data) {

        this.combatData =
            data;

    }

    async create() {

        this.fadeOverlay = SceneHelper.createFadeOverlay(this);

        this.DataManager = DataManager;

        this.GameData = this.DataManager.loadGameData();

        this.isReady = false;

        this.isWaveOver = false;

        this.isBossFight = false;

        this.isBossDying = false;

        this.isGameOver = false;

        this.sfx =
            new SoundManager(
                this
            );

        this.actionMenu =

        new ActionMenu(
            this
        );

        this.dialogBox = 
            new DialogBox(this);

        this.playStageMusic();

        /*this.input.keyboard.on(

            "keydown-V",

            () => {

                this.GameData.amountCompletedStages++;

                DataManager.saveGameData(this.GameData);

                this.bgm.stop();

               this.scene.start("BaseScene", {});

            }

        );*/

        this.setupStage();

        this.setupEnemyLanes();

        await this.initialize();

    }

    async initialize() {

        this.currentWaveIndex =
            0;

        this.waves =
            this.combatData
                .waves;
        
        this.bossId =
            this.combatData
                .boss;


        const wave = this.waves[
                this.currentWaveIndex
            ];

        if(wave.type == "enemies"){
            
            this.setupEnemies(
                wave.enemies
            );

        }

        await SceneHelper.fadeFromBlack(this);

        await this.showReady();

        await this.setupPlayers();

         await this.runWaveDialogs(

            this.currentWaveIndex,

            false

        );

        this.targetSelector =

            new TargetSelector(
                this
            );


         this.actionRunner =

        new CharacterActionRunner(
            this
        );

        this.hud =
        new CombatHUD(
            this,
            10,
            0
        );

        this.turnManager =

            new TurnManager(
                this
            );

        if(wave.type == "boss"){

            this.movePlayersForBoss();
            
            this.bossId =
                wave.boss;
            
            await this.startBossSequence();

        }
        
        this.turnManager
            .startCombat();

    }

    setupStage() {

        createStage(
            this,
            this.combatData.stage
        );

    }

    async setupPlayers() {

        this.players =
            [];

        const playerMap = {

            x: X,

            zero: Zero

        };

        const spawnPositions = [

            {
                x: 480,
                y: -100
            },

            {
                x: 540,
                y: -100
            }

        ];

        const stats = [
            CharacterStatsCalculator.buildX(this.GameData),

            CharacterStatsCalculator.buildZero(this.GameData),
        ]

        const spawnPromises =
            [];

        this.combatData
            .players
            .forEach(

            (
                playerType,
                index
            ) => {

                const CharacterClass =

                    playerMap[
                        playerType
                    ];

                const spawn =

                    spawnPositions[
                        index
                    ];

                const player =

                    new CharacterClass(

                        this,

                        spawn.x,

                        spawn.y,

                        stats[index]



                    );

                this.players
                    .push(
                        player
                    );

                //
                // espera animação
                //

                spawnPromises.push(

                    player.spawnAnimation()

                );

            }

        );

        //
        // espera TODOS
        //

        await Promise.all(
            spawnPromises
        );

    }

    async preparePlayersForNextWave(
        currentWave,
        nextWave
    ) {

        if (

            !currentWave ||

            !nextWave

        ) {
            return;
        }

        const currentIsBoss =

            this.isBossWave(
                currentWave
            );

        const nextIsBoss =

            this.isBossWave(
                nextWave
            );

        //
        // boss -> enemies
        //

        if (

                currentIsBoss &&

                !nextIsBoss

            ) {

                await this
                    .movePlayersToDefaultPosition();

                return;

            }

            //
            // enemies -> boss
            //

            if (

                !currentIsBoss &&

                nextIsBoss

            ) {

                this.movePlayersForBoss();

                return;

            }

            //
            // enemies -> enemies
            // boss -> boss
            //
    }

    async movePlayersToDefaultPosition() {

        return Promise.all(

            this.players.map(

                player => {

                    //
                    // olhar esquerda
                    //


                    const targetX =

                        player.spawnX;

                    return this
                        .actionRunner
                        .moveToX(

                            player,

                            targetX

                        );

                }

            )

        );

    }

    spawnEnemy(
        enemyType,
        lane,
        slotIndex
    ) {

        const x =
            this.enemySlots
                [lane]
                [slotIndex];

        const y =
            this.enemyLanes[
                lane
            ];

        //
        // lado da arena
        //

        const isLeftSide =
            x < 400;

        //
        // direção
        // esquerda -> direita
        // direita -> esquerda
        //

        const direction =
            isLeftSide
            ? 1
            : -1;

        const EnemyClass =
            ENEMY_REGISTRY[
                enemyType
            ];

        const config =
            ENEMY_SPAWN_CONFIG[
                enemyType
            ];

        const enemy =
            new EnemyClass(

                this,

                x,

                config.offsetX,
                
                y,

                config.offsetY,

                direction

            );

        enemy.lane =
        lane;

        enemy.slotIndex =
            slotIndex;

        this.enemies.push(
            enemy
        );

    }

    setupEnemyLanes() {

        //
        // linhas horizontais
        //

        this.enemyLanes = {

            top: 340,

            boss: 420,

            bottom: 500

        };

        //
        // slots fixos
        //

        this.enemySlots = {

            top: [

                80,
                240,
                760,
                920

            ],

            boss: [
                600
            ],

            bottom: [

                80,
                240,
                760,
                920

            ]

        };

        //
        // debug visual
        //

        this.spawnDebugGraphics =

            this.add
                .graphics();

        //this.drawEnemyLanes();

    }

    isEnemyBlocked(
        enemy
    ) {

        const laneEnemies =

            this.enemies
                .filter(

                    e =>

                        !e.isDead &&

                        e.lane ===
                        enemy.lane

                );

        //
        // slot 1 é protegido pelo 0
        //

        if (
            enemy.slotIndex === 0
        ) {

            return laneEnemies
                .some(

                    e =>

                        e.slotIndex === 1

                );

        }

        //
        // slot 2 é protegido pelo 3
        //

        if (
            enemy.slotIndex === 3
        ) {

            return laneEnemies
                .some(

                    e =>

                        e.slotIndex === 2

                );

        }

        return false;

    }


    drawEnemyLanes() {

        const g =

            this.spawnDebugGraphics;

        g.clear();

        g.setDepth(
            99999
        );

        g.lineStyle(
            3,
            0x00ff00,
            0.9
        );

        //
        // top lane
        //

        g.lineBetween(

            0,
            this.enemyLanes.top,

            1000,
            this.enemyLanes.top

        );

        //
        // bottom lane
        //

        g.lineBetween(

            0,
            this.enemyLanes.bottom,

            1000,
            this.enemyLanes.bottom

        );

        g.lineBetween(

            0,
            this.enemyLanes.boss,

            1000,
            this.enemyLanes.boss

        );

        //
        // debug dos slots
        //

        for (

            const x

            of this.enemySlots.top

        ) {

            g.fillStyle(
                0xff0000
            );

            g.fillCircle(

                x,

                this.enemyLanes.top,

                8

            );

        }

        for (

            const x

            of this.enemySlots.bottom

        ) {

            g.fillStyle(
                0x0000ff
            );

            g.fillCircle(

                x,

                this.enemyLanes.bottom,

                8

            );

        }

    }

    setupEnemies(
        wave
    ) {

        this.enemies =
            [];


        wave.forEach(

            enemy => {

                this.spawnEnemy(

                    enemy.type,

                    enemy.lane,

                    enemy.slot

                );

            }

        );

    }

    async showReady() {

        const ready =

            this.add.sprite(
                500,
                300,
                "ready_1"
            );

        ready
            .setScale(2)
            .setDepth(
                99999
            );

        //
        // espera animação
        //

        await this.playAnimation(
            ready
        );

        //
        // som
        //

        this.sfx.play(
            "ready",
            {
                volume: 0.2
            }
        );

        //
        // espera
        //

        await SceneHelper.wait(this, 
            1000
        );

        ready.destroy();

        this.isReady =
            true;

    }


    playAnimation(
        animation
    ) {

        return new Promise(

            resolve => {

                animation.play(
                    "ready_anim",
                    true
                );

                animation.once(

                    Phaser
                        .Animations
                        .Events
                        .ANIMATION_COMPLETE,

                    () => {

                        resolve();

                    }

                );

            }

        );

    }


    async showWarning(){

        const warning =

            this.add.sprite(
                500,
                300,
                "warning"
            );

        warning.play(
            "warning_anim"
        );

        warning
        .setScale(2)
        .setDepth(
            99999
        );

        await this.playWarningSound();

    }    

    async playWarningSound() {

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            this.sfx.play(
                "warning_beep",
                {
                    volume: 0.3
                }
            );

            await SceneHelper.wait(this,
                1300
            );

        }

    }

    isBossWave(
        wave
    ) {

        return (
            wave?.type ===
            "boss"
        );

    }

    isEnemyWave(
        wave
    ) {

        return (
            wave?.type ===
            "enemies"
        );

    }

    async checkWaveCompleted() {

        const aliveEnemies =

            this.enemies.filter(

                enemy =>

                    !enemy.isDead

            );

        if (
            aliveEnemies.length >
            0
        ) {
            return;
        }

        //
        // espera ações
        //

        this.isWaveOver = true;

        await this
            .waitForPlayersIdle();

        const currentWave =

            this.waves[
                this.currentWaveIndex
            ];

        this.currentWaveIndex++;

        const nextWave =

            this.waves[
                this.currentWaveIndex
            ];

        if (
            !nextWave
        ) {

            //
            // fim combate
            //

            await this.startVictorySequence();

            await SceneHelper.wait(this, 1000);

            await SceneHelper.fadeToBlack(this);

            await SceneHelper.wait(this, 2000);

            const nextScene = InterSceneManager.handleNextSceneAfterCombat(this.GameData, this.DataManager, this.combatData);

            this.scene.start(nextScene.scene, nextScene.data);

            return;
        }

        //
        // prepara transição
        //

        await this
            .preparePlayersForNextWave(

                currentWave,

                nextWave

            );

        //
        // spawn wave
        //

        this.isWaveOver = false;

        await this.spawnWave(
            nextWave
        );

    }

    async gameOver(){

        if (this.isGameOver) {
            return;
        }

        this.bgm?.stop();

        this.isGameOver = true;

        await SceneHelper.wait(this, 1000);

        await SceneHelper.fadeToBlack(this);

        const nextScene = InterSceneManager.handleGameOver(this.GameData, this.DataManager, this.combatData);

        this.scene.start(nextScene.scene, nextScene.data);

    }



    async startVictorySequence(){
        this.bgm?.stop();

            await this.playSoundAndWait("stage_clear", {volume: 0.2});

            this.players.forEach(player => {
                player
                    .stateMachine
                    .transition(
                        "victory"
                    );
            });

            await SceneHelper.wait(this, 500);

            this.sfx.play("victory", {volume: 0.2});
    }

    playStageMusic(){
        this.bgm =

        this.sound.add(

            this.combatData.stage_theme,

            {
                loop: true,
                volume: 0.15
            }

        );

        this.bgm.play();
    }

    async playSoundAndWait(
        key,
        config = {}
    ) {

        return new Promise(

            resolve => {

                const sound =

                    this.sound.add(
                        key,
                        config
                    );

                sound.once(

                    "complete",

                    () => {

                        sound.destroy();

                        resolve();

                    }

                );

                sound.play();

            }

        );

    }

    async spawnWave(
        wave
    ) {

            await this.runWaveDialogs(

                this.currentWaveIndex,

                false

            );

        if (
            this.isEnemyWave(
                wave
            )
        ) {

            if (
                !this.bgm?.isPlaying
            ) {

                this.playStageMusic();

            }

            this.startNextWave(
                wave.enemies
            );

            return;
        }

        if (
            this.isBossWave(
                wave
            )
        ) {

            this.bossId =
                wave.boss;

            await this.startBossSequence();
        }

    }

    async startNextWave(
        enemies
    ) {

        //
        // limpa menu
        //

        this.actionMenu
            ?.clear();

        //
        // trava combate
        //

        this.isReady =
            false;

        //
        // espera players
        // terminarem ações
        //

        await this
            .waitForPlayersIdle();

        //
        // wave atual
        //

        const currentWave =

            this.waves[
                this.currentWaveIndex
            ];

        //
        // próxima wave
        //

        const nextWave =

            this.waves[
                this.currentWaveIndex + 1
            ];

        //
        // reposicionamento
        // entre tipos
        //


        //
        // fade preto
        //

        await SceneHelper
            .fadeToBlack(this);

        //
        // limpa inimigos
        //

        this.enemies =
            [];

        //
        // sai do boss mode
        //

        this.isBossFight =
            false;

        this.boss =
            null;

        //
        // spawn inimigos
        //

        this.setupEnemies(
            enemies
        );

        //
        // espera spawn visual
        //

        await SceneHelper.wait(this, 
            500
        );

        //
        // volta imagem
        //

        await SceneHelper
            .fadeFromBlack(this);

        //
        // turn order
        //

        this.turnManager
            .rebuildTurnOrder();

        this.turnManager
            .startCombat();

        //
        // pronto
        //

        this.isReady =
            true;

    }

    async startBossSequence() {

        //
        // personagens recuam
        //

        this.bgm.stop();

        this.actionMenu.clear();

        //
        // warning simultâneo
        //

        const warningPromise =

            this.showWarning();

        //
        // espera ambos
        //

        await Promise.all([

            warningPromise

        ]);

        //
        // boss spawn
        //

        await this.spawnBoss();

        await this.runWaveDialogs(

            this.currentWaveIndex,

            true

        );

        this.bgm = this.sound.add(

            this.combatData.boss_theme,

            {
                loop: true,
                volume: 0.15
            }

        );

        this.bgm.play();


        //
        // volta turnos
        //

        this.turnManager
            .rebuildTurnOrder();

        this.turnManager
            .startCombat();

        this.isReady =
            true;

    }


    async movePlayersForBoss() {

        return Promise.all(

            this.players.map(

                player =>

                    this.movePlayerBackForBoss(
                        player
                    )

            )

        );

    }


    async movePlayerBackForBoss(
        player
    ) {


        //
        // destino
        //

        const targetX =

            player.sprite.x
            - 200;

        return new Promise(

            resolve => {

                const tolerance =
                    8;

                const event =

                    this.time
                        .addEvent({

                    delay:
                        16,

                    loop:
                        true,

                    callback: () => {

                        //
                        // limpa inputs
                        //
                        const dx =

                            targetX -

                            player
                                .sprite
                                .x;

                        //
                        // chegou
                        //

                        if (

                            Math.abs(dx)

                            <= tolerance

                        ) {

                            player
                                .virtualInput
                                .left =
                                    false;

                            player
                                .virtualInput
                                .right =
                                    false;

                            player.direction =
                                1;

                            player.sprite
                                .setFlipX(
                                    false
                                );

                            event.remove();

                            resolve();

                            return;

                        }

                        //
                        // andar
                        //

                        if (
                            dx > 0
                        ) {

                            player
                                .virtualInput
                                .right =
                                    true;

                        }

                        else {

                            player
                                .virtualInput
                                .left =
                                    true;

                        }

                    }

                });

            }

        );

    }
    async waitForPlayersIdle() {

        return new Promise(

            resolve => {

                const event =

                    this.time
                        .addEvent({

                    delay:
                        16,

                    loop:
                        true,

                    callback: () => {

                        const someoneBusy =

                            this.players
                                .some(

                                    player =>

                                        player
                                            .isBusy

                                );

                        if (
                            someoneBusy
                        ) {
                            return;
                        }

                        event.remove();

                        resolve();

                    }

                });

            }

        );

    }

    async spawnBoss() {

        const BossClass =

            BOSS_CONFIG[
                this.bossId
            ];

        const BossOffset = BOSS_SPAWN_CONFIG[this.bossId];

        this.boss =

            new BossClass(

                this,

                650,

                BossOffset.offsetX,
                
                this.enemyLanes["boss"],

                BossOffset.offsetY

            );

        await this.boss.spawn();

        this.enemies =
            [];

        this.enemies.push(
            this.boss
        );

        this.bossHud =
        new BossHUD(
            this,
            600,
            0
        );

        this.isBossFight = true;

    }

    async runWaveDialogs(
        waveIndex,
        isAfterBossSpawn
    ) {

        const dialogs =

            this.getDialogsForWave(

                waveIndex,

                isAfterBossSpawn

            );

        for (

            const dialogEvent

            of dialogs

        ) {

            await this.dialogBox.start(

                dialogEvent.dialogs

            );

        }

    }

    getDialogsForWave(
        waveIndex,
        isAfterBossSpawn
    ) {

        return this.combatData
            .dialogs
            ?.filter(

                dialog =>

                    dialog.waveIndex ===
                    waveIndex &&

                    dialog.isAfterBossSpawn ===
                    isAfterBossSpawn

            )

            ?? [];

    }


    updateEntities() {

        this.players.forEach(
            player =>
                player.update()
        );

        this.enemies?.forEach(
            enemy =>
                enemy.update()
        );

    }

    updatePlayerShots() {

        this.players.forEach(

            player => {

                player.shots
                    ?.forEach(

                    shot => {

                        if (
                            !shot.active
                        ) {
                            return;
                        }

                        this.enemies
                            .forEach(

                            enemy => {

                                if (
                                    enemy.isDead
                                ) {
                                    return;
                                }

                                const hit =

                                    Phaser
                                        .Geom
                                        .Intersects
                                        .RectangleToRectangle(

                                            shot.hitbox,

                                            enemy
                                                .hurtbox

                                        );

                                if (
                                    hit
                                ) {

                                    enemy.takeDamage(
                                        shot.damage
                                    );

                                    //
                                    // só destrói se o inimigo
                                    // SOBREVIVEU ao tiro
                                    //

                                    if (
                                        !enemy.isDead
                                    ) {

                                        shot.destroy();

                                    }

                                }

                            }

                        );

                    }

                );

            }

        );

    }

    updateSlashCollisions() {

        this.players.forEach(

            player => {

                const hitbox =

                    player
                        .attackHitbox;

                if (
                    !hitbox?.active
                ) {
                    return;
                }

                this.enemies
                    .forEach(

                    enemy => {

                        if (
                            enemy.isDead
                        ) {
                            return;
                        }

                        const hit =

                            Phaser
                                .Geom
                                .Intersects
                                .RectangleToRectangle(

                                    hitbox.hitbox,

                                    enemy
                                        .hurtbox

                                );

                        if (
                            hit
                        ) {

                            if (

                                !hitbox
                                    .alreadyHit
                                    .includes(
                                        enemy
                                    )

                            ) {

                                enemy
                                    .takeDamage(

                                        hitbox
                                            .damage

                                    );

                                hitbox
                                    .alreadyHit
                                    .push(
                                        enemy
                                    );

                            }

                        }

                    }

                );

            }

        );

    }

    updateZeroGigaShots() {

        this.players.forEach(

            player => {

                player.gigaShots
                    ?.forEach(

                    shot => {

                        if (
                            !shot.active
                        ) {
                            return;
                        }

                        this.enemies
                            .forEach(

                            enemy => {

                                if (
                                    enemy.isDead
                                ) {
                                    return;
                                }

                                const hit =

                                    Phaser
                                        .Geom
                                        .Intersects
                                        .RectangleToRectangle(

                                            shot.hitbox,

                                            enemy
                                                .hurtbox

                                        );

                                if (
                                    hit
                                ) {

                                    enemy
                                        .takeDamage(
                                            shot.damage
                                        );

                                }

                            }

                        );

                    }

                );

            }

        );

    }

    updateEnemyShots() {

        this.enemies?.forEach(

            enemy => {

                enemy.shots
                    ?.forEach(

                    shot => {

                        if (
                            !shot.active
                        ) {
                            return;
                        }

                        this.players
                        .forEach(

                            player => {

                                if (
                                    player.isDead
                                ) {
                                    return;
                                }

                                //
                                // tiro normal
                                //

                                if (
                                    !shot.isAreaType
                                ) {

                                    const hit =

                                    !shot.hasCollided &&

                                    Phaser
                                        .Geom
                                        .Intersects
                                        .RectangleToRectangle(

                                            shot.hitbox,

                                            player
                                                .hurtbox

                                        );

                                    if (
                                        !hit
                                    ) {
                                        return;
                                    }

                                    shot.hasCollided =
                                        true;

                                    const notMissed = player.receiveAttack(shot.damage, shot.owner);

                                    if (
                                        shot
                                            .destroyWhenHit && notMissed
                                    ) {

                                        shot.destroy();

                                    }

                                    return;

                                }

                                //
                                // AREA TYPE
                                //

                                if (
                                shot.isAreaType
                                ) {

                                    //
                                    // já colidiu
                                    //

                                    const alreadyHit =

                                        shot.hitTargets
                                            .includes(

                                                player
                                                    .filename

                                            );

                                    if (
                                        alreadyHit
                                    ) {
                                        return;
                                    }

                                    //
                                    // colisão
                                    //

                                    const hit =

                                        Phaser
                                            .Geom
                                            .Intersects
                                            .RectangleToRectangle(

                                                shot.hitbox,

                                                player
                                                    .hurtbox

                                            );

                                    if (
                                        !hit
                                    ) {
                                        return;
                                    }

                                    //
                                    // marca colisão
                                    //

                                    shot.hitTargets
                                        .push(

                                            player
                                                .filename

                                        );

                                    player.receiveAttack(shot.damage, shot.owner);

                                    

                                }

                            }

                        );

                    }

                );

            }

        );

    }


    update() {

        if(!this.isReady){
            return;
        } 

        this.updateEntities();

        this.updatePlayerShots();

        this.updateSlashCollisions();

        this.updateZeroGigaShots();

        this.updateEnemyShots();

        this.hud?.update();

        this.bossHud?.update();

    }

}