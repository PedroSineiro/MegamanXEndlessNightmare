export default class ShotMovingState {

    enter(shot) {
        shot.sprite.play(
            `${shot.playerCurrentArmor}_${shot.shotType}_shot_moving`
        );
    }

    execute(shot) {

        shot.sprite.x +=
            shot.speed *
            shot.direction;

        // destruir fora da tela
        if (
            shot.sprite.x < -100 ||
            shot.sprite.x > 1000
        ) {

            shot.destroy();

        }

    }

}