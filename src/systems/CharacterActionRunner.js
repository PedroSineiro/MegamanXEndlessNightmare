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

        switch (
            comboType
        ) {

            case "slashA":

                await this.pressAttack(
                    actor
                );

                actor.turnActions--;

                break;

            case "slashAB":

                await this.pressAttack(
                    actor
                );

                actor.turnActions--;

                await this.wait(
                    250
                );

                if(target.isDead) break;

                await this.pressAttack(
                    actor
                );

                actor.turnActions--;

                break;

            case "slashABC":

                await this.pressAttack(
                    actor
                );

                actor.turnActions--;

                await this.wait(
                    250
                );

                if(target.isDead) break;

                await this.pressAttack(
                    actor
                );

                actor.turnActions--;


                await this.wait(
                    250
                );

                if(target.isDead) break;

                await this.pressAttack(
                    actor
                );

                actor.turnActions--;


                break;

            case "piercingSlash":

                await this.pressPiercingAttack(
                    actor
                );


                break;

        }

        await this.wait(
            1200
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

    async moveCharacter(

        character,

        targetX,

        targetY

    ) {

        return new Promise(

            resolve => {

                this.scene.tweens.add({

                    targets:
                        character
                            .sprite,

                    x:
                        targetX,

                    y:
                        targetY,

                    duration:
                        350,

                    onComplete:
                        resolve

                });

            }

        );

    }

    async playAnimation(

        character,

        animationKey

    ) {

        return new Promise(

            resolve => {

                character.sprite.play(
                    animationKey
                );

                character.sprite.once(

                    Phaser
                        .Animations
                        .Events
                        .ANIMATION_COMPLETE,

                    () => {

                        resolve();

                    }

                );

            }

        );

    }

    async playSlash(

        zero,

        enemy,

        slashName

    ) {

        zero.sprite.play(

            `zero_${slashName}`

        );

        //
        // timing do hit
        //

        const hitFrame = {

            slashA: 6,
            slashB: 5,
            slashC: 8

        };

        let alreadyHit =
            false;

        return new Promise(

            resolve => {

                zero.sprite.on(

                    "animationupdate",

                    (

                        animation,

                        frame

                    ) => {

                        if (
                            alreadyHit
                        ) {
                            return;
                        }

                        if (

                            frame.index ===

                            hitFrame[
                                slashName
                            ]

                        ) {

                            alreadyHit =
                                true;

                            enemy
                                .takeDamage(
                                    1
                                );

                        }

                    }

                );

                zero.sprite.once(

                    Phaser
                        .Animations
                        .Events
                        .ANIMATION_COMPLETE,

                    () => {

                        resolve();

                    }

                );

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

        let time =
            0;

        switch(level) {

            case 0:
                time = 100;
                break;

            case 1:
                time = actor.mediumShotChargingTime;
                break;

            case 2:
                time = actor.chargedShotChargingTime+100;
                break;
        }

        await this.wait(
            time
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