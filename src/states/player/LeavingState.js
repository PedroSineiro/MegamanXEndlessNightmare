export default class LeavingState {

    enter(player) {

        player.sprite.play(
            `${player.currentArmor}_leaving`
        );

        player.scene.sfx.play("leaving",{
            volume:0.2
        })

        player.sprite.once(

            Phaser
                .Animations
                .Events
                .ANIMATION_COMPLETE,

            () => {

                player.lightDirection =
                    -1;

                player.lightTargetY =
                    -200;

                this.stateMachine
                    .transition(
                        "light"
                    );

            }

        );

    }

    execute(player) {

    }

}