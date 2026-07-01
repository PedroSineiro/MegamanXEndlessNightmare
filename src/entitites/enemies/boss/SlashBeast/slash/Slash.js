import BaseShot from
"../../../BaseShot.js";

export default class
slash extends BaseShot {

    constructor(
        scene,
        x,
        y,
        velocityX,
        velocityY,
        damage = 1,
        spriteName =
            "slash_beast_slash_1",
        animationName =
            "slash_beast_slash",
        destroyWhenHit = true,
        hitboxWidth = 70,
        hitboxLength = 70,
        isAreaType = false
    ) {

        super(

            scene,

            x,
            y,

            velocityX,
            velocityY,

            damage,

            spriteName,
            animationName,
            destroyWhenHit,
            hitboxWidth,
            hitboxLength,
            isAreaType
        );

    }

    update() {

        super.update();

    }

}