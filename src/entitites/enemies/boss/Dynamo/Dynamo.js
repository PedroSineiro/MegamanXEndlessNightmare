import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
Dynamo
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
            "dynamo";

        this.lightAnimationName = "dynamo_light";

        this.spawnAnimationName = "dynamo_spawning";

        this.idleAnimationName = "dynamo_idle";

        this.startAttackAnimationName = "dynamo_start_attack";

        this.attackAnimationName = "dynamo_attack";

        this.startJumpAnimatioName = "dynamo_start_jump";

        this.jumpAnimatioName = "dynamo_jump";

        this.startGigaAttackAnimatioName = "dynamo_start_giga_attack";

        this.startGigaAttackAnimatioNameLoop = "dynamo_start_giga_attack_loop";

        this.gigaAttackAnimatioName = "dynamo_giga_attack";

        this.startGigaAttackSlashAnimatioName = "dynamo_start_giga_attack_slash";

        this.gigaAttackSlashAnimatioName = "dynamo_giga_attack_slash";

        this.deathAnimationName = "dynamo_dying";

        this.attackSound = "dynamo_boomerang";

        this.gigaAttackSound = "dynamo_giga_attack";

        this.name = "Dynamo";

        this.hudColor = "#3a24ff";

        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 40;

        this.gigaAttackDamage = 68;

        this.originalY = y;

        //
        // sprite
        //

        this.targetSpawnY = y + offsetY;

        this.setupSprite(

            "dynamo_idle_1",

            x,

            -300

        );

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

            this.targetSpawnY,
            20

        );

        //
        // aterrissagem
        //

        this.scene.sfx.play("dynamo_arriving",{
            volume: 0.15
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

    async beforeTurn(){

        await this.playAnimation(this.startAttackAnimationName);

        this.sprite.play(this.attackAnimationName);
    }

    async performAttack(
        target
    ) {
        this.scene.sfx.play(this.attackSound);

        this.sprite.play(this.attackAnimationName);

        const startX =

        this.sprite.x -
        80;

        const startY =

        this.sprite.y -
        180;

        this.boomerang(target, startX, startY);

        await this.wait(1000);

    }

    async afterTurn(){

        await this.playAnimation(this.startAttackAnimationName);

        this.sprite.play(this.idleAnimationName);
    }


    boomerang(target, startX, startY){
    
        let targetX =

            target.hurtbox.x +

            target.hurtbox.width
            / 2;

        let targetY =

            target.hurtbox.y +

            target.hurtbox.height
            / 2;

        //
        // direção do tiro
        //

        const angle =

            Phaser.Math
                .Angle
                .Between(

                    startX,
                    startY,

                    targetX,
                    targetY

                );

        const speed =
            8;

        const velocityX =

            Math.cos(angle) *
            speed;

        const velocityY =

            Math.sin(angle) *
            speed;
        
        const shot =

        new BaseShot(

            this.scene,

            startX,
            startY,

            velocityX,
            velocityY,

            this.attackDamage,
            this,
            "dynamo_boomerang_1",
            "dynamo_boomerang",
            false,
            70,
            70,
            false,
            false

        );

        this.shots.push(
            shot
        );
    }

    async jumpTo({

        targetX,
        targetY,

        jumpHeight = 250,

        duration = 800

    }) {

        return new Promise(resolve => {

            const startX = this.sprite.x;
            const startY = this.sprite.y;

            const startTime = this.scene.time.now;

            const event = this.scene.time.addEvent({

                delay: 16,
                loop: true,

                callback: () => {

                    const elapsed =

                        this.scene.time.now -
                        startTime;

                    let t =

                        elapsed /
                        duration;

                    t = Phaser.Math.Clamp(
                        t,
                        0,
                        1
                    );

                    //
                    // Movimento horizontal
                    //

                    this.sprite.x =

                        Phaser.Math.Linear(

                            startX,
                            targetX,
                            t

                        );

                    //
                    // Movimento vertical
                    //

                    const baseY =

                        Phaser.Math.Linear(

                            startY,
                            targetY,
                            t

                        );

                    //
                    // Parábola
                    // pico em t = 0.5
                    //

                    const arc =

                        4 *
                        jumpHeight *
                        t *
                        (1 - t);

                    this.sprite.y =

                        baseY - arc;

                    if (t >= 1) {

                        event.remove();

                        resolve();

                    }

                }

            });

        });

    }


    async playAnimationSequence(
        animations,
        loopLast = false
    ) {

        for (

            let i = 0;

            i < animations.length;

            i++

        ) {

            const animation =

                animations[i];

            const isLast =

                i ===
                animations.length - 1;

            if (

                loopLast &&

                isLast

            ) {

                this.sprite.play(
                    animation,
                    true
                );

                return;
            }

            this.sprite.play(
                animation
            );

            await new Promise(

                resolve => {

                    this.sprite.play(
                        animation
                    );

                    this.sprite.once(

                        Phaser.Animations
                            .Events
                            .ANIMATION_COMPLETE,

                        resolve

                    );

                }

            );

        }

    }

    async gigaAttack() {

        const targetX = 450;

        const targetY = 550;

        await this.playAnimation(this.startJumpAnimatioName);

        await Promise.all([

        this.jumpTo({

            targetX,
            targetY

        }),

        this.playAnimationSequence(

                [

                    this.jumpAnimatioName,

                    this.startGigaAttackAnimatioName,

                    this.startGigaAttackAnimatioNameLoop

                ],

                true

            )

        ]);

        await this.playAnimation(this.startGigaAttackSlashAnimatioName);

        this.scene.sfx.play(
            "dynamo_giga_attack",
            {
                volume: 0.15
            }
        );

        const hitboxWidth =
            220;

        const hitboxHeight =
            200;

        const hitboxOffsetX =
            40;

        const hitboxOffsetY =
        200;

        this.sprite.play(this.gigaAttackAnimatioName);

        await this.meleeAttack(this.scene.players, this.attackDamage, hitboxWidth, hitboxHeight, hitboxOffsetX, hitboxOffsetY);

        this.sprite.play(this.jumpAnimatioName);

        await this.jumpTo({
            targetX: this.spawnX,
            targetY: this.targetSpawnY
        });

        await this.playAnimation(this.startJumpAnimatioName);

        this.sprite.play(this.idleAnimationName);

    }

    shootGigaAttack(
        startX,
        startY
    ) {


        

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                -14,
                0,

                this.gigaAttackDamage,
                this,
                "dynamo_giga_attack_slash",
                "dynamo_giga_attack_slash",
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