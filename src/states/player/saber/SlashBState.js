import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";

export default class
SlashBState {

    enter(
        player
    ) {

        player.turnActions--;

        player.comboWindow =
            false;

        player.sprite.play(
            `${player.currentArmor}_slash_b`,
            true
        );

        let slashSpawned = false;
        
        const impactFrame = 3;

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

            player.scene.sfx.play(
                "z_saber",
                {
                    volume: 0.2
                }
            );

            player.scene.sfx.play(
                "zero_regular_hit",
                {
                    volume: 0.2
                }
            );


            player.attackHitbox =

            new AttackHitbox(

                player.scene,

                player,

                SLASH_CONFIG
                    .slashB,

                player.slashBDamage

            );
        };

        player.sprite.on(
            "animationupdate",
            onUpdate
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

        player.scene.time
            .delayedCall(

                550,

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

            player.comboQueue.push(
                "slashC"
            );

            player.comboWindow =
                false;

        }
    }

}