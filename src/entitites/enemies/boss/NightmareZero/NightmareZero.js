import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
NightmareZero
extends BaseBoss {

    constructor(
        scene,
        x,
        offsetX,
        y,
        offsetY,
    ) {

        super(
            scene,
            x + offsetX,
            y + offsetY
        );

        this.filename =
            "nightmare_zero";

        this.lightAnimationName = "night_zero_light";

        this.spawnAnimationName = "night_zero_spawning";

        this.idleAnimationName = "night_zero_idle";

        this.disappearAnimationName = "night_zero_vanishing";

        this.attackAnimationName = "night_zero_slash";

        this.reappearAnimationName = "night_zero_reapearing";

        this.gigaAttackAnimationName = "night_zero_giga_attack";

        this.deathAnimationName = "night_zero_dying";

        this.deathVoice = "night_zero_dying";

        this.name = "Nightmare Zero";

        this.hudColor = "#ff00dd";

        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 40;

        this.gigaAttackDamage = 65;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "nightmare_zero_idle_1",

            x,

            -300

        );

        this.targetSpawnY = y + offsetY;

        //
        // hurtbox
        //

    }

    async spawn() {

        this.isBusy =
            true;

        //
        // começa fora da tela
        //

        this.sprite.y =
            -300;

        //
        // animação light
        //

        this.sprite.play(
            this.lightAnimationName
        );

        //
        // desce
        //

        await this.moveToY(

            this.targetSpawnY

        );

        //
        // aterrissagem
        //

        this.scene.sfx.play("night_zero_laugth",{
            volume: 0.2
        });

        this.scene.sfx.play("night_zero_spawning",{
            volume: 0.2
        });

        await this.playAnimation(

            this.spawnAnimationName

        );

        //
        // idle
        //

        this.sprite.play(

            this.idleAnimationName

        );

        this.createHurtbox(

            60,
            120,

            -30,
            -180

        );

        this.isBusy =
            false;

    }

    async performAttack(
        target
    ) {

        const originalX =
            this.spawnX;

        const originalY =
            this.spawnY;

        //
        // posição perto do alvo
        //

        const targetOffset = +80;

        const attackX =

            target.sprite.x +

            targetOffset;

        const attackY =

            target.sprite.y;

        //
        // olhar pro alvo
        //

        this.direction =
            1;

        this.sprite
            .setFlipX(
                false
            );

        //
        // desaparecer
        //
        this.scene.sfx.play("night_zero_basic_attack",{
            volume: 0.2
        });

        await this.teleportOut();

        //
        // mover instantaneamente
        //

        this.sprite.x =
            attackX;

        this.sprite.y =
            attackY;

        //
        // reaparecer
        //

        await this.teleportIn();

        //
        // ataque
        //

        this.scene.sfx.play("night_zero_saber",{
            volume: 0.2
        });

        await this.attackTarget(
            target
        );

        //
        // desaparecer
        //

        await this.teleportOut();

        //
        // voltar posição
        //

        this.sprite.x =
            originalX;

        this.sprite.y =
            originalY;

        //
        // reaparecer
        //

        await this.teleportIn();

        //
        // idle
        //

        this.sprite.play(
            this.idleAnimationName
        );

    }

    async teleportOut() {

        //
        // animação
        //

        await this.playAnimation(
            this.disappearAnimationName
        );

        //
        // fade
        //

        await new Promise(

            resolve => {

                this.scene
                    .tweens
                    .add({

                        targets:
                            this.sprite,

                        alpha: 0,

                        duration:
                            120,

                        onComplete:
                            resolve

                    });

            }

        );

    }

    async attackTarget(
        target
    ) {

        //
        // animação ataque
        //

        this.scene.sfx.play(
            "night_zero_saber",
            {
                volume: 0.2
            }
        );

        this.sprite.play(
            this.attackAnimationName
        );

        const hitboxWidth =
            120;

        const hitboxHeight =
            120;

        const hitboxOffsetX =
            -140;

        const hitboxOffsetY =
        180;
        
        await this.meleeAttack(target, this.attackDamage, hitboxWidth, hitboxHeight, hitboxOffsetX, hitboxOffsetY, 5);

    }

    async teleportIn() {

        //
        // invisível
        //

        this.sprite.alpha =
            0;

        //
        // fade in
        //

        await new Promise(

            resolve => {

                this.scene
                    .tweens
                    .add({

                        targets:
                            this.sprite,

                        alpha: 1,

                        duration:
                            120,

                        onComplete:
                            resolve

                    });

            }

        );

        //
        // animação reaparecer
        //

        await this.playAnimation(
            this.reappearAnimationName
        );

    }

    async gigaAttack() {

        this.scene.sfx.play(
            "night_zero_giga_attack_voice",
            {
                volume: 0.2
            }
        );

        this.sprite.play(
            this.gigaAttackAnimationName
        );

        let slashSpawned =
            false;

        await new Promise(

            resolve => {

                const onUpdate = (

                    animation,
                    frame

                ) => {

                    if (
                        slashSpawned
                    ) {
                        return;
                    }

                    //
                    // frame do slash
                    //

                    if (
                        frame.index !== 9
                    ) {
                        return;
                    }

                    slashSpawned =
                        true;

                    //
                    // spawn slash
                    //

                    const startX =

                        this.sprite.x -
                        80;

                    const startY =

                        this.sprite.y -
                        180;

                    this.shootGigaAttack(

                        startX,
                        startY

                    );

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

        this.sprite.play(this.idleAnimationName);

    }

    shootGigaAttack(
        startX,
        startY
    ) {


        this.scene.sfx.play(
            "night_zero_saber",
            {
                volume: 0.2
            }
        );

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                -14,
                0,

                this.gigaAttackDamage,
                this,
                "night_zero_giga_attack_slash",
                "night_zero_giga_attack_slash",
                false,
                18,
                260,
                true

            );

        this.shots.push(
            shot
        );

    }

}