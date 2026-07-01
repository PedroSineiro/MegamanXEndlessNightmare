import StateMachine
from "../../../../states/StateMachine.js";

import ShotSpawnState
from "../../../../states/shots/ShotSpawnState.js";

import ShotMovingState
from "../../../../states/shots/ShotMovingState.js";

import {
    SHOT_CONFIG
}
from
"../../../../constants/ShotConfig.js";

export default class XShot {

    constructor(scene, x, y, direction, shotType, currentArmor, damage) {

        this.active = true;

        this.scene = scene;

        this.direction = direction;

        this.shotType = shotType;

        this.playerCurrentArmor = currentArmor;

        this.config =
            SHOT_CONFIG[currentArmor][
                this.shotType
            ];

        this.speed = 12;

        this.damage = damage;

        this.sprite = scene.add.sprite(
        x,
        y,
        `${currentArmor}_${shotType}_shot_1`
        );

        this.offsetX = direction==1? this.config.offsetXRight: this.config.offsetXLeft

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

        this.stateMachine =
            new StateMachine(
                "spawn",
                {
                    spawn:
                        new ShotSpawnState(),

                    moving:
                        new ShotMovingState()
                },
                this
            );
    }

    update() {

        if (!this.active) {
            return;
        }

        this.stateMachine.step();

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

    }

}