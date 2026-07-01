export default class
NeutralGigaAttackState {

    execute(
        player
    ) {

        if (

            player.getGigaAttackInput()

        ) {

            this.stateMachine
                .transition(
                    player.currentArmor
                );

        }

    }

    enter(player){
        
    }

}