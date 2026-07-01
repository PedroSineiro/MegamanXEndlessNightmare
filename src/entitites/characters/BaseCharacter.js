import { ARMOR_STATS } from "../../constants/ArmorStats.js";

export default class BaseCharacter {

    constructor(scene, x, y, stats) {

        this.isSpawned = false;

        this.spawnX = x;

        this.isPlayer = true;

        this.isDead = false;

        this.active = true;

        this.isBusy = false;

        this.isInvulnerable = false;

        this.currentArmor = stats.armor;

        this.hasGigaAttack = stats.hasGigaAttack;

        this.gigaAttackMustRecharge = stats.gigaAttackMustRecharge;

        this.gigaAttackCooldown = stats.gigaAttackCooldown;

        this.gigaAttackRechargeTurns = this.gigaAttackCooldown;

        this.scene = scene;

        this.speed = 4;

        this.direction = 1;

        this.maxHp = stats.maxHp;

        this.hp = this.maxHp;

        this.hasEnergyTank = stats.hasEnergyTank;

        this.hasUsedEnergyTank = false;

        this.maxActions = stats.actions;

        this.turnActions = this.maxActions;

        this.defenseTurnActions = 0;

        this.piercingSlashActions = stats.piercingSlashActions?? 0;

        this.hasQuickCharge = stats.hasQuickCharge ?? false;

        this.mediumShotChargingTime = this.hasQuickCharge ? 600: 1200;

        this.chargedShotChargingTime = this.hasQuickCharge ? 1000: 2000;

        this.chargingMediumShotActions = stats.chargingMediumShotActions ?? 0;

        this.chargingChargedShotActions = stats.chargingChargedShotActions?? 0;

        this.baseEvasion = stats.evasion;

        this.baseDamageReduction = stats.reduction;

        this.evasion =
            this.baseEvasion;

        this.damageReduction =
            this.baseDamageReduction;

        this.cursors =
            scene.input.keyboard.createCursorKeys();

        this.filename = null

        this.speed = 4;

        this.virtualInput = {

            left: false,
            right: false,
            up: false,
            down: false,
            buster: false,
            slash: false,
            piercing: false,
            giga: false,

        };

        this.isBusy = false;
    }

    setupSprite(
        texture,
        x,
        y
    ) {

        this.sprite =
            this.scene
                .add
                .sprite(x, y, texture);

        this.sprite.setScale(2);

        this.sprite.setOrigin(0.5, 1);

    }

    getInput() {

        return {

            left:

                this.cursors.left.isDown ||

                this.virtualInput.left,

            right:

                this.cursors.right.isDown ||

                this.virtualInput.right,

            up:

                this.cursors.up.isDown ||

                this.virtualInput.up,

            down:

                this.cursors.down.isDown ||

                this.virtualInput.down

        };

    }
        createHurtbox(
        width,
        height,
        offsetX,
        offsetY
    ) {

        this.hurtbox =

            new Phaser
                .Geom
                .Rectangle(

                    this.sprite.x +
                    offsetX,

                    this.sprite.y +
                    offsetY,

                    width,

                    height

                );

        this.hurtboxConfig = {

            width,
            height,
            offsetX,
            offsetY

        };

    }

    updateHurtbox() {

        this.hurtbox.x =

            this.sprite.x +

            this.hurtboxConfig
                .offsetX;

        this.hurtbox.y =

            this.sprite.y +

            this.hurtboxConfig
                .offsetY;

    }

    startTurn() {

        this.gigaAttackRechargeTurns = Math.min(++this.gigaAttackRechargeTurns, this.gigaAttackCooldown);

        this.actions =
            this.maxActions;

        this.evasion =
            this.baseEvasion;

        this.damageReduction =
            this.baseDamageReduction;

    }

    defend(
        amount = 1
    ) {

        if (
            this.turnActions <
            amount
        ) {
            return false;
        }

        this.turnActions -=
            amount;

        this.defenseTurnActions += amount;

        const evasionBonus =

            0.10 *
            amount;

        const reductionBonus =

            0.05 *
            amount;

        this.evasion +=
            evasionBonus;

        this.evasion = this.evasion > 1? 1: this.evasion;

        this.damageReduction +=
            reductionBonus;

        this.damageReduction = this.damageReduction > 1? 1: this.damageReduction;

        return true;

    }

    resetDefense() {

        this.evasion =
            this.baseEvasion;

        this.damageReduction =
            this.baseDamageReduction;

    }


    isLowHp() {

        return (
            this.hp <=
            this.maxHp / 3
        );

    }

