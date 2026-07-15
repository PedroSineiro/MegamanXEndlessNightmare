import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";

export default class
SlashBeast
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
            "slash_beast";

        this.idleAnimationName = "slash_beast_idle";

        this.runningAnimationName = "slash_beast_running";

        this.startIdleScreamAnimationName = "slash_beast_start_idle_scream";

        this.idleScreamAnimationName = "slash_beast_idle_scream";

        this.startAttackAnimationName = "slash_beast_start_attack";

        this.attackAnimationName = "slash_beast_attack";

        this.stopAttackAnimationName = "slash_beast_stop_attack";

        this.startGigaAttackAnimationName = "slash_beast_start_giga_attack";

        this.gigaAttackAnimationName = "slash_beast_giga_attack";

        this.deathAnimationName = "slash_beast_dying";

        this.attackScream = "slash_beast_attack_scream";

        this.gigaAttackScream = "slash_beast_giga_attack_scream";

        this.stopAttackSound = "charge_break";

        this.name = "Slash Beast";

        this.hudColor = "#e48416";


        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 42;

        this.gigaAttackDamage = 22;

        this.originalX = x;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "slash_beast_idle_1",

            1200,

            this.originalY

        );

        this.targetSpawnX = x + offsetX;

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

        this.sprite.x = 1200;

        this.sprite.y =
            this.targetSpawnY;

        //
        // animação light
        //

        this.sprite.play(
            this.runningAnimationName
        );

        //
        // desce
        //

        await this.moveTo(
            this.targetSpawnX,
            this.targetSpawnY,
            10
        );

        await this.playAnimation(this.startIdleScreamAnimationName);

        this.sprite.play(this.idleScreamAnimationName);

        this.scene.sfx.play(this.gigaAttackScream, {volume: 0.15});

        await this.wait(1000);

        this.sprite.play(this.idleAnimationName);



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

        this.sprite.play(
            this.runningAnimationName
        );

        await this.moveToY(
            target.sprite.y,
            15
        );

        await this.playAnimation(
            this.startAttackAnimationName
        );

        this.sprite.play(
            this.attackAnimationName
        );

        this.scene.sfx.play(
            this.attackScream,
            {
                volume: 0.15
            }
        );

        const targetX =

            target.filename === "x"

            ? 100

            : 700;

        await this.moveTowards(
            {
                targetX,

                speed: 15,

                onUpdate: () => {

                    const hitbox = this.setupHitbox();

                    this.checkChargeHit([target], hitbox,this.attackDamage);
                }
                
            }
        );

        this.scene.sfx.play(this.stopAttackSound, {volume: 0.15});

        this.sprite.play(this.stopAttackAnimationName);

        await this.performBrake();

        this.setDirection(

            target.filename === "x"

            ? 1

            : -1

        );

    }

    async afterTurn(){

        this.sprite.play(this.runningAnimationName);

        await this.moveTo(
            this.targetSpawnX,
            this.targetSpawnY,
            10);

        this.sprite.play(this.idleAnimationName);
    }


    async gigaAttack() {

        for (let i = 1; i <= 3; i++) {

            if(this.scene.isGameOver) return;

            await this.playAnimation(this.startGigaAttackAnimationName);

            this.scene.sfx.play(this.gigaAttackScream, {volume: 0.15});

            const startX =

            this.sprite.x -
            80;

            const startY =

            this.sprite.y -
            180;

            this.slash(startX, startY);

            await this.playAnimation(this.gigaAttackAnimationName);

            await this.wait(500);

        }

        this.sprite.play(this.idleAnimationName);


    }

    slash(startX, startY){

        this.scene.players.forEach(
            (player) => {

                let targetX =

                    player.hurtbox.x +

                    player.hurtbox.width
                    / 2;

                let targetY =

                    player.hurtbox.y +

                    player.hurtbox.height
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
                    12;

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

                    this.gigaAttackDamage,
                    this,
                    "slash_beast_slash_1",
                    "slash_beast_slash",
                    true,
                    70,
                    70,
                    false

                );

                this.shots.push(
                    shot
                );
            }

        )
    }

}