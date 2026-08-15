import BaseCharacter
from "../BaseCharacter.js";

import StateMachine
from "../../../states/StateMachine.js";

import LightState
from "../../../states/player/LightState.js";

import SpawnState
from "../../../states/player/SpawnState.js";

import IdleState
from "../../../states/player/IdleState.js";

import StartWalkingState
from "../../../states/player/StartWalkingState.js";

import WalkingState
from "../../../states/player/WalkingState.js";

import TakingDamageState
from "../../../states/player/TakingDamageState.js";

import DeathState
from "../../../states/player/DeathState.js";

import VictoryState 
from "../../../states/player/VictoryState.js";

import LeavingState 
from "../../../states/player/LeavingState.js";

import NeutralWeaponState
from "../../../states/player/weapon/NeutralWeaponStage.js";

import ChargingWeaponState
from "../../../states/player/weapon/ChargingWeaponState.js";

import ShootingWeaponState
from "../../../states/player/weapon/ShootingWeaponState.js";

import LowHpIdleState
from "../../../states/player/LowHPIdleState.js";

import NeutralGigaAttackState from "../../../states/player/gigaAttackX/NeutralGigaAttackState.js";

import FourthGigaAttackState from "../../../states/player/gigaAttackX/FourthArmorGigaAttackState.js";

import XShot
from "./shots/XShot.js";

import FalconGigaAttackState from "../../../states/player/gigaAttackX/FalconArmorGigaAttackState.js";

import FalconGigaShot from "./shots/falconGigaShot.js";

import NeutralSlashState from "../../../states/player/saber/NeutralSlashXState.js";

import SlashState from "../../../states/player/saber/SlashState.js";

import BladeGigaAttackState from "../../../states/player/gigaAttackX/BladeGigaAttackState.js";

import ShadowGigaAttackState from "../../../states/player/gigaAttackX/ShadowGigaAttackState.js";

import ShadowGigaSlash from "./shots/ShadowGigaSlash.js";

import GaeaGigaSphere from "./shots/GaeaGigaSphere.js";

import GaeaGigaAttackState from "../../../states/player/gigaAttackX/GaeaArmorGigaAttackState.js";

import XGigaAttackState from "../../../states/player/gigaAttackX/XGigaAttackState.js";


