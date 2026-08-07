import { SHOT_CONFIG } from "../../../../constants/ShotConfig.js";

export default class GaeaGigaSphere {

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

        this.active =
            true;

        this.direction =
            direction;

        this.damage =
            damage;


        this.cooldownTime = 800;

        this.config =
        SHOT_CONFIG.gaea.giga;

        this.offsetX = direction==1? this.config.offsetXRight: this.config.offsetXLeft;

        this.sprite =

            scene.add.sprite(

                x + this.offsetX,
                y + this.config.offsetY,

                "gaea_giga_attack_sphere_1"

            );

        this.sprite.play(
            "gaea_giga_attack_sphere"
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

    }

    update() {

        if (!this.active) {
            return;
        }

    }

    destroy() {

        this.active =
            false;

        this.sprite?.destroy();

    }

}