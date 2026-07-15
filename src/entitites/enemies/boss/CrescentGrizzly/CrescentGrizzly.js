import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
CrescentGrizzly
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
            "crescent_grizzly";

        this.fallingAnimationName = "crescent_grizzly_arriving";

        this.landingAnimationName = "crescent_grizzly_landing";

        this.idleAnimationName = "crescent_grizzly_idle";

        this.invisibleAnimationName = "crescent_grizzly_invisible";

        this.startAttackAnimationName = "crescent_grizzly_start_attack";

        this.stopAttackAnimationName = "crescent_grizzly_stop_attack";

        this.attackAnimationName = "crescent_grizzly_attack";

        this.startJumpingAnimationName = "crescent_grizzly_start_jumping";

        this.jumpingAnimationName = "crescent_grizzly_jumping";

        this.gigaAttackAnimationName = "crescent_grizzly_giga_attack";

        this.deathAnimationName = "crescent_grizzly_dying";

        this.groundBreakSound = "crescent_grizzly_breaking_ground";

        this.slashSound = "crescent_grizzly_slash";

        this.screamSound = "crescent_grizzly_scream";

        this.name = "Crescent Grizzly";

        this.hudColor = "#915007";


        this.maxHp = 880;

        this.hp = this.maxHp;

        this.attackDamage = 43;

        this.gigaAttackDamage = 60;

        this.originalX = x;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "crescent_grizzly_falling_1",

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

        this.scene.sfx.play("crescent_grizzly_landing",{
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

    async beforeTurn(){
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
    }

    async performAttack(
        target
    ) {

        const hit = this.tryHitTarget(target);

        //
        // posição perto do alvo
        //

        const targetOffset = +80;

        const attackX =

            target.sprite.x +

            targetOffset;

        const attackY =

            target.sprite.y + 50;

        this.sprite.play(this.invisibleAnimationName);

        this.sprite.x =
            attackX;

        this.sprite.y =
            attackY;
        

        this.scene.sfx.play(this.groundBreakSound, {volume: 0.15});

        await this.playAnimation(this.startAttackAnimationName);

        this.sprite.play(this.attackAnimationName);

        this.scene.sfx.play(this.screamSound, {volume: 0.15});

        const hitboxWidth =
            120;

        const hitboxHeight =
            120;

        const hitboxOffsetX =
            40;

        const hitboxOffsetY =
            280;
        
        this.meleeAttack(target, this.attackDamage, hitboxWidth, hitboxHeight, hitboxOffsetX, hitboxOffsetY);

        await this.wait(1000);

        await this.playAnimation(this.stopAttackAnimationName);

        this.scene.sfx.play(this.groundBreakSound, {volume: 0.15});

    }

    async afterTurn(){
        await this.spawn();
    }


    async gigaAttack() {

        this.scene.sfx.play(this.slashSound, {volume: 0.15});

        const startX =

        this.sprite.x -
        80;

        const startY =

        this.sprite.y -
        180;

        this.slash(startX, startY);

        await this.playAnimation(this.gigaAttackAnimationName);

        this.sprite.play(this.idleAnimationName);

        await this.wait(2000);


    }

    slash(startX, startY){

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                -8,
                0,
                this.gigaAttackDamage,
                this,
                "crescent_grizzly_slash_1",
                "crescent_grizzly_slash",
                false,
                108,
                260,
                true

            );

        this.shots.push(
            shot
        );
    }

}