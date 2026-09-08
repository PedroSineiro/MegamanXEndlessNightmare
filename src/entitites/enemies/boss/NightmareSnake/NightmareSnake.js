import BaseBoss from "../../BaseBoss.js";

export default class
NightmareSnake
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
            "nightmare_snake";

        this.idleAnimationName = "nightmare_snake_idle";

        this.deathAnimationName = "nightmare_snake_dying";

        this.name = "Nightmare Snake";

        this.hudColor = "#d31515";

        this.flameSound =

            scene.sound.add(
                "nightmare_snake_flame"
            );

        this.stopMusicWhenDie = false;

        this.hasGigaAttack = false;

        this.isAttackSingle = true;

        this.maxHp = 400;

        this.hp = this.maxHp;

        this.attackDamage = 35;

        this.originalX = x;

        this.originalY = y;

        this.targetSpawnY = y + offsetY;

        this.flame = null;

        //
        // sprite
        //

        this.setupSprite(

            "nightmare_snake_idle_1",

            1400,

            this.targetSpawnY

        );

        //
        // hurtbox
        //

    }

    async spawn() {

        this.isBusy =
            true;


        this.sprite.play(this.idleAnimationName);

        this.startBoost();

        await this.moveToX(this.originalX, 4);

        this.stopBoost();

        this.createHurtbox(

            60,
            120,

            -100,
            -180

        );

        this.isBusy =
            false;

    }

    async performAttack(
    ) {
        const targetX = 300;

        this.startBoost();

        await this.moveTowards(
            {
                targetX,

                speed: 6,

                onUpdate: () => {

                    const hitbox = this.setupHitbox(-100,-180);
    
                    this.checkChargeHit(this.scene.players, hitbox, this.attackDamage);
                }
                
            });
    
        this.stopBoost();

        this.startBoost(false);

        await this.moveToX(this.originalX,6);

        this.stopBoost();
    }

    startBoost(goingFoward = true) {

        this.flameSound.play({

            volume: 0.15,
            loop: true

        });

        if(goingFoward) {
            this.boostOffsetX = 150;
            this.boostOffsetY = -215;
        } else {
            this.boostOffsetX = -175;
            this.boostOffsetY = -198;
        }

        const spawnX = this.sprite.x + this.boostOffsetX;

        const spawnY = this.sprite.y + this.boostOffsetY;


        this.boostSprite = this.scene
                .add
                .sprite(
                    spawnX,
                    spawnY,
                    "nightmare_snake_boost_1"
                );

        this.boostSprite
            .setFlipX(
                !goingFoward
            );
        
        this.boostSprite.play("nightmare_snake_boost");

        this.boostSprite
            .setScale(2);

        this.boostSprite
            .setOrigin(
                0.5,
                1
            );

        this.boostSprite.setDepth(99999);
    }

    stopBoost() {
        this.flameSound.stop();
        this.boostSprite.destroy();
    }


    async gigaAttack() {

    }

    update() {
        super.update();

        if(this.boostSprite) {
            this.boostSprite.x = this.sprite.x + this.boostOffsetX;
            this.boostSprite.y = this.sprite.y + this.boostOffsetY;
        }
    }

}