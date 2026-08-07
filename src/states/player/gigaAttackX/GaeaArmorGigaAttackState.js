export default class GaeaGigaAttackState {

    async enter(player){

        await player.gaeaGigaAttack();

        this.stateMachine
            .transition(
                "neutral"
            );

    }

    execute() {
        
    }

}