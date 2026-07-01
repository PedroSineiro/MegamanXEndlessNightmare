export default class VictoryState {

    enter(player) {

        player.sprite.play(
            `${player.currentArmor}_victory`
        );

        player.sprite.once(

            Phaser
                .Animations
                .Events
                .ANIMATION_COMPLETE,

            () => {

                player.scene.time
                    .delayedCall(

                    500,

                    () => {

                        this.stateMachine
                            .transition(
                                "leaving"
                            );

                    }

                );
            }

        );

    }

    execute(player) {

    }

}