export default class X
extends BaseCharacter {

    constructor(
        scene,
        x,
        y,
        stats
    ) {

        super(
            scene,
            x,
            y,
            stats
        );

        this.filename= "x";

        //
        // sprite
        //

        this.setupSprite(
            "x_idle_1",
            x,
            y
        );

        //
        // hurtbox
        //

        this.createHurtbox(
            35,
            60,
            -20,
            -150
        );

        //
        // debug
        //
/*
        this.debugGraphics =
            scene.add.graphics();

        this.debugGraphics
            .setDepth(
                9999
            );*/

        //
        // weapon
        //

        this.basicShotDamage = stats.basicShotDamage;

        this.mediumShotDamage = stats.mediumShotDamage;

        this.chargedShotDamage = stats.chargedShotDamage;

        this.slashDamage = stats.slashDamage;

        this.isChargedShotPiercing = stats.isChargedShotPiercing;

        this.falconGigaAttackDamage = 65;

        this.gaeaGigaAttackDamage = 80;

        this.bladeGigaAttackDamage = 320;

        this.novaStrikeDamage = 320;

        this.shadowGigaAttackDamage = 80;

        this.xGigaAttackDamage = 270;

        this.novaStrikeHitbox = null;

        this.shots = [];

        this.shootKey =

            scene.input
                .keyboard
                .addKey(

                    Phaser
                    .Input
                    .Keyboard
                    .KeyCodes
                    .X

                );

        this.chargeTime =
            0;

        this.chargeLevel =
            0;

        this.wasAttackPressed = false;

        //
        // sounds
        //

        this.chargingSound =

            this.hasQuickCharge?

            scene.sound.add(
                "x_charging_quick"
            ):

            scene.sound.add(
                "x_charging"
            );

        this.chargedSound =

            scene.sound.add(
                "x_charged"
            );

        this.chargedVoice =

            scene.sound.add(
                "x_charged_voice"
            );

        this.gigaAttackXKey =

            scene.input
                .keyboard
                .addKey(

                    Phaser
                    .Input
                    .Keyboard
                    .KeyCodes
                    .N

                );

        //
        // weapon state machine
        //

        this.weaponStateMachine =

            new StateMachine(

                "neutral",

                {

                    neutral:
                        new NeutralWeaponState(),

                    charging:
                        new ChargingWeaponState(),

                    shooting:
                        new ShootingWeaponState()

                },

                this

            );

        //
        // movement state machine
        //

        this.stateMachine =

            new StateMachine(

                "light",

                {

                    light:
                        new LightState(),

                    spawning:
                        new SpawnState(),

                    idle:
                        new IdleState(),

                    startWalking:
                        new StartWalkingState(),

                    walking:
                        new WalkingState(),

                    takingDamage:
                        new TakingDamageState(),

                    lowHpIdle:
                        new LowHpIdleState(),

                    death:
                        new DeathState(),

                    victory:
                        new VictoryState(),

                    leaving:
                        new LeavingState()
                        
                },

                this

            );

            this.slashStateMachine =
                new StateMachine(
    
                "neutral",
    
                {
    
                    neutral:
                        new NeutralSlashState(),
    
                    slash:
                        new SlashState()
    
                },
    
                this
    
            );

            this.gigaAttackStateMachine =
                new StateMachine(
    
                "neutral",
    
                {
    
                    neutral:
                        new NeutralGigaAttackState(),
    
                    fourth:
                        new FourthGigaAttackState(),

                    ultimate:
                        new FourthGigaAttackState(),

                    gaea:
                        new GaeaGigaAttackState(),

                    falcon:
                        new FalconGigaAttackState(),

                    blade:
                        new BladeGigaAttackState(),

                    shadow:
                        new ShadowGigaAttackState(),

                    x:
                        new XGigaAttackState()
    
                },
    
                this
    
                );

        this.gigaShots = [];

    }

    waitUntilCharged(
        level
    ) {

        return new Promise(

            resolve => {

                const event =

                    this.scene.time.addEvent({

                        delay: 16,

                        loop: true,

                        callback: () => {

                            if (

                                this.chargeLevel >= level

                            ) {

                                event.remove();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    getAttackInput() {

        return (

            /*this.shootKey
                .isDown ||*/

            this.virtualInput
                .buster

        );

    }

    getSaberAttackInput() {

        return (

            /*this.saberKey
                .isDown ||*/

            this.virtualInput
                .slash

        );

    }

    isAttackPressed() {

        return (

           /* this.shootKey
                .isDown ||*/

            this.virtualInput
                .buster

        );

    }

    wasAttackJustReleased() {

        const pressed =

            this.isAttackPressed();

        const released =

            this.wasAttackPressed &&

            !pressed;

        this.wasAttackPressed =
            pressed;

        return released;

    }

    shoot(
        chargeLevel
    ) {

        const offsetX =

            this.direction === 1
            ? 30
            : -30;

        let shotType =
            "basic";

        let damage = this.basicShotDamage;

        let isShotPiercing = false;

        if (
            chargeLevel === 1
        ) {

            shotType =
                "medium";

            damage = this.mediumShotDamage;

        }

        else if (
            chargeLevel === 2
        ) {

            shotType =
                "charged";

            damage = this.chargedShotDamage;

            isShotPiercing = this.isChargedShotPiercing;

        } else if (
            chargeLevel === 4
        ) {

            shotType =
                "giga";

            damage = this.currentArmor=="blade"?this.bladeGigaAttackDamage: this.xGigaAttackDamage;

            isShotPiercing = true;

        }

        const offsetY = !(this.currentArmor == "x" && shotType == "giga")? -135:-110;

        const hasSpawn = !((this.currentArmor == "blade" || this.currentArmor == "shadow")
                            && (shotType == "charged" || shotType == "giga")) && !(this.currentArmor == "x" && shotType == "giga");

        const shot =

            new XShot(

                this.scene,

                this,

                this.sprite.x +
                offsetX,

                this.sprite.y +
                offsetY,

                this.direction,

                shotType,

                this.currentArmor,

                damage,

                isShotPiercing,

                hasSpawn
            );

        this.shots.push(
            shot
        );

    }

    startChargingSound() {

        if (
            !this
            .chargingSound
            .isPlaying
        ) {

            this
            .chargingSound
            .play({

                volume: 0.1

            });

        }

    }

    stopChargingSound() {

        if (
            this
            .chargingSound
            .isPlaying
        ) {

            this
            .chargingSound
            .stop();

        }

    }

    startChargedSound() {

        if (
            !this
            .chargedSound
            .isPlaying
        ) {

            this
            .chargedSound
            .play({

                loop: true,
                volume: 0.1

            });

        }

    }

    stopChargedSound() {

        if (
            this
            .chargedSound
            .isPlaying
        ) {

            this
            .chargedSound
            .stop();

        }

    }

    startChargingParticles() {

        if (
            this.chargingParticles
        ) {
            return;
        }

        this.chargingParticles =

            this.scene.add.sprite(

                this.sprite.x + (this.direction===1?-5:5),
                this.sprite.y-130,

                "x_charging_1"

            ).setDepth(9999)
            .setScale(2)
            .play(
                "x_charging"
            );

    }

    stopChargingParticles() {

        this.chargingParticles
            ?.destroy();

        this.chargingParticles =
            null;

    }

    startChargedParticles() {

        if (
            this.chargedParticles
        ) {
            return;
        }

        this.chargedParticles =

            this.scene.add.sprite(

                this.sprite.x + (this.direction===1?-5:5),
                this.sprite.y-130,

                "x_charged_1"

            ).setDepth(9999)
            .setScale(2)
            .play(
                "x_charged"
            );

    }

    stopChargedParticles() {

        this.chargedParticles
            ?.destroy();

        this.chargedParticles =
            null;

    }

    getGigaAttackInput() {

        return (

            /*this.gigaAttackXKey
                .isDown ||*/

            this.virtualInput
                .giga

        );

    }

    async novaStrike() {

        this.isInvulnerable = true;

        //
        // preparação
        //

        await this.playAnimation(
            `${this.currentArmor}_start_nova_strike`
        );

        //
        // dash
        //

        await this.performNovaDash();

        //
        // desaceleração
        //

        await this.performNovaBrake();

        this.isInvulnerable = false;

    }

    async performNovaDash() {

        this.scene.sfx.play("nova_strike", {
            volume: 0.2
        })

        this.sprite.play(
            `${this.currentArmor}_nova_strike`
        );

        return new Promise(

            resolve => {

                const totalDistance =
                    550;

                let traveled =
                    0;

                const speed =
                    18;

                const direction =
                    this.direction;

                this.novaStrikeHitbox = {
                    damage: this.novaStrikeDamage,
                    alreadyHit: []
                };

                const event =

                    this.scene.time.addEvent({

                        delay: 16,

                        loop: true,

                        callback: () => {

                            //
                            // mover
                            //

                            this.sprite.x +=
                                speed * direction;

                            traveled +=
                                speed;

                            //
                            // hitbox
                            //

                            const hitboxWidth =
                                180;

                            const hitboxHeight =
                                100;

                            const hitboxOffsetX =
                                40;

                            this.novaStrikeHitbox.hitbox =

                            new Phaser.Geom.Rectangle(

                                direction === 1

                                    ? this.sprite.x - hitboxOffsetX

                                    : this.sprite.x - hitboxWidth + hitboxOffsetX,

                                this.sprite.y - 180,

                                hitboxWidth,

                                hitboxHeight

                            );

                            //
                            // terminou?
                            //

                            if (

                                traveled >=

                                totalDistance

                            ) {

                                this.novaStrikeHitbox = null;

                                event.remove();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    async performNovaBrake() {

        const speeds = [

            12,
            8,
            4,
            2,
            1

        ];

        const direction =
            this.direction;

        this.sprite.play(
            `${this.currentArmor}_end_nova_strike`
        );

        this.scene.sfx.play("end_nova_strike", {
            volume: 0.2
        })

        for (

            const speed of speeds

        ) {

            this.sprite.x +=

                speed *
                direction;

            await this.wait(
                50
            );

        }

        this.updateMovementAnimation();

    }

    async falconGigaAttack() {

        this.isInvulnerable = true;

        await this.playAnimation(
            `${this.currentArmor}_start_giga_attack`
        );

        await this.chargeFalcon();

        await this.unleashFalcon();
        
        this.isInvulnerable = false;

    }

    async chargeFalcon() {
        this.sprite.play(`${this.currentArmor}_charge_giga_attack`);

        await this.wait(1000);
    }

    async unleashFalcon() {
        this.sprite.play(`${this.currentArmor}_giga_attack`);
        
        this.scene.sfx.play("falcon_giga_attack");

        this.falconGigaShots();

        await this.wait(3000);

        this.updateMovementAnimation();
    }

    falconGigaShots() {

        const screenWidth =
            this.scene.scale.width + 50;

        const screenHeight =
            this.scene.scale.height;

        //
        // lanes verticais
        //

        const shotsPerSide =
            14;

        const margin =
            0;

        const spacing =

            (
                screenWidth -
                margin * 2
            ) /

            (
                shotsPerSide - 1
            );

        //
        // cria cada lane
        //

        for (
            let lane = 0;
            lane < shotsPerSide;
            lane++
        ) {

            const baseX =

                margin +

                spacing * lane;

            //
            // 3 tiros de cima
            // 3 tiros de baixo
            //

            const directions = [
                1,
                1,

                -1,
                -1

            ];

            //
            // ordem aleatória
            //

            Phaser.Utils.Array.Shuffle(
                directions
            );

            let delay = 0;

            //
            // agenda os disparos
            //

            for (
                const direction of directions
            ) {

                this.scene.time.delayedCall(

                    delay,

                    () => {

                        const shot =

                            new FalconGigaShot(

                                this.scene,

                                this,

                                baseX +

                                Phaser.Math.Between(
                                    -4,
                                    4
                                ),

                                direction === 1

                                    ? -80

                                    : screenHeight + 80,

                                direction,

                                this.falconGigaAttackDamage

                            );

                        this.gigaShots.push(
                            shot
                        );

                    }

                );

                //
                // cooldown aleatório
                // da lane
                //

                delay +=

                    Phaser.Math.Between(
                        550,
                        750
                    );

            }

        }

    }

    async gaeaGigaAttack() {

        this.isInvulnerable = true;

        this.scene.sfx.play("gaea_start_giga_attack");

        await this.playAnimation(
            `${this.currentArmor}_start_giga_attack`
        );

        this.sprite.play(`${this.currentArmor}_giga_attack`);

        this.scene.sfx.play("gaea_giga_attack");

        const sphere = this.gaeaGigaSphere();

        await this.wait(3000);

        sphere.destroy();

        this.sprite.play(`${this.currentArmor}_end_giga_attack`);

        await this.wait(1000);

        this.isInvulnerable = false;

    }

    gaeaGigaSphere() {

        const offsetX =

            this.direction === 1
            ? 30
            : -30;

        const offsetY = -135;

        const sphere =

            new GaeaGigaSphere(

                this.scene,

                this,

                this.sprite.x +
                offsetX,

                this.sprite.y + offsetY,

                this.direction,

                true,

                this.shadowGigaAttackDamage

            );

        this.gigaShots.push(
            sphere
        );

        return sphere;
    }

    shadowGigaSlash() {

        const offsetX =

            this.direction === 1
            ? 30
            : -30;

        const offsetY = -135;

        const slash1 =

            new ShadowGigaSlash(

                this.scene,

                this,

                this.sprite.x +
                offsetX,

                this.sprite.y + offsetY,

                this.direction,

                true,

                this.shadowGigaAttackDamage

            );

        this.gigaShots.push(
            slash1
        );

        const slash2 =

            new ShadowGigaSlash(

                this.scene,

                this,

                this.sprite.x +
                offsetX,

                this.sprite.y + offsetY,

                this.direction,

                false,

                this.shadowGigaAttackDamage

            );

        this.gigaShots.push(
            slash2
        );
    }

    async xGigaAttack() {

        this.isInvulnerable = true;

        this.scene.sfx.play("gaea_start_giga_attack");

        this.sprite.play(`${this.currentArmor}_start_giga_attack`);

        await this.wait(2000);

        this.scene.sfx.play("hadouken_voice");

        await this.playAnimation(
            `${this.currentArmor}_giga_attack`
        );

        this.shoot(4);

        this.isInvulnerable = false;

    }

    update() {

        //
        // BaseCharacter update
        //

        super.update();

        if (
            !this.active
        ) {
            return;
        }

        //
        // weapon
        //

        this.weaponStateMachine.step();

        this.slashStateMachine.step();

        //
        // shots
        //

        this.shots
            .forEach(

                shot =>
                    shot.update()

            );

        if (
            this.chargingParticles
        ) {

            this.chargingParticles.x =
                this.sprite.x + (this.direction===1?-5:5);

            this.chargingParticles.y =
                this.sprite.y-130;

        }

        if (
            this.chargedParticles
        ) {

            this.chargedParticles.x =
                this.sprite.x + (this.direction===1?-5:5);

            this.chargedParticles.y =
                this.sprite.y-130;

        }

        //
        // debug
        //

        /*this.debugGraphics
            .clear();

        this.debugGraphics
            .fillStyle(
                0x0000ff,
                0.3
            );

        this.debugGraphics
            .fillRect(

                this.hurtbox.x,

                this.hurtbox.y,

                this.hurtbox.width,

                this.hurtbox.height

            );*/

    }

    destroy() {

        //
        // sounds
        //

        this.stopChargingSound();

        this.stopChargedSound();

        //
        // debug
        //

        this.debugGraphics
            ?.destroy();

        //
        // base
        //

        super.destroy();

    }

}