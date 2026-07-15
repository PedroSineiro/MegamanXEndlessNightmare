import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
SpiralPegasus
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
            "spiral_pegasus";

        this.arrivingAnimationName = "spiral_pegasus_arriving";

        this.landingAnimationName = "spiral_pegasus_landing";

        this.idleAnimationName = "spiral_pegasus_idle";

        this.pointingAnimationName = "spiral_pegasus_pointing";

        this.flyingAnimationName = "spiral_pegasus_flying";

        this.attackAnimationName = "spiral_pegasus_attack";

        this.startGigaAttackAnimationName = "spiral_pegasus_start_giga_attack";

        this.gigaAttackAnimationName = "spiral_pegasus_giga_attack";

        this.stopGigaAttackAnimationName = "spiral_pegasus_stop_giga_attack";

        this.deathAnimationName = "spiral_pegasus_dying";

        this.hurricaneSound = "spiral_pegasus_hurricane";

        this.name = "Spiral Pegasus";

        this.hudColor = "#ffeeee";

        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 38;

        this.gigaAttackDamage = 77;

        this.originalX = x;

        this.spawnX = x + offsetX;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "spiral_pegasus_arriving_1",

            this.spawnX,

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

        await this.wait(1000);

        await this.playAnimation(this.pointingAnimationName);


        this.createHurtbox(

            60,
            120,

            -30,
            -180

        );

        this.sprite.play(this.idleAnimationName);

        this.isBusy =
            false;

    }

    async flyDown(isSpawn = true){

        if(isSpawn){
             this.sprite.x = this.spawnX;

            this.sprite.y = -300;
        }

        this.sprite.play(
            this.arrivingAnimationName
        );

        await this.moveToY(

            this.targetSpawnY,
            5

        );

        await this.playAnimation(

            this.landingAnimationName

        );

        this.sprite.play(this.idleAnimationName);
    }

    async flyUp(isGigaAttack = false){

        this.sprite.play(this.flyingAnimationName);

        await this.moveToY(
            isGigaAttack?400: 400,
            4
        );

        this.sprite.play(this.arrivingAnimationName);

        await this.moveToY(
            isGigaAttack? 300:-300,
            4
        );

    }

    async beforeTurn(){
        await this.flyUp();
    }

    async afterTurn() {
        await this.flyDown();
    }

    async performAttack(
        target
    ) {

        this.sprite.play(this.attackAnimationName);

        const speed = 20;

        const velocityX = -14;
        
        const velocityY = 14;

        const t = 50;

        this.sprite.x =

            target.sprite.x -

            velocityX * t +

            240;

        this.sprite.y =

            target.sprite.y -

            velocityY * t -

            200;

        await this.moveByVelocity({

            velocityX: -14,

            velocityY: 14,

            onUpdate: () => {

                const hitbox =
                    this.setupHitbox(
                        -80,
                        -80,
                        160,
                        160
                    );

                this.checkChargeHit(

                    [target],

                    hitbox,

                    this.attackDamage

                );

            },

            stopCondition: () =>

                this.sprite.y >

                this.scene.scale.height + 300

        });

    }



    async gigaAttack() {
        await this.flyUp(true);

        await this.playAnimation(this.startGigaAttackAnimationName);

        await this.throwHurricanes();

        await this.wait(500);

        await this.flyDown(false);

    }

    async throwHurricanes(){
        for (
            const player of
            this.scene.players
        ) {
            await this.playAnimation(this.gigaAttackAnimationName);

            const startX =

            this.sprite.x -
            100;

            const startY = player.sprite.y - 200;

            this.shootGigaAttack(startX, startY);

            await this.wait(500);

            await this.playAnimation(this.stopGigaAttackAnimationName);

            await this.wait(1000);


        }
    }

    shootGigaAttack(
        startX,
        startY
    ) {


        this.scene.sfx.play(
            this.hurricaneSound,
            {
                volume: 0.15
            }
        );

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                -4,
                0,

                this.gigaAttackDamage,
                this,
                "spiral_pegasus_hurricane_1",
                "spiral_pegasus_hurricane",
                false,
                18,
                100,
                false,
                false,
                true

            );

        this.shots.push(
            shot
        );

    }

}