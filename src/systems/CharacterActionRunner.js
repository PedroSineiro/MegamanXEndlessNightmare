export default class
CharacterActionRunner {

    constructor(scene) {

        this.scene =
            scene;

    }

    async xShot(
        actor,
        target,
        chargeLevel
    ) {

        actor.isBusy =
            true;

        const originalX =
            actor.sprite.x;

        const originalY =
            actor.sprite.y;

        const dx = target.sprite.x - actor.sprite.x;

        //
        // virar personagem
        //

        if (dx > 0) {

            actor.direction = 1;

            actor.sprite.setFlipX(
                false
            );

        }
        else {

            actor.direction = -1;

            actor.sprite.setFlipX(
                true
            );

        }

        await this.moveToLane(

            actor,

            target.originalY + 120

        );

        //
        // carregar
        //

        await this.chargeShot(

            actor,

            chargeLevel

        );

        //
        // atirar
        //

        //
        // esperar tiro
        //

        await this.wait(
            400
        );

        //
        // voltar
        //

        await this.moveBack(

            actor,

            originalX,

            originalY

        );

        await this.wait(
            600
        );

        actor.isBusy =
            false;

    }

    async zeroCombo(

        actor,

        target,

        comboType

    ) {

        actor.isBusy =
            true;

        const originalX =
            actor.sprite.x;

        const originalY =
            actor.sprite.y;

        //
        // posição perto do alvo
        //

        let offsetX = 80;

        const dx =

            target.sprite.x -

            actor.sprite.x;

        if (dx > 0) {

            offsetX = - 80;

            actor.direction =
                1;

            actor.sprite
                .setFlipX(
                    false
                );

        }


        const targetX =

            target.spawnX +
            offsetX;


        const targetY =
            target.originalY + 120;


        //
        // mover até lane
        //

        await this.moveToLane(

            actor,

            targetY

        );

        //
        // mover horizontal
        //

        await this.moveToX(

            actor,

            targetX

        );

        //
        // combo
        //

        let usedTurns = 0;

        let combo = [];

        actor.comboTarget = target;

        switch (
            comboType
        ) {

            case "slashA":

                combo = ["slashA"];

                break;

            case "slashAB":

                combo = ["slashA","slashB"];

                break;

            case "slashABC":

                combo = ["slashA","slashB", "slashC"];

                break;

            case "piercingSlash":

                combo = ["special1"];


                break;

        }

        await actor.performCombo(combo);

        actor.comboTarget = null;

        await this.wait(
            600
        );

        await this.moveBack(

            actor,

            originalX,

            originalY

        );

        actor.isBusy =
            false;

    }

    async zeroGigaAttack(
        actor
    ){

        actor.isBusy =
            true; 

        await this.pressGigaAttack(actor);

        await this.wait(3000);

        actor.isBusy =
            false;
    }

    async pressAttack(
        actor
    ) {

        actor.virtualInput
            .slash = true;

        await this.wait(
            50
        );

        actor.virtualInput
            .slash = false;

    }

    async pressGigaAttack(
        actor
    ) {

        actor.virtualInput
            .giga = true;

        await this.wait(
            50
        );

        actor.virtualInput
            .giga = false;

    }
    
    async pressPiercingAttack(
        actor
    ) {

        actor.virtualInput
            .piercing = true;

        await this.wait(
            50
        );

        actor.virtualInput
            .piercing = false;

    }

    async moveToX(
        actor,
        targetX
    ) {

        return new Promise(

            resolve => {

                const tolerance =
                    8;

                const event =

                    this.scene
                        .time
                        .addEvent({

                    delay: 16,

                    loop: true,

                    callback: () => {

                        actor
                            .virtualInput
                            .left = false;

                        actor
                            .virtualInput
                            .right = false;

                        const dx =

                            targetX -

                            actor.sprite.x;

                        if (

                            Math.abs(dx)

                            <= tolerance

                        ) {

                            actor
                                .virtualInput
                                .left = false;

                            actor
                                .virtualInput
                                .right = false;

                            event.remove();

                            resolve();

                            return;

                        }

                        if (
                            dx > 0
                        ) {

                            actor
                                .virtualInput
                                .right = true;

                        }

                        else {

                            actor
                                .virtualInput
                                .left = true;

                        }

                    }

                });

            }

        );

    }

    async xNovaStrike(

        actor,

        target

    ) {

        actor.isBusy =
            true;

        const originalX =
            actor.sprite.x;

        const originalY =
            actor.sprite.y;

        const dx = target.sprite.x - actor.sprite.x;

        //
        // virar personagem
        //

        if (dx > 0) {

            actor.direction = 1;

            actor.sprite.setFlipX(
                false
            );

        }
        else {

            actor.direction = -1;

            actor.sprite.setFlipX(
                true
            );

        }

        let offsetX = 80;


        const targetY =
            target.originalY + 120;


        //
        // mover até lane
        //

        await this.moveToLane(

            actor,

            targetY

        );

        this.pressGigaAttack(actor);
        //
        // espera slash end
        //

        await this.wait(
            1200
        );

        //
        // voltar
        //

        await this.moveBack(

            actor,

            originalX,

            originalY

        );

        actor.isBusy =
            false;

    }

    wait(ms) {

        return new Promise(

            resolve => {

                this.scene
                    .time
                    .delayedCall(

                        ms,

                        resolve

                    );

            }

        );

    }

    async moveToLane(
        actor,
        target
    ) {

        return new Promise(

            resolve => {

                const tolerance =
                    8;

                //
                // pega a lane do alvo
                //

                const laneY = target;

                const event =

                    this.scene
                        .time
                        .addEvent({

                            delay: 16,

                            loop: true,

                            callback: () => {

                                actor.virtualInput.up =
                                    false;

                                actor.virtualInput.down =
                                    false;

                                const dy =

                                    laneY -

                                    actor.sprite.y;

                                //
                                // chegou
                                //

                                if (

                                    Math.abs(dy)

                                    <= tolerance

                                ) {

                                    actor.virtualInput
                                        .up = false;

                                    actor.virtualInput
                                        .down = false;

                                    event.remove();

                                    resolve();

                                    return;

                                }

                                //
                                // mover
                                //

                                if (
                                    dy > 0
                                ) {

                                    actor.virtualInput
                                        .down = true;

                                }

                                else {

                                    actor.virtualInput
                                        .up = true;

                                }

                            }

                        });

            }

        );

    }

    async chargeShot(
        actor,
        level
    ) {

        actor.virtualInput
            .buster = true;

        await actor.waitUntilCharged(level);

        await this.wait(
            100
        );

        actor.virtualInput
            .buster = false;

    }

    async moveBack(
        actor,
        x,
        y
    ) {

        return new Promise(

            resolve => {

                const tolerance =
                    8;

                let reachedX =
                    false;

                let reachedY =
                    false;

                const event =

                    this.scene
                        .time
                        .addEvent({

                        delay: 16,

                        loop: true,

                        callback: () => {

                            //
                            // limpa inputs
                            //

                            actor.virtualInput
                                .up = false;

                            actor.virtualInput
                                .down = false;

                            actor.virtualInput
                                .left = false;

                            actor.virtualInput
                                .right = false;

                            const dx =
                                x -
                                actor.sprite.x;

                            const dy =
                                y -
                                actor.sprite.y;

                            //
                            // eixo X
                            //

                            if (

                                Math.abs(dx)

                                <= tolerance

                            ) {

                                reachedX =
                                    true;

                            }

                            else {

                                if (
                                    dx > 0
                                ) {

                                    actor
                                        .virtualInput
                                        .right = true;

                                }

                                else {

                                    actor
                                        .virtualInput
                                        .left = true;

                                }

                            }

                            //
                            // eixo Y
                            //

                            if (

                                Math.abs(dy)

                                <= tolerance

                            ) {

                                reachedY =
                                    true;

                            }

                            else {

                                if (
                                    dy > 0
                                ) {

                                    actor
                                        .virtualInput
                                        .down = true;

                                }

                                else {

                                    actor
                                        .virtualInput
                                        .up = true;

                                }

                            }

                            //
                            // terminou?
                            //

                            if (
                                reachedX &&
                                reachedY
                            ) {

                                actor.virtualInput = {

                                    left: false,
                                    right: false,
                                    up: false,
                                    down: false,
                                    attack: false

                                };

                                //
                                // snap final
                                //

                                actor.sprite.x =
                                    x;

                                actor.sprite.y =
                                    y;

                                event.remove();

                                resolve();

                            }

                        }

                    });

            }

        );

    }

}