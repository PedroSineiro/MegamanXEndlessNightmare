import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";

export default class
SlashBState {

    enter(
        player
    ) {

        player.comboQueued =
            false;

        player.comboWindow =
            false;

        player.sprite.play(
            `${player.currentArmor}_slash_b`,
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
                            .slashB,

                        player.slashBDamage

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

        player.scene.sfx.play("z_saber",{
            volume:0.2
        })

        player.scene.sfx.play("zero_second_hit",{
            volume:0.2
        })

        player.scene.time
            .delayedCall(

                450,

                () => {

                    player.comboWindow =
                        false;

                }

            );

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
                        "slashC"
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