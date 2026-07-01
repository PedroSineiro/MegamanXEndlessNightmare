export default class ChargingWeaponState {

    enter(player) {

        player.chargeTime = 0;

        player.chargeLevel = 0;

    }

    execute(player) {

        player.chargeTime +=
            player.scene.game.loop.delta;

        player.startChargingSound();

        if (
            player.chargeTime >= 200
        ) {
            player.startChargingParticles();

        }

        if (
            player.chargeTime >= player.mediumShotChargingTime 
        ) {
            player.chargeLevel = 1;

        }
        if (
            player.chargeTime >= player.chargedShotChargingTime 
        ) {
            player.stopChargingSound();
            player.startChargedSound();
            player.startChargedParticles();
            player.chargeLevel = 2;

        }

        // soltou botão
        if (
           player.wasAttackJustReleased()
        ) {

            this.stateMachine
                .transition("shooting");

        }

    }

    exit(player) {
        player.stopChargingParticles();

        player.stopChargedParticles();

        player.stopChargingSound();

        player.stopChargedSound();
    }

}