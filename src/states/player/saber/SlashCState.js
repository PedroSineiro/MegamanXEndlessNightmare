import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";

export default class
SlashCState {

    enter(
        player
    ) {

        player.turnActions--;

        player.comboWindow =
            false;

        player.sprite.play(
            `${player.currentArmor}_slash_c`,
            true
        );


        let slashSpawned = false;
                
        const impactFrame = 4;

        const onUpdate = (

            animation,
            frame

        ) => {

            if (
                slashSpawned
            ) {
                return;
            }

            if (
                frame.index !== impactFrame
            ) {
                return;
            }

            slashSpawned = true;

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
                    .slashC,

                player.slashCDamage

            );
        };

        player.sprite.on(
            "animationupdate",
            onUpdate
        );


        //
        // fim animação
        //

        player.sprite.once(

            Phaser.Animations
                .Events
                .ANIMATION_COMPLETE,

            () => {

                player.sprite.off(
                    "animationupdate",
                    onUpdate
                );

                player.continueComboOrEnd();

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