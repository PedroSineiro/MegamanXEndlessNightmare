import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";

export default class
SlashCState {

    enter(
        player
    ) {

        player.comboQueued =
            false;

        player.comboWindow =
            false;

        player.sprite.play(
            `${player.currentArmor}_slash_c`,
            true
        );


        player.scene.time.delayedCall(
        
            120,

            () => {

                player.attackHitbox =

                    new AttackHitbox(

                        player.scene,

                        player,

                        SLASH_CONFIG
                            .slashC,

                        player.slashCDamage

                    );

            }

        );


        //
        // fim animação
        //

        player.scene.sfx.play("z_saber",{
            volume:0.2
        })

        player.scene.sfx.play("zero_strong_hit",{
            volume:0.2
        })
        player.sprite.once(

            Phaser.Animations
                .Events
                .ANIMATION_COMPLETE,

            () => {

                this.stateMachine
                    .transition(
                        "slashEnd"
                    );

            }

        );

    }

    execute(
        player
    ) {

        if (

            player.comboWindow &&

            player.getAttackInput()

        ) {

            player.comboQueued =
                true;

        }

    }

}