import SoundManager from "../../systems/SoundManager.js";
import Explosion from "../effects/Explosion/Explosion.js";

export default class BaseEnemy {

    constructor(
        scene,
        x,
        y,
        direction = -1
    ) {

        this.scene =
            scene;

        this.active =
            true;

        this.isDead =
            false;

        this.spawnX = x;
        
        this.spawnY = y;

        this.direction = direction

        this.explosionOffsetX = -30;

        this.explosionOffsetY = -140;

        this.filename = null

        this.isInvulnerable =
            false;

        this.shots =
            [];

        this.startAttackAnimationName = "";

        this.attackAnimationName = "";

        this.idleAnimationName = "";

        this.dashAnimationName = "";

        this.SoundManager = SoundManager;

    }

    setupSprite(
        texture,
        x,
        y
    ) {

        this.sprite =

            this.scene
                .add
                .sprite(
                    x,
                    y,
                    texture
                );

        this.sprite
            .setScale(2);

        this.sprite
            .setOrigin(
                0.5,
                1
            );

        this.setDirection(this.direction)

    }

    setDirection(
        direction
    ) {

        this.direction =
            direction;

        this.sprite
            .setFlipX(

                direction === 1

            );

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

    async meleeAttack(target, damage, hitboxWidth, hitboxHeight, hitboxOffsetX, hitboxOffsetY, impactFrame = null){
        let alreadyHit =
            false;

        await new Promise(

            resolve => {

                const onUpdate = (

                    animation,
                    frame

                ) => {

                    if (
                        alreadyHit
                    ) {
                        return;
                    }

                    //
                    // frame impacto
                    //

                    if (
                        impactFrame != null && frame.index !== impactFrame
                    ) {
                        return;
                    }

                    alreadyHit =
                        true;

                    const attackHitbox =

                        new Phaser
                            .Geom
                            .Rectangle(

                                this.direction === 1

                                ? this.sprite.x +
                                hitboxOffsetX

                                : this.sprite.x -
                                hitboxWidth -
                                hitboxOffsetX,

                                this.sprite.y -
                                hitboxOffsetY,

                                hitboxWidth,

                                hitboxHeight

                            );

                    //
                    // DEBUG
                    //

                    /*const g =

                        this.scene
                            .add
                            .graphics();

                    g.setDepth(
                        99999
                    );

                    g.lineStyle(
                        2,
                        0xff0000,
                        1
                    );

                    g.strokeRectShape(
                        attackHitbox
                    );

                    this.scene.time
                        .delayedCall(

                            100,

                            () => {

                                g.destroy();

                            }

                        );*/

                    //
                    // colisão
                    //

                    const hit =

                        Phaser
                            .Geom
                            .Intersects
                            .RectangleToRectangle(

                                attackHitbox,

                                target.hurtbox

                            );

                    if (
                        !hit
                    ) {
                        return;
                    }

                    //
                    // evasion
                    //

                    target.receiveAttack(damage, this);

                };

                this.sprite.on(

                    "animationupdate",

                    onUpdate

                );

                this.sprite.once(

                    Phaser
                        .Animations
                        .Events
                        .ANIMATION_COMPLETE,

                    () => {

                        this.sprite.off(
                            "animationupdate",
                            onUpdate
                        );

                        resolve();

                    }

                );

            }

        );
    }

    updateHurtbox() {

        if (
            !this.hurtbox
        ) {
            return;
        }

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
        // escolhe alvo
        //

        const target =

            this.chooseTarget();

        if (
            !target
        ) {

            this.isBusy =
                false;

            onComplete?.();

            return;

        }

        //
        // guarda posição
        //

        await this.performAttack(
            target
        );

        this.isBusy =
            false;

        onComplete?.();

    }

    chooseTarget() {

        const alivePlayers =

            this.scene.players
                .filter(

                    p => !p.isDead

                );

        if (
            alivePlayers
                .length === 0
        ) {

            return null;

        }

        const index =

            Phaser.Math
                .Between(

                    0,

                    alivePlayers
                        .length - 1

                );

        return alivePlayers[
            index
        ];

    }

    tryHitTarget(target){
        const roll =
            Math.random();

        const hit =

            roll >

            target.evasion;

        return hit;
    }

    moveTo(
        targetX,
        targetY,
        speed = 6
    ) {

        return new Promise(

            resolve => {

                const event =

                    this.scene
                        .time
                        .addEvent({

                            delay: 16,

                            loop: true,

                            callback: () => {

                                const dx =
                                    targetX - this.sprite.x;

                                const dy =
                                    targetY - this.sprite.y;

                                const distance =

                                    Math.sqrt(

                                        dx * dx +

                                        dy * dy

                                    );

                                if (

                                    distance <= speed

                                ) {

                                    this.sprite.x =
                                        targetX;

                                    this.sprite.y =
                                        targetY;

                                    event.remove();

                                    resolve();

                                    return;

                                }

                                const nx =
                                    dx / distance;

                                const ny =
                                    dy / distance;

                                this.sprite.x +=
                                    nx * speed;

                                this.sprite.y +=
                                    ny * speed;

                            }

                        });

            }

        );

    }

    moveToX(
        targetX,
        speed = 30
    ) {

        return new Promise(

            resolve => {

                const event =

                    this.scene
                        .time
                        .addEvent({

                    delay:
                        16,

                    loop:
                        true,

                    callback: () => {

                        const dx =

                            targetX -

                            this.sprite.x;

                        if (

                            Math.abs(dx)

                            <= speed

                        ) {

                            this.sprite.x =
                                targetX;

                            event.remove();

                            resolve();

                            return;

                        }

                        this.sprite.x +=

                            Math.sign(dx)
                            * speed;

                    }

                });

            }

        );

    }

    moveToY(
        targetY,
        speed = 30
    ) {

        return new Promise(

            resolve => {

                const event =

                    this.scene
                        .time
                        .addEvent({

                    delay:
                        16,

                    loop:
                        true,

                    callback: () => {

                        const dy =

                            targetY -

                            this.sprite.y;

                        if (

                            Math.abs(dy)

                            <= speed

                        ) {

                            this.sprite.y =
                                targetY;

                            event.remove();

                            resolve();

                            return;

                        }

                        this.sprite.y +=

                            Math.sign(dy)
                            * speed;

                    }

                });

            }

        );

    }

    async performAttack(
        target
    ) {

        console.warn(
            "performAttack not implemented"
        );

    }

    takeDamage(
        damage
    ) {

        //
        // iFrames
        //

        if (

            this.isInvulnerable ||

            this.isDead

        ) {
            return;
        }

        //
        // dano
        //

        this.hp -=
            damage;

        this.hp =
            Math.max(
                0,
                this.hp
            );

        //
        // morreu
        //

        if (
            this.hp === 0
        ) {
            this.destroy();

            return;

        }

        //
        // som
        //

        this.scene.sfx.play(
            "enemy_taking_damage",
            {
                volume: 0.4
            }
        );

        //
        // iFrames
        //

        this.isInvulnerable =
            true;

        //
        // flash branco
        //

        let flashCount =
            0;

        this.scene.time
            .addEvent({

                delay: 50,

                repeat: 5,

                callback: () => {

                    if (

                        !this.sprite ||

                        this.isDead

                    ) {
                        return;
                    }

                    if (
                        flashCount % 2 === 0
                    ) {

                        this.sprite
                            .setTint(
                                0xffffff
                            )
                            .setTintMode(
                                Phaser
                                    .TintModes
                                    .FILL
                            );

                    }

                    else {

                        this.sprite
                            .clearTint();

                    }

                    flashCount++;

                }

            });

        //
        // fim iFrames
        //

        this.scene.time
            .delayedCall(

                350,

                () => {

                    this.isInvulnerable =
                        false;

                    this.sprite
                        ?.clearTint();

                }

            );

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

    update() {

        if (
            this.isDead ||
            !this.active
        ) {
            return;
        }

        //
        // hurtbox
        //

        this.updateHurtbox();

        //
        // depth 2.5D
        //

        this.sprite
            .setDepth(
                this.sprite.y
            );

        //
        // tiros
        //

        this.shots =

            this.shots
                .filter(
                    shot =>
                    shot.active
                );

        this.shots
            .forEach(

                shot => {

                    shot.update();

                }

            );

    }

    destroy() {

        if (
            this.isDead
        ) {
            return;
        }

        this.active =
            false;

        this.isDead =
            true;

        //
        // explosão
        //

        new Explosion(

            this.scene,

            this.sprite.x +
            this.explosionOffsetX,

            this.sprite.y +
            this.explosionOffsetY

        );

        //
        // hurtbox
        //

        this.hurtbox =
            null;

        //
        // sprite
        //

        this.sprite
            ?.destroy();

        this.scene
        .checkWaveCompleted();

    }

}