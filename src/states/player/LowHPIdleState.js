export default class
LowHpIdleState {

    enter(player) {

        player.sprite.play(
            `${player.currentArmor}_low_hp`,
            true
        );

    }

    execute(player) {

        const cursors =
            player.getInput();

        const moving =

            cursors.left ||
            cursors.right ||
            cursors.up ||
            cursors.down;

        if (
            player.hp >
            player.maxHp / 3
        ) {

            this.stateMachine
                .transition(
                    "idle"
                );

            return;

        }

        //
        // mover
        //

        if (moving) {

            this.stateMachine
                .transition(
                    "startWalking"
                );

        }

    }

}