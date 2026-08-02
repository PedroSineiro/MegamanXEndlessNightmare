import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";

export default class
BladeGigaAttackState {

    enter(
        player
    ) {

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


            player.shoot(4);
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

                player.gigaAttackStateMachine.transition("neutral")

            }

        );

    }

    execute(
        player
    ) {

    }

}