    move() {

        const c =
            this.cursors;

        let moving =
            false;

        if (
            c.left.isDown
        ) {

            this.direction =
                -1;

            this.sprite
                .setFlipX(
                    true
                );

            this.sprite.x -=
                this.speed;

            moving = true;
        }

        else if (
            c.right
                .isDown
        ) {

            this.direction =
                1;

            this.sprite
                .setFlipX(
                    false
                );

            this.sprite.x +=
                this.speed;

            moving = true;
        }

        if (
            c.up.isDown
        ) {

            this.sprite.y -=
                this.speed;

            moving = true;
        }

        else if (
            c.down.isDown
        ) {

            this.sprite.y +=
                this.speed;

            moving = true;
        }

        return moving;

    }

    receiveAttack(
        damage,
        attacker
    ) {

        if (

            attacker.tryHitTarget(
                this
            )

        ) {

            this.takeDamage(
                damage
            );

            return true;

        }

        this.showMissText();

        return false;

    }

    showMissText() {

        const text =

            this.scene
                .add
                .text(

                    this.sprite.x,

                    this.sprite.y - 180,

                    "MISS",

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "16px",

                        fontStyle:
                            "bold",

                        color:
                            "#ffffff",

                        stroke:
                            "#000000",

                        strokeThickness:
                            5

                    }

                )

                .setOrigin(
                    0.5
                )

                .setDepth(
                    99999
                );

        //
        // animação
        //

        this.scene
            .tweens
            .add({

                targets:
                    text,

                y:
                    text.y - 40,

                alpha:
                    0,

                duration:
                    700,

                ease:
                    "Quad.easeOut",

                onComplete:
                    () => {

                        text.destroy();

                    }

            });

    }

    async spawnAnimation() {

        return new Promise(

            resolve => {

                const event =

                    this.scene
                        .time
                        .addEvent({

                            delay: 16,

                            loop: true,

                            callback: () => {

                                if (
                                    this.isSpawned
                                ) {

                                    event.remove();

                                    resolve();

                                }

                            }

                        });

            }

        );

    }


    playAnimationSequence(
        animations
    ) {

        const next =
            index => {

            if (
                index >=
                animations.length
            ) {
                return;
            }

            this.sprite.play(
                animations[
                    index
                ]
            );

            this.sprite.once(

                Phaser
                    .Animations
                    .Events
                    .ANIMATION_COMPLETE,

                () => {

                    next(
                        index + 1
                    );

                }

            );

        };

        next(0);

    }

    playAnimation(
        animationKey
    ) {

        return new Promise(

            resolve => {

                this.sprite.play(
                    animationKey,
                    true
                );

                this.sprite.once(

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

    wait(ms) {

        return new Promise(

            resolve => {

                this.scene.time
                    .delayedCall(

                        ms,

                        resolve

                    );

            }

        );

    }

    takeDamage(damage) {

        const finalDamage =

            Math.ceil(

                damage *

                (

                    1 -

                    this.damageReduction

                )

            );

        if (
            this.isInvulnerable ||
            this.isDead
        ) {
            return;
        }

        this.hp -= finalDamage;

        if (
            this.hp < 0
        ) {

            this.hp = 0;

        }

        //
        // morreu
        //

        if (
            this.hp == 0
        ) {

            this.stateMachine
                .transition(
                    "death"
                );

            this.scene.gameOver();

            return;
        }

        //
        // dano normal
        //

        this.isInvulnerable =
            true;

        this.stateMachine
            .transition(
                "takingDamage"
            );

    }

    updateMovementAnimation() {

        const moving =

            this.cursors
                .left
                .isDown ||

            this.cursors
                .right
                .isDown ||

            this.cursors
                .up
                .isDown ||

            this.cursors
                .down
                .isDown;

        if (moving) {

            this.sprite.play(
                `${this.currentArmor}_walking`,
                true
            );

        }

        else {

            if (
                this.isLowHp()
            ) {

                this.sprite.play(
                    `${this.currentArmor}_low_hp`,
                    true
                );

            }

            else {

                this.sprite.play(
                    `${this.currentArmor}_idle`,
                    true
                );

            }

        }

    }

    update() {

        if (
            !this.active
        ) {
            return;
        }

        this.sprite.setDepth(
            this.sprite.y
        );

        this.updateHurtbox();

        this.stateMachine
            .step();

        this.gigaAttackStateMachine.step();

    }

    destroy() {

        if (!this.active) {
            return;
        }

        this.active = false;

        this.isDead = true;

        this.hurtbox =
            null;

        this.sprite
            ?.destroy();

    }
}