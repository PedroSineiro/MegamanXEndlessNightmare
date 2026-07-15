import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
Colonel
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
            "colonel";

        this.startTeleportAnimationName = "colonel_start_teleport";

        this.teleportAnimationName = "colonel_teleport";

        this.teleportOutAnimationName = "colonel_teleport_out";

        this.idleAnimationName = "colonel_idle";

        this.slashAAnimationName = "colonel_slash_a";

        this.slashBAnimationName = "colonel_slash_b";

        this.deathAnimationName = "colonel_dying";

        this.teleportSound = "colonel_teleport";

        this.slashASound = "colonel_slash_a";

        this.slashBSound = "colonel_slash_b";

        this.name = "Colonel";

        this.hudColor = "#f04343";

        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 40;

        this.gigaAttackDamage = 35;

        this.originalY = y;

        this.targetSpawnY = y + offsetY;

        //
        // sprite
        //

        this.setupSprite(

            "colonel_teleport_5",

            x,

            this.targetSpawnY

        );

    }

    async spawn() {

        this.isBusy =
            true;

        await this.teleportOut();

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

    async beforeTurn() {

        await this.playAnimation(
            this.startTeleportAnimationName
        );
        await this.teleportIn();
    }

    async afterTurn() {
        await this.teleportOut();

        this.sprite.play(this.idleAnimationName);
    }

    async performAttack(
        target
    ) {

        await this.teleportOut(target);

        this.scene.sfx.play(this.slashASound);

        const hitboxWidth =
            90;

        const hitboxHeight =
            80;

        const hitboxOffsetX =
            40;

        const hitboxOffsetY = 
            180;

        this.meleeAttack(target, this.gigaAttackDamage, hitboxWidth, hitboxHeight, hitboxOffsetX, hitboxOffsetY);

        await this.playAnimation(

            this.slashAAnimationName

        );

        await this.teleportIn();

    }

    async teleportOut(target = false) {
        this.sprite.x = target? target.sprite.x + 100: this.spawnX;

        this.sprite.y = target? target.sprite.y + 20: this.targetSpawnY;

        this.scene.sfx.play(this.teleportSound);

        await this.playAnimation(
            this.teleportOutAnimationName
        );

    }

    async teleportIn() {

        this.scene.sfx.play(this.teleportSound);

        await this.playAnimation(
            this.teleportAnimationName
        );

        await this.wait(500);


    }

    async gigaAttack() {

        const startX =

            this.sprite.x -
            40;

        const startY =

            this.sprite.y -
            140;

        for (

            const player of
            this.scene.players

        ) {
            
            this.slash(player, startX, startY);

            this.scene.sfx.play(this.slashASound);

            await this.playAnimation(this.slashAAnimationName);

            await this.wait(500);

            if(player.isDead) break;

            this.slash(player, startX, startY);

            this.scene.sfx.play(this.slashBSound);

            await this.playAnimation(this.slashBAnimationName);

            await this.wait(500);
        
        }

        this.sprite.play(this.idleAnimationName);

        
    }

    slash(target, startX, startY){
    
        let targetX =

            target.hurtbox.x +

            target.hurtbox.width
            / 2;

        let targetY =

            target.hurtbox.y +

            target.hurtbox.height
            / 2;

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
            "colonel_slash_1",
            "colonel_slash",
            true,
            70,
            70

        );

        this.shots.push(
            shot
        );
    }

}