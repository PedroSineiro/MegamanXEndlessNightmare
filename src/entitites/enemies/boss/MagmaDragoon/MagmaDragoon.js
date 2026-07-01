import BaseBoss from "../../BaseBoss.js";
import BaseShot from "../../BaseShot.js";

export default class
MagmaDragoon
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
            "magma_dragoon";

        this.fallingAnimationName = "magma_dragoon_arriving";

        this.idleAnimationName = "magma_dragoon_idle";

        this.startHadokenUpAnimationName = "magma_dragoon_start_hadoken_up";

        this.hadokenUpAnimationName = "magma_dragoon_hadoken_up";

        this.startHadokenDownAnimationName = "magma_dragoon_start_hadoken_down";

        this.hadokenDownAnimationName = "magma_dragoon_hadoken_down";

        this.startGigaAttackAnimationName = "magma_dragoon_start_giga_attack";

        this.gigaAttackAnimationName = "magma_dragoon_giga_attack";

        this.deathAnimationName = "magma_dragoon_dying";

        this.hadokenVoice = "magma_dragoon_hadoken";

        this.name = "Magma Dragoon";

        this.hudColor = "#c70404";

        this.flameSound =

            scene.sound.add(
                "magma_dragoon_flame"
            );

        this.hp = 800;

        this.maxHp = 800;

        this.attackDamage = 44;

        this.gigaAttackDamage = 21;

        this.originalY = y;

        //
        // sprite
        //

        this.setupSprite(

            "magma_dragoon_falling_1",

            x,

            -300

        );

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

        this.sprite.y =
            -300;

        //
        // animação light
        //

        this.sprite.play(
            this.fallingAnimationName
        );

        //
        // desce
        //

        await this.moveToY(

            this.targetSpawnY,
            15

        );

        //
        // aterrissagem
        //

        this.scene.sfx.play("magma_dragoon_landing",{
            volume: 0.2
        });


        await this.playAnimation(

            this.idleAnimationName

        );

        this.createHurtbox(

            60,
            120,

            -30,
            -180

        );

        this.isBusy =
            false;

    }

    async performAttack(
        target
    ) {
        let startHadokenAnimationName = target.filename==="x"?this.startHadokenUpAnimationName:this.startHadokenDownAnimationName;
        let hadokenAnimationName = target.filename==="x"?this.hadokenUpAnimationName:this.hadokenDownAnimationName;
        let hadokenStartYoffset = target.filename==="x"?186:130;


        await this.playAnimation(
            startHadokenAnimationName
        );

        this.scene.sfx.play("hadoken", {volume: 0.15});

        this.scene.sfx.play("magma_dragoon_flame",{volume: 0.15})

        this.sprite.play(
            hadokenAnimationName,
            true
        );

        
        //
        // ponto do disparo
        //

        const startX =

            this.sprite.x +

            (
                this.direction === 1
                ? 50
                : -50
            );

        const startY =
            this.sprite.y - hadokenStartYoffset;

        //
        // centro da hurtbox
        //

        let targetX =

            target.hurtbox.x +

            target.hurtbox.width
            / 2;

        let targetY =

            target.hurtbox.y +

            target.hurtbox.height
            / 2;

        //
        // direção do tiro
        //

        const angle =

            Phaser.Math
                .Angle
                .Between(

                    startX,
                    startY,

                    targetX,
                    targetY

                );

        const speed =
            8;

        const velocityX =

            Math.cos(angle) *
            speed;

        const velocityY =

            Math.sin(angle) *
            speed;

        //
        // cria tiro
        //

        this.hadoken(startX, startY, velocityX, velocityY);

        await this.wait(800);

        this.sprite.play(this.idleAnimationName);

        await this.wait(
            500
        );

    }


    async gigaAttack() {

        await this.playAnimation(
            this.startGigaAttackAnimationName
        );

        this.flameSound.play({volume:0.15, loop: true});

        this.sprite.play(
            this.gigaAttackAnimationName
        );


        this.randomFireBalls(8);


        this.spawnTargetedFireball(
            this.scene.players.find(
                p => p.filename === "x"
            )
        );

        this.spawnTargetedFireball(
            this.scene.players.find(
                p => p.filename === "zero"
            )
        );

        await this.wait(2000);

        this.randomFireBalls(8);


        this.spawnTargetedFireball(
            this.scene.players.find(
                p => p.filename === "x"
            )
        );

        //
        // Fireball para Zero
        //

        this.spawnTargetedFireball(
            this.scene.players.find(
                p => p.filename === "zero"
            )
        );

        this.randomFireBalls(2);



        await this.wait(
            3000
        );

        this.flameSound.stop();

        this.sprite.play(
            this.idleAnimationName
        );

    }

    async randomFireBalls(amount = 4){
        for (
            let i = 0;
            i < amount;
            i++
        ) {

            let roll =
            Math.random();

            this.fireball(

                roll>0.5?(500 +
                Phaser.Math.Between(
                    200,
                    0
                )): (1150 +
                Phaser.Math.Between(
                    200,
                    0
                )),
                
                -200,

                -12,
                12,

                false

            );

            await this.wait(300);

        }
    }

    spawnTargetedFireball(
        target
    ) {

        if (
            !target ||
            target.isDead
        ) {
            return;
        }

        const velocityX =
            -12;

        const velocityY =
            12;

        //
        // Descobre onde a fireball
        // precisa nascer para cruzar
        // exatamente o alvo
        //

        const t = 50;

        const startX =

            target.sprite.x -

            velocityX * t - 100;

        const startY =

            target.sprite.y -

            velocityY * t;

        this.fireball(

            startX,
            startY,

            velocityX,
            velocityY,

        );

    }

    hadoken(startX, startY, velocityX, velocityY) {
    
            const shot =
    
                new BaseShot(
    
                    this.scene,
    
                    startX,
                    startY,
    
                    velocityX,
                    velocityY,
    
                    this.attackDamage,
                    this,
                    "hadoken_1",
                    "hadoken",
                    true,
                    40,
                    40,
                    false
    
                );
    
            this.shots.push(
                shot
            );
    
        }

    fireball(startX, startY, velocityX, velocityY) {

        const shot =

            new BaseShot(

                this.scene,

                startX,
                startY,

                velocityX,
                velocityY,

                this.gigaAttackDamage,
                this,
                "magma_dragoon_fireball",
                "magma_dragoon_fireball",
                true,
                40,
                40,
                false,
                false

            );

        this.shots.push(
            shot
        );

    }

    shootGigaAttack(
        startX,
        startY
    ) {

        const charactersHit = [];

        this.scene.players.forEach(
            (player) => {
                const hit = this.tryHitTarget(player)
                if(hit) charactersHit.push(player.filename)
            }

        )

        this.scene.sfx.play(
            "night_zero_saber",
            {
                volume: 0.2
            }
        );

        const shot =

            new GigaAttack(

                this.scene,

                startX,
                startY,

                -14,
                0,

                20,
                charactersHit

            );

        this.shots.push(
            shot
        );

    }

}