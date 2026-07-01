export default class ShootingWeaponState {

    enter(player) {

        // animação

        player.stopChargingSound()

        player.stopChargedSound()

        if(player.chargeLevel !== 2){
            player.sprite.play(
                `${player.currentArmor}_basic_shooting`,
                true
            );

            player.scene.sfx.play("x_basic_shot",{
                volume: 0.2
            })

        } else {
            player.sprite.play(
                `${player.currentArmor}_charged_shooting`,
                true
            );

            player.scene.sfx.play("x_charged_voice",{
                volume: 0.2
            })

            player.scene.sfx.play("x_charged_shot",{
                volume: 0.2
            })
        }

        // cria tiro
        player.shoot(
            player.chargeLevel
        );

        // volta rapidamente
        player.sprite.once(
            Phaser.Animations.Events
            .ANIMATION_COMPLETE,
            () => {

                player.updateMovementAnimation();

                this.stateMachine
                    .transition("neutral");

            }
        );

    }

    execute(player) {

    }

}