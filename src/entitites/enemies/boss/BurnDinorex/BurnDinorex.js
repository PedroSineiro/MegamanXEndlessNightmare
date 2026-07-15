import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
BurnDinorex
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
            "burn_dinorex";

        this.fallingAnimationName = "burn_dinorex_arriving";

        this.landingAnimationName = "burn_dinorex_landing";

        this.idleAnimationName = "burn_dinorex_idle";

        this.startAttackAnimationName = "burn_dinorex_start_attack";

        this.attackAnimationName = "burn_dinorex_attack";

        this.startJumpingAnimationName = "burn_dinorex_start_jumping";

        this.jumpingAnimationName = "burn_dinorex_jumping";

        this.gigaAttackAnimationName = "burn_dinorex_giga_attack";

        this.deathAnimationName = "burn_dinorex_dying";


        this.name = "Burn Dinorex";

        this.hudColor = "#c70404";

        this.flameSound =

            scene.sound.add(
                "burn_dinorex_flame"
            );

        this.maxHp = 840;

        this.hp = this.maxHp;

        this.attackDamage = 35;

        this.gigaAttackDamage = 76;

        this.originalX = x;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "burn_dinorex_falling_1",

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

        this.sprite.x = this.originalX;

        this.sprite.y =
            -300;

        //
        // animação light
        //

        this.sprite.play(
            this.fallingAnimationName
        );

        //
        // desce
        //

        await this.moveToY(

            this.targetSpawnY,
            15

        );

        //
        // aterrissagem
        //

        this.scene.sfx.play("burn_dinorex_landing",{
            volume: 0.2
        });

        await this.playAnimation(

            this.landingAnimationName

        );

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


        await this.playAnimation(
            this.startAttackAnimationName
        );

        this.scene.sfx.play("burn_dinorex_flame",{volume: 0.15})

        this.sprite.play(
            this.attackAnimationName,
            true
        );

        
        //
        // ponto do disparo
        //

        const startX =

            this.sprite.x +

            (
                this.direction === 1
                ? 50
                : -50
            );

        const startY =
            this.sprite.y - 170;

        //
        // centro da hurtbox
        //

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

        //
        // cria tiro
        //

        this.fireball(startX, startY, velocityX, velocityY);

        await this.wait(800);

        this.sprite.play(this.idleAnimationName);

        await this.wait(
            500
        );

    }


    async gigaAttack() {

        await this.playAnimation(
            this.startJumpingAnimationName
        );

        this.sprite.play(
            this.jumpingAnimationName
        );

        await this.moveToY(
            -300,
            15
        );

        //
        // posiciona fora da tela
        //

        this.sprite.x =
            this.scene.scale.width + 400;

        this.sprite.y =
            this.targetSpawnY;

        this.flameSound.play({

            volume: 0.15,
            loop: true

        });

        this.sprite.play(
            this.gigaAttackAnimationName
        );

        //
        // atravessa a tela
        //

        const targetX = -400;

        await this.moveTowards(
            {
                targetX,

                speed: 22,

                onUpdate: () => {

                    const hitbox = this.setupHitbox(-120,-220);
    
                    this.checkChargeHit(this.scene.players, hitbox, this.gigaAttackDamage);
                }
                
            });

        this.flameSound.stop();

        await this.spawn();

    }

    fireball(startX, startY, velocityX, velocityY) {
    
            const shot =
    
                new BaseShot(
    
                    this.scene,
    
                    startX,
                    startY,
    
                    velocityX,
                    velocityY,
    
                    this.attackDamage,
                    this,
                    "burn_dinorex_fireball_1",
                    "burn_dinorex_fireball",
                    true,
                    40,
                    40,
                    false
                );
    
            this.shots.push(
                shot
            );
    
        }

}