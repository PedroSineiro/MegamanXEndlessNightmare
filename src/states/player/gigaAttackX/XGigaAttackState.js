import AttackHitbox 
from "../../../entitites/attacks/AttackHitbox.js";

import { SLASH_CONFIG } from "../../../constants/SlashConfig.js";

export default class
XGigaAttackState {

    async enter(
        player
    ) {

        await player.xGigaAttack();

        this.stateMachine
            .transition(
                "neutral"
            );
        
    }

    execute(
        player
    ) {

    }

}