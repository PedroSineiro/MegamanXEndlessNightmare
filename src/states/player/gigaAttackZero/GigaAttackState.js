export default class
GigaAttackState {

    enter(player) {

        player.scene.sfx.play("zero_giga_attack",{
            volume:0.2
        })

        player.sprite.play(
            `${player.currentArmor}_giga_attack`,
            true
        );

        player.gigaAttack()

        player.sprite.once(

            Phaser.Animations
                .Events
                .ANIMATION_COMPLETE,

            () => {

                player.updateMovementAnimation();

                this.stateMachine
                    .transition(
                        "neutral"
                    );

            }

        );

    }

    execute(player) {


    }

}