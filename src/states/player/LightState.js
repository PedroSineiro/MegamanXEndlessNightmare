import { SPAWN_CONFIG } from "../../constants/SpawnConfig.js";

export default class LightState {

    enter(player) {

        this.speed =

            player.lightSpeed
            ?? 20;

        this.direction =

            player.lightDirection
            ?? 1;


        this.targetY =

            player.lightTargetY
            ?? SPAWN_CONFIG[player.filename].spawnHeight; 


        if(this.targetY!=500){
            player.sprite.play(
            `${player.currentArmor}_light_leaving`
            );
        } else {
            player.sprite.play(
            `${player.currentArmor }_light`
            );
        }
    }

    execute(player) {

        player.sprite.y +=

            this.speed *
            this.direction;

        //
        // descendo
        //

        if (

            this.direction > 0 &&

            player.sprite.y >=
            this.targetY

        ) {

            player.isSpawned =
                false;

            player.sprite.y =
                this.targetY;

            this.onFinish(
                player
            );

        }

        //
        // subindo
        //

        else if (

            this.direction < 0 &&

            player.sprite.y <=
            this.targetY

        ) {

            player.sprite.y =
                this.targetY;

            this.onFinish(
                player
            );

        }

    }

    onFinish(player) {

        //
        // spawn
        //

        if (
            this.direction > 0
        ) {

            this.stateMachine
                .transition(
                    "spawning"
                );

        }

        //
        // saiu do stage
        //

        else {

            player.destroy();

        }

    }

}