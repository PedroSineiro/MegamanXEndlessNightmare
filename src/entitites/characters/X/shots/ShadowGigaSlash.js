import { SHOT_CONFIG } from "../../../../constants/ShotConfig.js";

export default class ShadowGigaSlash {

    constructor(

        scene,

        owner,

        x,

        y,

        direction,

        goUp,

        damage

    ) {

        this.scene =
            scene;

        this.owner = owner;

        this.goUp = goUp;

        this.active =
            true;

        this.direction =
            direction;

        this.damage =
            damage;

        this.speed =
            16;

        this.cooldownTime = 1000;

        this.lifeTime = 3000;
        this.elapsed = 0;

        //
        // órbita
        //

        this.radius = 120;

        if (direction === 1) {

            this.angle = goUp ? -90 : 90;

        } else {

            this.angle = goUp ? 90 : -90;

        }

        this.angularSpeed =
            goUp ? 6 : -6;

        this.config =
        SHOT_CONFIG.shadow.giga;

        this.offsetX = direction==1? this.config.offsetXRight: this.config.offsetXLeft;

        this.sprite =

            scene.add.sprite(

                x + this.offsetX,
                y + this.config.offsetY,

                "shadow_giga_attack_1"

            );

        this.sprite.play(
            "shadow_giga_attack"
        );

        this.sprite.setDepth(
            this.sprite.y + 1000
        );

        this.hitbox =
        new Phaser.Geom.Rectangle(
            x + this.offsetX,
            y + this.config.offsetY,
            this.config.width,
            this.config.height
        );


        this.sprite.setScale(2);

        this.sprite.setFlipX(
            direction === -1
        );

    }

    update() {

        if (!this.active) {
            return;
        }

        this.elapsed += 16;

        //
        // girar ao redor do X
        //

        this.angle += this.angularSpeed;

        const radians =

            Phaser.Math.DegToRad(
                this.angle
            );

        const centerX =
            this.owner.sprite.x

        const centerY =
            this.owner.sprite.y -
            120;

        this.sprite.x =

            centerX +

            Math.cos(radians)
            * this.radius;

        this.sprite.y =

            centerY +

            Math.sin(radians)
            * this.radius;

        //
        // girar o próprio sprite
        //

        this.sprite.angle += 20;

        //
        // hitbox
        //

        this.hitbox.x =
            this.sprite.x -
            this.hitbox.width / 2;

        this.hitbox.y =
            this.sprite.y -
            this.hitbox.height / 2;

        //
        // destruir após 2s
        //

        if (
            this.elapsed >=
            this.lifeTime
        ) {

            this.destroy();

        }

    }

    destroy() {

        this.active =
            false;

        this.sprite?.destroy();

        this.owner.gigaShots.filter(shot => shot.active);

    }

}