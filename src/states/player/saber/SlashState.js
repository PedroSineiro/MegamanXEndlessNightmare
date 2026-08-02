import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";

export default class
SlashState {

    enter(
        player
    ) {

        player.turnActions = player.turnActions- 2;

        player.sprite.play(
            `${player.currentArmor}_slash`,
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


            player.attackHitbox =

            new AttackHitbox(

                player.scene,

                player,

                SLASH_CONFIG
                    .slashC,

                player.slashDamage

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

                player.updateMovementAnimation();

                player.slashStateMachine.transition("neutral")

            }

        );

    }

    execute(
        player
    ) {

    }

}