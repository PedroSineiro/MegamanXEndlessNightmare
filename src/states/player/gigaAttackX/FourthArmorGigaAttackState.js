export default class FourthGigaAttackState {

    async enter(player){

        await player.novaStrike();

        this.stateMachine
            .transition(
                "neutral"
            );

    }

    execute() {
        
    }

}