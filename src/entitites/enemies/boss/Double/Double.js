import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";

export default class
Double
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
            "double";

        this.idleAnimationName = "double_idle";

        this.devilSlashDownAnimationName = "double_devil_slash_down";

        this.devilSlashAnimationName = "double_devil_slash";

        this.endDevilSlashAnimationName = "double_end_devil_slash";

        this.startAttackAnimationName = "double_start_attack";

        this.attackAnimationName = "double_attack";

        this.jumpAnimationName = "double_jump";

        this.deathAnimationName = "double_dying";

        this.arrivalSound = "double_arrive";

        this.attackSound = "double_attack";

        this.devilSlashSound = "double_devil_slash";

        this.name = "Double";

        this.hudColor = "#ffec44";


        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 42;

        this.gigaAttackDamage = 70;

        this.originalX = x;

        this.originalY = y;

        //
        // sprite
        //

        this.targetSpawnX = x + offsetX;

        this.setupSprite(

            "double_idle_1",

            this.targetSpawnX,

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

        await this.jumpDown();

        this.scene.sfx.play(this.arrivalSound);

        await this.wait(2000);


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
        await this.playAnimation(this.startAttackAnimationName);

        this.scene.sfx.play(this.attackSound);

        this.sprite.play(this.attackAnimationName);

        const startX =

        this.sprite.x -
        80;

        const startY =

        this.sprite.y -
        180;

        this.sphere(target, startX, startY);

        await this.wait(1000);

    }

    async afterTurn(){

        this.sprite.play(this.idleAnimationName);
    }


    async gigaAttack() {
        await this.jumpTopScreen();

        const x = this.scene.players[0];

        this.sprite.x = x.sprite.x;

        let targetY = x.sprite.y + 40;

        this.sprite.play(this.devilSlashDownAnimationName);

        this.scene.sfx.play(this.devilSlashSound);

        await this.moveTowards(
            {
                targetY,

                speed: 15,

                onUpdate: () => {

                    const hitbox = this.setupHitbox();

                    this.checkChargeHit([x], hitbox, this.attackDamage);
                }
                
            }
        );

        await this.playAnimation(this.endDevilSlashAnimationName);

        const zero = this.scene.players[1];

        const targetX = zero.sprite.x + 120;

        targetY = zero.sprite.y + 40;

        this.setDirection(1);

        this.sprite.play(this.devilSlashAnimationName);

        this.scene.sfx.play(this.devilSlashSound);

        await this.moveTowards(
            {
                targetX,

                targetY,

                speed: 8,

                onUpdate: () => {

                    const hitbox = this.setupHitbox();

                    this.checkChargeHit([zero], hitbox, this.attackDamage);
                }
                
            }
        );

        await this.playAnimation(this.endDevilSlashAnimationName);

        await this.jumpTopScreen();

        this.setDirection(-1);

        await this.jumpDown();
    }

    async jumpTopScreen(){
        this.sprite.play(
            this.jumpAnimationName
        );

        await this.moveToY(
            -300,
            10
        );
    }

    async jumpDown(){

        this.sprite.x = this.targetSpawnX;

        this.sprite.y =
            -300;

        this.sprite.play(
            this.devilSlashDownAnimationName
        );

        await this.moveToY(

            this.targetSpawnY,
            15

        );

        await this.playAnimation(

            this.endDevilSlashAnimationName

        );

        this.sprite.play(this.idleAnimationName);

    }

    sphere(target, startX, startY){

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
            "double_sphere_1",
            "double_sphere",
            true,
            70,
            70,
            false,
            false

        );

        this.shots.push(
            shot
        );
    }

}