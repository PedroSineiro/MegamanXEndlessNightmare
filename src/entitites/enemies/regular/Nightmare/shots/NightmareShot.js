import BaseShot from "../../../BaseShot.js";

export default class NightmareShot extends BaseShot{

    constructor(
        scene,
        x,
        y,
        velocityX,
        velocityY,
        damage = 1,
        spriteName = "nightmare_shot_1",
        animationName = "nightmare_shot"
    ) {

        super(
            scene,
            x,
            y,
            velocityX,
            velocityY,
            damage = 1,
            spriteName,
            animationName
        )

    }

    update() {

        super.update();

    }

    destroy() {

        super.destroy();

    }

}