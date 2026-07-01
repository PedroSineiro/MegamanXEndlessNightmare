export default class
TakingDamageState {

    enter(player) {

        //
        // animação
        //

        player.sprite.play(
            `${player.currentArmor}_taking_damage`,
            true
        );

        player.scene.sfx.play(`${player.filename}_taking_damage`,
            {
            volume: 0.2
        })

        player.scene.sfx.play(`${player.filename}_taking_damage_voice`,
            {
            volume: 0.2
        })

        player.sprite.once(
            Phaser.Animations
            .Events
            .ANIMATION_COMPLETE,

            () => {

                if(player.isLowHp()){
                    this.stateMachine
                    .transition(
                        "lowHpIdle"
                    );

                } else {
                    this
                    .stateMachine
                    .transition(
                        "idle"
                    );

                }

                player.scene.time
                    .delayedCall(

                        400,

                        () => {

                            player
                                .isInvulnerable =
                                false;

                        }
                    );
            }

        );

    }

    execute(player) {
    }

}