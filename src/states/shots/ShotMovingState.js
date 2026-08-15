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
            shot.sprite.x < -200 ||
            shot.sprite.x > 1200
        ) {

            shot.destroy();

        }

    }

}