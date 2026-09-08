import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
BlazeHeatnix
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
            "blaze_heatnix";

        this.idleAnimationName = "blaze_heatnix_idle";

        this.prepareAnimationName = "blaze_heatnix_prepare";

        this.attackAnimationName = "blaze_heatnix_attack";

        this.gigaAttackAnimationName = "blaze_heatnix_giga_attack";

        this.deathAnimationName = "blaze_heatnix_dying";

        this.deathVoice = "blaze_heatnix_dying";

        this.gigaAttackVoice = "blaze_heatnix_giga_attack";


        this.name = "Blaze Heatnix";

        this.hudColor = "#f36b11";

        this.flameSound =

            scene.sound.add(
                "blaze_heatnix_flame"
            );

        this.wingSound =

            scene.sound.add(
                "blaze_heatnix_wing_beat"
            );

        this.attackSound = "blaze_heatnix_attack";

        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 35;

        this.gigaAttackDamage = 75;

        this.originalX = x;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "blaze_heatnix_idle_1",

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

        await this.flyDown();

        this.scene.sfx.play("blaze_heatnix_flame",{volume: 0.15});

        await this.playAnimation(

            this.prepareAnimationName

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

    async flyDown() {
        this.sprite.x = this.originalX;

        this.sprite.y =
            -300;

        //
        // animação light
        //

        this.wingSound.play({

            volume: 0.15,
            loop: true

        });

        this.sprite.play(
            this.idleAnimationName
        );

        //
        // desce
        //

        await this.moveToY(

            this.targetSpawnY,
            3

        );

        this.wingSound.stop();

        await this.wait(500);
    }

    async performAttack(
        target
    ) {


        await this.playAnimation(
            this.attackAnimationName
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

        this.scene.sfx.play(this.attackSound,{volume: 0.15})

        this.fireball(startX, startY, velocityX, velocityY);

        await this.wait(800);

        this.sprite.play(this.idleAnimationName);

        await this.wait(
            500
        );

    }


    async gigaAttack() {

        this.wingSound.play({

            volume: 0.15,
            loop: true

        });

        await this.moveToY(
            -300,
            4
        );

        this.wingSound.stop();

        //
        // posiciona fora da tela
        //

        await this.wait(500);

        this.sprite.x =
            this.scene.scale.width + 400;

        this.sprite.y =
            this.targetSpawnY;

        this.flameSound.play({

            volume: 0.15,
            loop: true

        });

        this.scene.sfx.play(this.gigaAttackVoice);

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

        await this.wait(1000);

        await this.flyDown();

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
                    "blaze_heatnix_fireball_1",
                    "blaze_heatnix_fireball",
                    true,
                    40,
                    40,
                    false,
                    false
                );
    
            this.shots.push(
                shot
            );
    
        }

}