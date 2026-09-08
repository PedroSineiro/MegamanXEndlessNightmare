import Explosion
from "../../entitites/effects/Explosion/Explosion.js";

export default class
DeathState {

    enter(player) {

        //
        // bloqueia inputs
        //

        player.isDead = true;

        //
        // animação
        //

        player.sprite.play(
            `${player.currentArmor}_dying`,
            true
        );

        //
        // terminou
        //

        player.sprite.once(

    Phaser.Animations.Events.ANIMATION_COMPLETE,

    () => {

        //
        // wave 1
        //

        player.spawnRadialWave(
            1,

            8,

            0

        );

        //
        // wave 2
        //

        player.scene.time.delayedCall(

            160,

            () => {

                player.spawnRadialWave(

                    1,

                    8,

                    22.5

                );

            }

        );

        //
        // wave 3
        //

        player.scene.time.delayedCall(

                    320,

                    () => {

                        player.spawnRadialWave(

                            1,

                            16,

                            0

                        );

                    }

                );

                //
                // death sphere 2
                //

                let count = 0;

                const event =

                    player.scene.time.addEvent({

                        delay: 40,

                        loop: true,

                        callback: () => {

                            count++;

                            player.spawnRandomSphere(

                            );

                            if (

                                count >= 25

                            ) {

                                event.remove();

                            }

                        }

                    });

                //
                // sons
                //

                player.scene.sfx.play(
                    `${player.filename}_dying_voice`,
                    {
                        volume: 0.2
                    }
                );

                player.scene.sfx.play(
                    "dying_explosion",
                    {
                        volume: 0.2
                    }
                );

                player.destroy();

            }

        );

    }

    execute(player) {

        // sem controle

    }

}