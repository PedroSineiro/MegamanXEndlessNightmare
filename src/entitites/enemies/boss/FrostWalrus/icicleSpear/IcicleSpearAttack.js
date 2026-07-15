export default class IcicleSpearAttack {

    constructor(
        scene,
        type,
        target,
        damage,
        owner
    ) {

        this.scene =
            scene;

        this.type = 
            type;

        this.target =
            target;

        this.damage =
            damage;
        
        this.owner = 
            owner;

        this.hasHit =
            false;

        this.sprite =

            scene.add
                .sprite(

                    target.sprite.x,
                    -200,

                    `icicle_spear_${type}`

                )

                .setScale(
                    1.5
                )

                .setDepth(
                    500
                );

        this.sprite.play(
            `icicle_spear_${type}`
        );

    }

    get hitbox() {

        return new Phaser
            .Geom
            .Rectangle(

                this.sprite.x - 20,
                this.sprite.y - 40,

                40,
                80

            );

    }

    async fall() {

        return new Promise(

            resolve => {

                const speed =
                    14;

                const event =

                    this.scene.time.addEvent({

                        delay: 16,

                        loop: true,

                        callback: async () => {

                            this.sprite.y +=
                                speed;

                            //
                            // acertou?
                            //

                            if (

                                !this.hasHit &&

                                this.checkCollision()

                            ) {

                                this.hasHit =
                                    true;

                                event.remove();

                                await this.break();

                                resolve();

                                return;

                            }

                            //
                            // atingiu o chão?
                            //

                            if (

                                this.sprite.y >=

                                this.target.sprite.y - 60

                            ) {

                                event.remove();

                                await this.break();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

    checkCollision() {

        if (
            this.target.isDead
        ) {

            return false;

        }

        const hit =

            Phaser
                .Geom
                .Intersects
                .RectangleToRectangle(

                    this.hitbox,

                    this.target.hurtbox

                );

        if (
            !hit
        ) {

            return false;

        }

        this.target.receiveAttack(

            this.damage,

            this.owner

        );

        return true;

    }

    async break() {

        this.sprite.play(
            `icicle_spear_${this.type}_break`
        );

        this.scene.sfx.play("ice_break",{volume: 0.15});

        await new Promise(

            resolve => {

                this.sprite.once(

                    Phaser.Animations.Events.ANIMATION_COMPLETE,

                    resolve

                );

            }

        );

        this.destroy();

    }

    destroy() {

        this.sprite?.destroy();

    }

}