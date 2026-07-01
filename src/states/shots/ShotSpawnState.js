export default class ShotSpawnState {

    enter(shot) {

        shot.sprite.play(
            `${shot.playerCurrentArmor}_${shot.shotType}_shot_spawn`
        );

        shot.sprite.once(
            Phaser.Animations.Events
            .ANIMATION_COMPLETE,
            () => {

                this.stateMachine
                    .transition("moving");

            }
        );
    }

    execute(shot) {

    }

}