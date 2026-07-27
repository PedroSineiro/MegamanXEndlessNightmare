export default class FalconGigaAttackState {

    async enter(player){

        await player.falconGigaAttack();

        this.stateMachine
            .transition(
                "neutral"
            );

    }

    execute() {
        
    }

}