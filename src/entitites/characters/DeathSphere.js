export default class DeathSphere {

    constructor(

        scene,

        x,
        y,

        characterName,

        type,

        velocityX,
        velocityY

    ) {

        this.scene = scene;

        this.velocityX = velocityX;
        this.velocityY = velocityY;

        this.sprite =

            scene.add.sprite(

                x,
                y,

                `${characterName}_death_sphere_${type}_1`

            );

        this.sprite.play(
            `${characterName}_death_sphere_${type}`
        );

        this.sprite.setScale(
            2
        );

        this.sprite.setDepth(
            this.sprite.y + 1000
        );

        this.lifeTime = 3200;

        scene.time.delayedCall(

            this.lifeTime,

            () => this.destroy()

        );

    }

    update() {

        this.sprite.x += this.velocityX;
        this.sprite.y += this.velocityY;

    }

    destroy() {

        this.sprite?.destroy();

    }

}