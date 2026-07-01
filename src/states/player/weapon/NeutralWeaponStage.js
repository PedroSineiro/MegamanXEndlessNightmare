export default class NeutralWeaponState {

    enter(player) {

        player.chargeTime = 0;

        player.chargeLevel = 0;

    }

    execute(player) {

        if (
            player.getAttackInput()
        ) {
            this.stateMachine
                .transition("charging");

        }

    }

}