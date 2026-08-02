export default class
NeutralSlashXState {

    execute(
        player
    ) {

        if (

            player.getSaberAttackInput()

        ) {

            this.stateMachine
                .transition(
                    "slash"
                );

        }

    }

    enter(player){
        
    }

}