import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";


export default class
CyberPeacock
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
            "cyber_peacock";

        this.startSpawnAnimationName = "cyber_peacock_start_spawning";

        this.midSpawnAnimationName = "cyber_peacock_mid_spawning";

        this.spawnAnimationName = "cyber_peacock_spawning";

        this.idleAnimationName = "cyber_peacock_idle";

        this.attackAnimationName = "cyber_peacock_attack";

        this.stopAttackAnimationName = "cyber_peacock_stop_attack";

        this.teleportInAnimationName = "cyber_peacock_teleport_in";

        this.teleportOutAnimationName = "cyber_peacock_teleport_out";

        this.startGigaAttackAnimationName = "cyber_peacock_start_giga_attack";

        this.gigaAttackAnimationName = "cyber_peacock_giga_attack";

        this.teleportGigaAttackAnimationName = "cyber_peacock_teleport_giga";

        this.deathAnimationName = "cyber_peacock_dying";

        this.spawnSound = "cyber_peacock_arriving";

        this.flexSound = "cyber_peacock_flex";

        this.lockSound = "cyber_peacock_lock";
        
        this.arrowSound = "cyber_peacock_arrow";

        this.teleportSound = "cyber_peacock_teleport";

        this.gigaAttackSound = "cyber_peacock_giga_attack";

        this.name = "Cyber Peacock";

        this.hudColor = "#f036d7";

        this.maxHp = 800;

        this.hp = this.maxHp;

        this.attackDamage = 40;

        this.gigaAttackDamage = 70;

        this.originalY = y;

        this.targetSpawnY = y + offsetY;

        //
        // sprite
        //

        this.setupSprite(

            "cyber_peacock_teleport_0",

            x,

            this.targetSpawnY

        );

    }

    async spawn() {

        this.isBusy =
            true;

        await this.playAnimation(

            this.startSpawnAnimationName

        );

        this.scene.sfx.play(this.spawnSound,{
            volume: 0.15
        });

        await this.playAnimation(

            this.midSpawnAnimationName

        );

        await this.wait(1000);


        this.scene.sfx.play(this.flexSound,{
            volume: 0.15
        });

        await this.playAnimation(

            this.spawnAnimationName

        );

        await this.wait(500);


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

        await this.playAnimation(

            this.attackAnimationName

        );

        const startX =

            this.sprite.x -
            70;

        const startY =

            this.sprite.y -
            180;

        this.scene.sfx.play(this.lockSound,{
            volume: 0.15
        });

        await this.showAim(
            target,
            startX,
            startY
        );
        
        this.scene.sfx.play(this.arrowSound,{
            volume: 0.15
        });

        this.arrow(target, startX, startY);

        await this.wait(1000);

        await this.playAnimation(

            this.stopAttackAnimationName

        );

        this.sprite.play(

            this.idleAnimationName

        );

        await this.wait(500);

    }

    async teleportOut(target = false) {
        this.sprite.x = target? target.sprite.x + 100: this.spawnX;

        this.sprite.y = target? target.sprite.y + 20: this.targetSpawnY;

        await this.wait(1000);

        this.scene.sfx.play(this.teleportSound,{
            volume: 0.15
        });

        await this.playAnimation(
            this.teleportOutAnimationName
        );

        this.sprite.play(this.idleAnimationName);

    }

    async teleportIn() {

        this.scene.sfx.play(this.teleportSound,{
            volume: 0.15
        });

        await this.playAnimation(
            this.teleportInAnimationName
        );


    }

    async showAim(
        target,
        startX,
        startY
    ) {

        return new Promise(

            resolve => {

                const targetX =

                    target.sprite.x;

                const targetY =

                    target.sprite.y-140;

                const aim =

                    this.scene.add.sprite(

                        startX,
                        startY,

                        "cyber_peacock_aim"

                    )

                    .setDepth(
                        9999
                    )

                    .setScale(
                        2
                    );

                this.scene.tweens.add({

                    targets:
                        aim,

                    x:
                        targetX,

                    y:
                        targetY,

                    duration:
                        350,

                    onComplete:
                        async () => {

                            //
                            // pisca no alvo
                            //

                            this.scene.tweens.add({

                                targets:
                                    aim,

                                alpha:
                                    0.3,

                                duration:
                                    80,

                                yoyo:
                                    true,

                                repeat:
                                    3

                            });

                            await this.wait(
                                1000
                            );

                            aim.destroy();

                            resolve();

                        }

                    });

            }

        );

    }

    async gigaAttack() {

        await this.teleportIn();

        for (

            const player of
            this.scene.players

        ) {
            await this.teleportOut(player);

            await this.playAnimation(this.startGigaAttackAnimationName);

            this.scene.sfx.play(this.gigaAttackSound,{
                volume: 0.15
            });

            const hitboxWidth =
            90;

            const hitboxHeight =
            80;

            const hitboxOffsetX =
                40;

            const hitboxOffsetY = 
                180;

            this.meleeAttack(player, this.gigaAttackDamage, hitboxWidth, hitboxHeight, hitboxOffsetX, hitboxOffsetY);

            await this.playAnimation(this.gigaAttackAnimationName);

            this.scene.sfx.play(this.teleportSound,{
                volume: 0.15
            });

            await this.playAnimation(this.teleportGigaAttackAnimationName);
        
        }

        await this.teleportOut(false);
        
    }

    arrow(target, startX, startY){
    
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

            this.attackDamage,
            this,
            "cyber_peacock_arrow_1",
            "cyber_peacock_arrow",
            true,
            70,
            70,
            false

        );

        this.shots.push(
            shot
        );
    }

}