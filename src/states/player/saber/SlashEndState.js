export default class
SlashEndState {

    enter(
        player
    ) {

        player.sprite.play(
            `${player.currentArmor}_slash_end`,
            true
        );

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

    execute(player){
        
    }

}