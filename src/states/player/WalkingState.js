export default class WalkingState {

    enter(player) {

        player.sprite.play(
            `${player.currentArmor}_walking`
        );

    }

    execute(player) {

        const cursors =
            player.getInput();

        let moveX = 0;
        let moveY = 0;

        //
        // INPUT HORIZONTAL
        //

        if (
            cursors.left
        ) {

            moveX = -1;

        }
        else if (
            cursors.right
        ) {

            moveX = 1;

        }

        //
        // INPUT VERTICAL
        //

        if (
            cursors.up
        ) {

            moveY = -1;

        }
        else if (
            cursors.down
        ) {

            moveY = 1;

        }

        //
        // PARADO
        //

        const isMoving =
            moveX !== 0 ||
            moveY !== 0;

        if (!isMoving) {

            this.stateMachine
                .transition(
                    "idle"
                );

            return;

        }

        //
        // FLIP
        //

        if (
            moveX !== 0 &&
            moveX !==
            player.direction
        ) {

            player.direction =
                moveX;

            player.sprite
                .setFlipX(
                    moveX === -1
                );

        }

        //
        // NORMALIZA DIAGONAL
        //

        const length =
            Math.sqrt(
                moveX * moveX +
                moveY * moveY
            );

        moveX /= length;
        moveY /= length;

        //
        // MOVIMENTO
        //

        player.sprite.x +=
            moveX *
            player.speed;

        player.sprite.y +=
            moveY *
            player.speed;

    }

}