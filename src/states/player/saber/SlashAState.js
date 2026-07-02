import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";


export default class
SlashAState {

    enter(
        player
    ) {

        player.comboQueued =
            false;

        player.comboWindow =
            false;

        player.sprite.play(
            `${player.currentArmor}_slash_a`,
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
                            .slashA,

                        player.slashADamage

                    );

            }

        );
        //
        // abre janela
        //

        player.scene.time
            .delayedCall(

                200,

                () => {

                    player.comboWindow =
                        true;

                }

            );

        //
        // fecha janela
        //

        player.scene.time
            .delayedCall(

                550,

                () => {

                    player.comboWindow =
                        false;

                }

            );

        player.scene.sfx.play("z_saber",{
            volume:0.2
        })

        player.scene.sfx.play("zero_regular_hit",{
            volume:0.2
        })

        //
        // fim animação
        //

        player.sprite.once(

            Phaser.Animations
                .Events
                .ANIMATION_COMPLETE,

            () => {

                if (
                    player
                    .comboQueued
                ) {

                    this
                    .stateMachine
                    .transition(
                        "slashB"
                    );

                    return;
                }

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