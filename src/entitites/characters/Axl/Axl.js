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

import LowHpIdleState
from "../../../states/player/LowHPIdleState.js";

import AxlShot from "./shots/AxlShot.js";

export default class Axl
extends BaseCharacter {

    constructor(
        scene,
        x,
        targetY,
        stats
    ) {

        super(
            scene,
            x,
            targetY,
            stats
        );

        this.filename= "axl";

        this.shotDamage = stats.shotDamage;

        this.isShotPiercing = stats.isShotPiercing;

        this.bazookaDamage = stats.bazookaDamage;

        this.bazookaActions = stats.bazookaActions;

        this.shockDamage = stats.shockDamage;

        this.gigaAttackDamage = stats.gigaAttackDamage;

        this.wingSound =

            scene.sound.add(
                "blaze_heatnix_wing_beat"
            );

        this.flameSound =

            scene.sound.add(
                "blaze_heatnix_flame"
            );

        //
        // sprite
        //

        this.setupSprite(
            "x_idle_1",
            x,
            -100
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

        this.shots = [];

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

        this.gigaShots = [];

    }

    async gunShot(amount = 1) {
        for(let i = 0;i<amount;i++){
            await this.playAnimation(
                `${this.currentArmor}_start_shooting`
            );

            this.sprite.play(`${this.currentArmor}_shooting`);

            this.scene.sfx.play("axl_shot");

            this.shoot(0);

            await this.wait(300);
        }

        this.updateMovementAnimation();
    }

    async bazookaShot() {
        await this.playAnimation(
            `${this.currentArmor}_start_shooting_bazooka`
        );

        this.sprite.play(`${this.currentArmor}_shooting_bazooka`);

        this.scene.sfx.play("axl_bazooka_shot");

        this.scene.sfx.play("axl_bazooka_voice");

        this.shoot(1);

        await this.wait(600);

        await this.playAnimation(`${this.currentArmor}_end_shooting_bazooka`);

        this.updateMovementAnimation();
    }

    async shockShot() {
        await this.playAnimation(
            `${this.currentArmor}_start_shooting_shock`
        );

        this.sprite.play(`${this.currentArmor}_shooting_shock`);

        this.scene.sfx.play("axl_shock_gun");

        this.shoot(2);

        await this.wait(600);

        await this.playAnimation(`${this.currentArmor}_end_shooting_shock`);

        this.updateMovementAnimation();
    }


    shoot(type) {

        let shotType =
            "shot";

        let damage = this.shotDamage;

        let isShotPiercing = this.isShotPiercing;

        if (
            type === 1
        ) {

            isShotPiercing = false;

            shotType =
                "bazooka";

            damage = this.bazookaDamage;

        } else if(
            type === 2
        ) {

            isShotPiercing = false;

            shotType =
                "shock";

            isShotPiercing = true;

            damage = this.shockDamage;
        }

        const offsetX =

            this.direction === 1
            ? (shotType!=="shock" ?40: 100)
            : (shotType!=="shock" ?-40: -100);

        const offsetY = (shotType!=="shock"?-142:-150);

        const shot = new AxlShot(this.scene,

                this,

                this.sprite.x +
                offsetX,

                this.sprite.y +
                offsetY,

                this.direction,

                shotType,
                
                damage, 
                
                isShotPiercing);

        this.shots.push(shot);
    }

    async transformGigaAttack() {
        this.scene.sfx.play("axl_transform");

        await this.playAnimation(`${this.currentArmor}_transform`);

        this.sprite.play(`${this.currentArmor}_transform_idle`);

        await this.wait(1000);

        this.wingSound.play({

            volume: 0.15,
            loop: true

        });
    }

    async gigaAttack() {
        this.wingSound.stop();

        this.sprite.x = -400;

        this.direction =
        1;

        this.sprite
            .setFlipX(
                false
            );

        this.sprite.y =
            520;

        this.flameSound.play({

            volume: 0.15,
            loop: true

        });

        this.scene.sfx.play("blaze_heatnix_giga_attack");

        this.sprite.play(
            `${this.currentArmor}_transform_giga_attack`
        );

        const totalDistance = this.scene.scale.width + 800;

        await this.performDash(this.gigaAttackDamage, totalDistance,12,200,240);

        this.sprite.play(`${this.currentArmor}_transform_idle`);

        this.flameSound.stop();

        await this.wait(1000);
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
        // shots
        //

        this.shots
            .forEach(

                shot =>
                    shot.update()

            );

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