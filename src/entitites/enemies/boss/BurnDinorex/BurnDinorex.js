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

        this.hp = 880;

        this.maxHp = 880;

        this.attackDamage = 35;

        this.gigaAttackDamage = 70;

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

        //
        // prepara colisão
        //

        this.canDamageDuringCharge =
            true;

        this.playersHit =
            new Set();

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

        await this.chargeAcrossScreen();

        //
        // fim
        //

        this.canDamageDuringCharge =
            false;

        this.flameSound.stop();

        await this.spawn();

    }

    async chargeAcrossScreen() {

        return new Promise(

            resolve => {

                const speed = 22;

                const event =

                    this.scene.time.addEvent({

                        delay: 16,

                        loop: true,

                        callback: () => {

                            this.sprite.x -= speed;

                            this.damagePlayers();

                            //
                            // saiu da tela?
                            //

                            if (

                                this.sprite.x <

                                -400

                            ) {

                                event.remove();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    damagePlayers() {

        const hitbox =

            new Phaser
                .Geom
                .Rectangle(

                    this.sprite.x - 120,
                    this.sprite.y - 220,

                    240,
                    240

                );

        this.scene.players.forEach(

            player => {

                if (
                    player.isDead
                ) {
                    return;
                }

                if (

                    this.playersHit.has(
                        player
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

                            player.hurtbox

                        );

                if (
                    !hit
                ) {
                    return;
                }

                this.playersHit.add(
                    player
                );

                player.receiveAttack(this.gigaAttackDamage, this);

            }

        );

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