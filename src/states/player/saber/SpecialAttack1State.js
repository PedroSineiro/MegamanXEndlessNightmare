import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";


export default class
SpecialAttack1State {

    enter(
        player
    ) {

        player.turnActions -= player.piercingSlashActions;

        player.sprite.play(
            `${player.currentArmor}_special_attack_1`,
            true
        );

        player.scene.time.delayedCall(

            500,

            () => {

                player.scene.sfx.play("z_saber",{
                    volume:0.2
                })

                player.scene.sfx.play("zero_strong_hit",{
                    volume:0.2
                })

                player.attackHitbox =

                    new AttackHitbox(

                        player.scene,

                        player,

                        SLASH_CONFIG
                            .slashSpecial1,

                        player.slashPiercingDamage

                    );


                player.attackHitbox.startGrowing({

                    startWidth: 50,

                    endWidth: 260,

                    duration: 180

                });

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

                player.continueComboOrEnd();

                }

        );

    }

    execute(
        player
    ) {

        if (

            player.comboWindow &&

            Phaser.Input
                .Keyboard
                .JustDown(

                    player.saberKey

                )

        ) {

            player.comboQueued =
                true;

        }

    }

}