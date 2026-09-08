import {
    SHOT_CONFIG
}
from
"../../../../constants/ShotConfig.js";

export default class AxlShot {

    constructor(scene, owner, x, y, direction, shotType, damage, isPiercing = false) {

        this.active = true;

        this.scene = scene;

        this.owner = owner;

        this.direction = direction;

        this.shotType = shotType;

        this.isPiercing = isPiercing;

        this.hasSpawn = false;

        this.cooldownTime = shotType == "shock"?1500:250;

        this.config =
            SHOT_CONFIG.axl[
                this.shotType
            ];

        this.speed = shotType == "shock"?0:12;

        this.damage = damage;

        this.sprite = scene.add.sprite(
        x,
        y,
        `axl_${shotType}_1`
        );

        this.sprite.play(`axl_${shotType}`);

        this.sprite.setDepth(
            this.sprite.y + 1000
        );

        this.offsetX = direction==1? this.config.offsetXRight: this.config.offsetXLeft;


        this.hitbox =
        new Phaser.Geom.Rectangle(
            x + this.offsetX,
            y + this.config.offsetY,
            this.config.width,
            this.config.height
        );
        /*
        this.debugGraphics =
            scene.add.graphics();*/


        this.sprite.setScale(2);

        this.sprite.setFlipX(
            direction === -1
        );
    }

    update() {

        if (!this.active) {
            return;
        }

        this.sprite.x +=
            this.speed *
            this.direction;

        if (
            this.sprite.x < -200 ||
            this.sprite.x > 1200 ||
            (
                this.sprite.anims.currentAnim &&
                this.sprite.anims.isPlaying === false
            )
        ) {

            this.destroy();

        }

       this.hitbox.x =
            this.sprite.x +
            this.offsetX;

        this.hitbox.y =
            this.sprite.y +
            this.config.offsetY;

        /*
        

        this.debugGraphics.clear();

        this.debugGraphics.setDepth(
            9999
        );

        this.debugGraphics.fillStyle(
            0xff0000,
            0.7
        );

        this.debugGraphics.fillRect(
            this.hitbox.x,
            this.hitbox.y,
            this.hitbox.width,
            this.hitbox.height
        );*/

    }

    destroy() {

        this.active = false;

        this.hurtbox =
            null;

        this.debugGraphics
            ?.destroy();

        //
        // sprite
        //

        this.sprite
            ?.destroy();

        this.owner.shots = this.owner.shots.filter(shot => shot.active);

    }

}