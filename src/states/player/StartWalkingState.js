export default class StartWalkingState {

    enter(player) {

        const cursors = player.getInput();

        // define direção
        if (cursors.left) {

            player.direction = -1;

        }

        else if (cursors.right) {

            player.direction = 1;

        }

        // aplica flip
        player.sprite.setFlipX(
            player.direction === -1
        );

        player.sprite.play(
            `${player.currentArmor}_start_walking`
        );

        player.sprite.once(
            Phaser.Animations.Events
            .ANIMATION_COMPLETE,
            () => {

                this.stateMachine
                    .transition("walking");

            }
        );
    }

    execute(player) {

        const cursors = player.cursors;

        if (
            !cursors.left &&
            !cursors.right && 
            !cursors.up &&
            !cursors.down
        ) {

            this.stateMachine
                .transition("idle");

        }

    }

}