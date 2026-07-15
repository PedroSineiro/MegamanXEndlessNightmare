import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";
import IcicleSpear from "./icicleSpear/IcicleSpear.js";
import IcicleSpearAttack from "./icicleSpear/IcicleSpearAttack.js";

export default class
FrostWalrus
extends BaseBoss {

    constructor(
        scene,
        x,
        offsetX,
        y,
        offsetY,
    ) {

        super(
            scene,
            x + offsetX,
            y + offsetY
        );

        this.filename =
            "frost_walrus";

        this.idleAnimationName = "frost_walrus_idle";

        this.arrivingAnimationName = "frost_walrus_arriving";

        this.startFistAnimationName = "frost_walrus_start_fist";

        this.fistAnimationName = "frost_walrus_fist";

        this.startRoarAnimationName = "frost_walrus_start_roar";

        this.roarAnimationName = "frost_walrus_roar";

        this.attackAnimationName = "frost_walrus_attack";

        this.deathAnimationName = "frost_walrus_dying";

        this.fistSound = "frost_walrus_fist_hit";

        this.roarSound = "frost_walrus_scream";

        this.attackSound = "frost_walrus_launch_ice";

        this.name = "Frost Walrus";

        this.hudColor = "#f1eeea";


        this.maxHp = 900;

        this.hp = this.maxHp;

        this.attackDamage = 38;

        this.isAttackSingle = true;

        this.gigaAttackDamage = 70;

        this.originalX = x;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "frost_walrus_idle_1",

            1200,

            this.originalY

        );

        this.targetSpawnX = x + offsetX;

        this.targetSpawnY = y + offsetY;

        //
        // hurtbox
        //

    }

    async spawn() {

        this.isBusy =
            true;

        //
        // começa fora da tela
        //

        this.sprite.x = 1200;

        this.sprite.y =
            this.targetSpawnY;

        //
        // animação light
        //

        this.sprite.play(
            this.arrivingAnimationName
        );

        //
        // desce
        //

        await this.moveTo(
            this.targetSpawnX,
            this.targetSpawnY,
            6
        );

        this.sprite.play(this.idleAnimationName);

        await this.wait(500);

        await this.playAnimation(this.startFistAnimationName);

        this.sprite.play(this.fistAnimationName);

        this.scene.sfx.play(this.fistSound, {volume: 0.15});

        await this.wait(300);

        await this.playAnimation(this.startFistAnimationName);

        this.sprite.play(this.fistAnimationName);

        this.scene.sfx.play(this.fistSound, {volume: 0.15});

        await this.wait(300);

        await this.playAnimation(this.startRoarAnimationName);

        this.scene.sfx.play(this.roarSound, {volume: 0.15});

        this.sprite.play(this.roarAnimationName);

        await this.wait(1000);

        this.sprite.play(this.idleAnimationName);



        this.createHurtbox(

            60,
            120,

            -30,
            -180

        );

        this.isBusy =
            false;

    }

    async performAttack() {

        const attacks =

            this.scene.players

                .filter(
                    player => !player.isDead
                )

                .map(

                    player =>

                        new IcicleSpearAttack(

                            this.scene,

                            "attack",

                            player,

                            this.attackDamage,

                            this

                        )

                );

        await Promise.all(

            attacks.map(

                attack => attack.fall()

            )

        );

    }
    
    async beforeTurn() {
        await this.launchIcicleSpears();
    }

    async launchIcicleSpears(){
        const leftSpear =

            new IcicleSpear(

                this.scene,

                this.sprite.x - 40,
                this.sprite.y - 260,

                "icicle_spear_left",

                "icicle_spear_left"

            );

        const rightSpear =

            new IcicleSpear(

                this.scene,

                this.sprite.x + 60,
                this.sprite.y - 200,

                "icicle_spear_right",

                "icicle_spear_right"

            );

        const leftPromise =
            leftSpear.flyUp();

        const rightPromise =
            rightSpear.flyUp();

        this.scene.sfx.play(
            this.attackSound,
            {
                volume: 0.15
            }
        );

        await this.playAnimation(
            this.attackAnimationName
        );

        this.sprite.play(
            this.idleAnimationName
        );

        await Promise.all([

            leftPromise,

            rightPromise

        ]);
    }

    async afterTurn(){
    }


    async gigaAttack() {

        await this.launchIcicleSpears();

        await this.launchIcicleSpears();

        await this.launchIcicleSpears();

        await this.launchIcicleSpears();

        const attacks =

            this.scene.players

                .filter(
                    player => !player.isDead
                )

                .map(

                    player =>

                        new IcicleSpearAttack(

                            this.scene,

                            "giga",

                            player,

                            this.gigaAttackDamage,

                            this

                        )

                );

        await Promise.all(

            attacks.map(

                attack => attack.fall()

            )

        );
    }

}