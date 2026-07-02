import BaseCharacter
from "../BaseCharacter.js";

import ZeroGigaShot
from "./gigaShot/ZeroGigaShot.js";

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

import LowHpIdleState
from "../../../states/player/LowHPIdleState.js";

import DeathState
from "../../../states/player/DeathState.js";

import VictoryState 
from "../../../states/player/VictoryState.js";

import LeavingState 
from "../../../states/player/LeavingState.js";

import NeutralSlashState 
from "../../../states/player/saber/NeutralSlashState.js";

import SlashAState 
from "../../../states/player/saber/SlashAState.js";

import SlashBState 
from "../../../states/player/saber/SlashBState.js";

import SlashCState 
from "../../../states/player/saber/SlashCState.js";

import SlashEndState 
from "../../../states/player/saber/SlashEndState.js";

import SpecialAttack1State
from "../../../states/player/saber/SpecialAttack1State.js";

import NeutralGigaAttackState 
from "../../../states/player/gigaAttackZero/NeutralGigaAttackState.js";

import StartGigaAttackState 
from "../../../states/player/gigaAttackZero/StartGigaAttackState.js";

import GigaAttackState 
from "../../../states/player/gigaAttackZero/GigaAttackState.js";



export default class Zero
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

        this.filename= "zero"

        this.comboQueued =
            false;

        this.comboWindow =
            false;

        this.slashADamage = stats.slashADamage;

        this.slashBDamage = stats.slashBDamage;

        this.slashCDamage = stats.slashCDamage;

        this.slashPiercingDamage = stats.slashPiercingDamage;

        this.gigaAttackDamage = stats.gigaAttackDamage;

        //
        // sprite
        //

        this.setupSprite(
            "zero_idle_1",
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


        this.saberKey =

            scene.input
                .keyboard
                .addKey(

                    Phaser
                    .Input
                    .Keyboard
                    .KeyCodes
                    .Z

                );

        this.special1Key =

            scene.input
                .keyboard
                .addKey(

                    Phaser
                    .Input
                    .Keyboard
                    .KeyCodes
                    .A

                );


        this.gigaAttackZKey =

            scene.input
                .keyboard
                .addKey(

                    Phaser
                    .Input
                    .Keyboard
                    .KeyCodes
                    .G

                );
        

        this.gigaShots = [];

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

            this.comboStateMachine =
            new StateMachine(

            "neutral",

            {

                neutral:
                    new NeutralSlashState(),

                slashA:
                    new SlashAState(),

                slashB:
                    new SlashBState(),

                slashC:
                    new SlashCState(),

                slashEnd:
                    new SlashEndState(),
                special1:
                    new SpecialAttack1State()

            },

            this

        );

        this.gigaAttackStateMachine =
            new StateMachine(

            "neutral",

            {

                neutral:
                    new NeutralGigaAttackState(),

                start:
                    new StartGigaAttackState(),

                gigaAttack:
                    new GigaAttackState(),

            },

            this

        );

    }

    getAttackInput() {

        return (

            /*this.saberKey
                .isDown ||*/

            this.virtualInput
                .slash

        );

    }

    getPiercingAttackInput() {

        return (

            /*this.special1Key
                .isDown ||*/

            this.virtualInput
                .piercing

        );

    }

    getGigaAttackInput() {

        return (

            /*this.gigaAttackZKey
                .isDown ||*/

            this.virtualInput
                .giga

        );

    }

    playCombo(
        combo
    ) {

        const sequence =
            [];

        if (
            combo.includes(
                "A"
            )
        ) {

            sequence.push(
                "zero_slash_a"
            );

        }

        if (
            combo.includes(
                "B"
            )
        ) {

            sequence.push(
                "zero_slash_b"
            );

        }

        if (
            combo.includes(
                "C"
            )
        ) {

            sequence.push(
                "zero_slash_c"
            );

        }

        this.playAnimationSequence(
            sequence
        );

    }

    gigaAttack() {

        const screenWidth =
            this.scene.scale.width;

        const screenHeight =
            this.scene.scale.height;

        //
        // quantidade de tiros
        //

        const totalShots =
            8;

        //
        // margem lateral
        //

        const margin =
            100;

        //
        // espaço entre tiros
        //

        const spacing =

            (
                screenWidth -
                margin * 2
            ) /

            (
                totalShots - 1
            );

        //
        // spawn escalonado
        //

        for (
            let i = 0;
            i < totalShots;
            i++
        ) {

            this.scene.time.delayedCall(

                i * 120,

                () => {

                    const x =

                        margin +

                        (
                            spacing * i
                        );

                    const y =
                        screenHeight + 80;

                    const shot =

                        new ZeroGigaShot(

                            this.scene,

                            x,
                            y,

                            this.gigaAttackDamage,

                        );

                    //
                    // remover ao sair do topo
                    //

                    const originalUpdate =
                        shot.update
                            .bind(shot);

                    shot.update =
                        () => {

                            originalUpdate();

                            if (
                                shot.sprite.y <
                                -100
                            ) {

                                shot.destroy();

                            }

                        };

                    this.gigaShots.push(
                        shot
                    );

                }

            );

        }

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

        this.comboStateMachine
        .step();

        if (
            this.attackHitbox
            ?.active
        ) {

            this.attackHitbox
                .update();

        }
        
        //
        // debug
        //
        /*
        this.debugGraphics
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

        this.gigaShots =

        this.gigaShots
            .filter(

                shot => {

                    shot.update();

                    return shot.active;

                }

            );
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