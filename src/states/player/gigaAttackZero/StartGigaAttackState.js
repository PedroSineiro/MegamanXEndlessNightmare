export default class
StartGigaAttackState {

    enter(player) {

        player.scene.sfx.play("zero_giga_attack_voice",{
            volume:0.2
        })

        player.sprite.play(
            `${player.currentArmor}_start_giga_attack`,
            true
        );

        player.sprite.once(

            Phaser.Animations
                .Events
                .ANIMATION_COMPLETE,

            () => {

                this.stateMachine
                    .transition(
                        "gigaAttack"
                    );

            }

        );

    }

    execute(player) {


    }

}