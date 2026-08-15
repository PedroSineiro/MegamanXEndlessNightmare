import AchievementManager from "./AchievementManager.js";

export default class TurnManager {

    constructor(scene) {

        this.scene =
            scene;

        this.turnOrder =
            [];

        this.currentIndex =
            0;

        this.lastIndex = null;

        this.roundStarted = false;

        this.currentCharacter =
            null;

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

        this.roundStarted = false;

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

        if(this.currentIndex==0 && !this.roundStarted){
            this.roundStarted = true;
            let amountPlayersNoDamage = 0;
            this.scene.players.forEach(player => {
                if(!player.isDead){
                    player.turnsNoDamage++;
                    if(player.turnsNoDamage==6) amountPlayersNoDamage++;
                    player.applyTurnHabilities();
                    if(this.scene.isRainActive){
                        player.takeDamage(this.scene.rainDamage,true);
                    }
                }
                
            });

            const enemies = this.scene.getTotalEnemies();
            enemies.forEach(enemy => {enemy.damageTaken = 0;});

            if(amountPlayersNoDamage==2) AchievementManager.unlock("turns_no_damage");
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

            this.roundStarted = false;

        }

        this.startTurn();

    }

}