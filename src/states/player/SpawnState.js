export default class SpawnState {

    enter(player) {

        player.scene.sfx.play(`${player.filename}_arriving`,{
            volume: 0.2
        })

        player.sprite.play(`${player.currentArmor}_spawning`);

        player.sprite.once(
            Phaser.Animations.Events.ANIMATION_COMPLETE,
            () => {

                player.isSpawned = true;

                this.stateMachine
                    .transition("idle");

            }
        );
    }

    execute(player) {

        // sem controle

    }

}