export default class IdleState {

    enter(player) {

        if (
            player.isLowHp()
        ) {

            this.stateMachine
                .transition(
                    "lowHpIdle"
                );

            return;
        }
        
        player.sprite.play(`${player.currentArmor}_idle`);

    }

    execute(player) {

        const cursors = player.getInput();

        if (
            cursors.left ||
            cursors.right ||
            cursors.up ||
            cursors.down
        ) {

            this.stateMachine
                .transition("startWalking");

        }

    }

}