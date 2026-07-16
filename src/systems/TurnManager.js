export default class TurnManager {

    constructor(scene) {

        this.scene =
            scene;

        this.turnOrder =
            [];

        this.currentIndex =
            0;

        this.currentCharacter =
            null;

        this.turnRestarted = false;

    }

    startCombat() {

        this.buildTurnOrder();

        this.startTurn();

    }

    buildTurnOrder() {

        this.turnOrder = [

            ...this.scene.players,

            ...this.scene.enemies

        ];

    }

    rebuildTurnOrder(){

        this.currentIndex =
            0;

        this.turnRestarted = true;

        this.turnOrder = [];

        this.buildTurnOrder();
    }

    startTurn() {

        const character =

            this.turnOrder[
                this.currentIndex
            ];

        this.currentCharacter =
            character;

        if(this.turnRestarted){
            this.scene.players.forEach(player => {
                player.rechargeGigaAttack();
            });

            this.turnRestarted = false;
        }

        character.startTurn();

        //
        // player
        //

        if (
            character.isPlayer
        ) {

            character.turnActions = character.maxActions;

            character.defenseTurnActions = 0;

            this.scene
                .actionMenu
                .show(
                    character
                );

        }

        //
        // enemy AI
        //

        else {
            if(!character.isDead){
                    character.takeTurn(
                    () => {

                        this.endTurn();

                    }
                );
            } else {
                this.endTurn();
            }
        }

    }


    endTurn() {
        this.currentIndex++;

        if (

            this.currentIndex >=

            this.turnOrder
                .length

        ) {

            this.currentIndex = 0;

            this.turnRestarted = true;

        }

        this.startTurn();

    }

}