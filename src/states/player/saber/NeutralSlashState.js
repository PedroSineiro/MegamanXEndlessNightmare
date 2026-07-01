export default class
NeutralSlashState {

    execute(
        player
    ) {

        if (

            player.getAttackInput()

        ) {

            this.stateMachine
                .transition(
                    "slashA"
                );

        } else if (

            player.getPiercingAttackInput()

        ) {

            this.stateMachine
                .transition(
                    "special1"
                );

        }

    }

    enter(player){
        
    }

}