export default class BaseShot {

    constructor(
        scene,
        x,
        y,
        velocityX,
        velocityY,
        damage = 1,
        owner,
        spriteName,
        animationName,
        destroyWhenHit = true,
        hitboxWidth = 18,
        hitboxLength = 18,
        isAreaType = false,
        needRotation = true,
        fullDepth = false
    ) {

        this.scene =
            scene;

        this.owner = owner;

        this.active =
            true;

        this.velocityX =
            velocityX;

        this.velocityY =
            velocityY;

        this.damage =
            damage;

        this.hasCollided =
            false;

        this.hitboxWidth = hitboxWidth;

        this.hitboxLength = hitboxLength;
        
        this.destroyWhenHit = destroyWhenHit;

        this.isAreaType = isAreaType;

        this.hitTargets = [];

        this.sprite =
            scene.add.sprite(
                x,
                y,
                spriteName
            );

        this.sprite.play(
            animationName
        );

        this.sprite.setScale(
            2
        );

        this.sprite.setDepth(
            this.sprite.y + 1000
        );

        //
        // rotação
        //
        if(needRotation){

            this.sprite
                .setFlipX(
                    true
                );
        
            this.sprite.rotation =

            Math.atan2(

                velocityY,
                velocityX

            );
        }

        if(fullDepth){
            this.sprite.setDepth(
                99999
            )
        }

        //
        // HITBOX
        //


        this.hitboxSize =
            18;

        this.hitbox =

            new Phaser
                .Geom
                .Rectangle(

                    x -
                    this.hitboxSize / 2,

                    y -
                    this.hitboxSize / 2,

                    this.hitboxWidth,

                    this.hitboxLength

                );

        //
        // debug
        //
/*
        this.debugGraphics =
            scene.add.graphics();

        this.debugGraphics
            .setDepth(
                99999
            );*/

    }

    update() {

        if (
            !this.active
        ) {
            return;
        }

        //
        // movimento
        //

        this.sprite.x +=
            this.velocityX;

        this.sprite.y +=
            this.velocityY;

        //
        // hitbox
        //

        this.hitbox.x =

            this.sprite.x -

            this.hitbox.width
            / 2;

        this.hitbox.y =

            this.sprite.y -

            this.hitbox.height
            / 2;

        //
        // debug
        //
/*
        this.debugGraphics
            .clear();

        this.debugGraphics
            .lineStyle(
                2,
                0xffff00
            );

        this.debugGraphics
            .strokeRectShape(
                this.hitbox
            );*/

        //
        // destroy
        //

        if (

            this.sprite.x < -200 ||

            this.sprite.x > 1200 ||

            this.sprite.y < -200 ||

            this.sprite.y > 1000

        ) {

            this.destroy();

        }

    }

    destroy() {

        this.active =
            false;

        this.sprite
            ?.destroy();

        this.debugGraphics
            ?.destroy();

    }

}