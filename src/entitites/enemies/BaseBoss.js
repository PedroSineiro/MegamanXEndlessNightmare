import BaseEnemy
from "./BaseEnemy.js";

import Explosion
from "../effects/Explosion/Explosion.js";

export default class
BaseBoss
extends BaseEnemy {

    constructor(
        scene,
        x,
        y,
        direction = -1
    ) {

        super(

            scene,
            x,
            y,
            direction

        );


        this.isAttackSingle = false;

        this.gigaAttackCooldown = 0;

        this.deathAnimationName = ""

        this.deathVoice = ""

    }

    async takeTurn(
        onComplete
    ) {

        if (
            this.isDead
        ) {

            onComplete?.();
            return;

        }

        this.isBusy =
            true;

        //
        // giga threshold
        //

        const halfHp =

            this.maxHp / 2;

        if (
            this.hp <= halfHp
        ) {

            this.gigaAttackCooldown = Math.max(--this.gigaAttackCooldown,0);

            if(this.gigaAttackCooldown == 0){
                this.gigaAttackCooldown = 3;

                await this.gigaAttack();

                this.isBusy =
                false;

                onComplete?.();

                return;
            }

        }

        const alivePlayers =

            this.scene.players
                .filter(

                    player =>

                        !player.isDead

                );

        await this.beforeTurn();

        if(this.isAttackSingle){
            await this.performAttack();
        } else {
            for (
            const target of
            alivePlayers
            ) {

                if (
                    this.isDead || this.scene.isGameOver
                ) {
                    break;
                }

                await this.performAttack(
                    target
                );

                //
                // pequeno delay
                //

                await this.wait(
                    300
                );

            }
        }

        this.isBusy =
            false;

        await this.afterTurn();

        onComplete?.();

    }

    async beforeTurn() {}

    async afterTurn() {}


    async gigaAttack() {

        console.warn(

            "gigaAttack not implemented"

        );

    }

    async performAttack(
        target
    ) {

        console.warn(

            "performAttack not implemented"

        );

    }

    async moveTowards({

        targetX = null,
        targetY = null,

        speed = 15,

        onUpdate = null

    }) {

        this.hitTargets =
            new Set();

        return new Promise(

            resolve => {

                const event =

                    this.scene.time.addEvent({

                        delay: 16,

                        loop: true,

                        callback: () => {

                            let reachedX =
                                targetX === null;

                            let reachedY =
                                targetY === null;

                            //
                            // eixo X
                            //

                            if (
                                targetX !== null
                            ) {

                                const dx =

                                    targetX -

                                    this.sprite.x;

                                if (

                                    Math.abs(dx)

                                    <= speed

                                ) {

                                    this.sprite.x =
                                        targetX;

                                    reachedX =
                                        true;

                                } else {

                                    this.sprite.x +=

                                        Math.sign(dx)

                                        * speed;

                                }

                            }

                            //
                            // eixo Y
                            //

                            if (
                                targetY !== null
                            ) {

                                const dy =

                                    targetY -

                                    this.sprite.y;

                                if (

                                    Math.abs(dy)

                                    <= speed

                                ) {

                                    this.sprite.y =
                                        targetY;

                                    reachedY =
                                        true;

                                } else {

                                    this.sprite.y +=

                                        Math.sign(dy)

                                        * speed;

                                }

                            }

                            //
                            // callback opcional
                            //

                            onUpdate?.();

                            //
                            // chegou?
                            //

                            if (

                                reachedX &&

                                reachedY

                            ) {

                                event.remove();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    async moveByVelocity({

        velocityX,
        velocityY,

        onUpdate = null,

        stopCondition

    }) {

        this.hitTargets =
            new Set();

        return new Promise(

            resolve => {

                const event =

                    this.scene.time.addEvent({

                        delay: 16,

                        loop: true,

                        callback: () => {

                            this.sprite.x +=
                                velocityX;

                            this.sprite.y +=
                                velocityY;

                            onUpdate?.();

                            if(
                                stopCondition()
                            ) {

                                event.remove();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    checkChargeHit(targets, hitbox, damage) {

         targets.forEach(

            target => {

                if(
                    target.isDead
                ) {
                    return;
                }

                if(

                    this.hitTargets?.has(
                        target
                    )

                ) {
                    return;
                }

                const hit =

                    Phaser
                        .Geom
                        .Intersects
                        .RectangleToRectangle(

                            hitbox,

                            target.hurtbox

                        );

                if(
                    !hit
                ) {
                    return;
                }

                this.hitTargets?.add(
                    target
                );

                target.receiveAttack(
                    damage,
                    this
                );

            }

        );
    }

    setupHitbox(offsetX = -120, offsetY = -120, width = 240, height = 240){
            
        return new Phaser
                .Geom
                .Rectangle(

                    this.sprite.x + offsetX,
                    this.sprite.y + offsetY,

                    width,
                    height

                );
    }

    async performBrake() {

        const speeds = [

            8,
            6,
            4,
            2,
            1

        ];

        const direction =

            this.direction;

        for (

            const speed of speeds

        ) {

            this.sprite.x +=

                speed *
                direction;

            await this.wait(
                40
            );

        }

    }

    async destroy() {

        if (
            this.isDead
        ) {
            return;
        }

        this.scene.bossHud?.update();

        this.isDead =
            true;

        this.active =
            false;

        //
        // hurtbox
        //

        this.hurtbox =
            null;

        //
        // sequência
        //

        this.scene.bgm.stop();

        this.scene.sfx.play(
            "enemy_taking_damage",
            {
                volume: 0.4
            }
        );

        if(this.deathVoice!=="") this.scene.sfx.play(this.deathVoice,{
            volume: 0.2
        })

        if (
            this.deathAnimationName
        ) {

            this.sprite.play(
                this.deathAnimationName
            );

        }

        this.scene.isBossDying = true;

        await this.wait(1500);

        this.scene
            .bossHud
            ?.destroy();

        await this.playDeathSequence();

        await this.wait(1500);

        this.scene.isBossDying = false;

        this.scene.checkWaveCompleted();

    }

    async playDeathSequence() {

        //
        // overlay branco
        //

        const whiteOverlay =

            this.scene
                .add
                .rectangle(

                    0,
                    0,

                    this.scene
                        .scale
                        .width,

                    this.scene
                        .scale
                        .height,

                    0xffffff

                )
                .setOrigin(
                    0
                )
                .setAlpha(
                    0
                )
                .setDepth(
                    999999
                );
        //
        // explosões
        //

        const explosionEvent =

            this.scene.time
                .addEvent({

                    delay: 180,

                    loop: true,

                    callback: () => {

                        if (
                            !this.sprite
                        ) {
                            return;
                        }

                        const offsetX =

                            Phaser
                                .Math
                                .Between(

                                    -90,
                                    90

                                );

                        const offsetY =

                            Phaser
                                .Math
                                .Between(

                                    -220,
                                    -20

                                );

                        new Explosion(

                            this.scene,

                            this.sprite.x +
                            offsetX,

                            this.sprite.y +
                            offsetY

                        );

                    }

                });

        //
        // fade branco
        //

        await new Promise(

            resolve => {

                this.scene
                    .tweens
                    .add({

                        targets:
                            whiteOverlay,

                        alpha:
                            0.8,

                        duration:
                            3800,

                        onComplete:
                            resolve

                    });

            }

        );

        //
        // parar explosões
        //

        explosionEvent.remove();

        this.scene.sfx.play(
            "big_explosion",
            {
                volume: 0.4
            }
        );

        //
        // flash final
        //

        whiteOverlay
            .setAlpha(
                1
            );

        await this.wait(
            250
        );

        //
        // remove sprite
        //

        this.sprite
            ?.destroy();

        //
        // volta tela
        //

        await new Promise(

            resolve => {

                this.scene
                    .tweens
                    .add({

                        targets:
                            whiteOverlay,

                        alpha:
                            0,

                        duration:
                            700,

                        onComplete:
                            resolve

                    });

            }

        );

        whiteOverlay
            .destroy();

        //
        // TODO:
        // vitória
        //

    }

}