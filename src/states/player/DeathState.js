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

         player.scene.sfx.play(`${player.filename}_dying_voice`,
            {
            volume: 0.2
        })

        //
        // terminou
        //

        player.sprite.once(

            Phaser.Animations
            .Events
            .ANIMATION_COMPLETE,

            () => {

                player.destroy();

                 new Explosion(

                    player.scene,

                    player.sprite.x -30,

                    player.sprite.y - 140

                );

            }

        );

    }

    execute(player) {

        // sem controle

    }

}