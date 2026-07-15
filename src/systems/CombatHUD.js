export default class CombatHUD {

    constructor(
        scene,
        x = 20,
        y = 820
    ) {

        this.scene =
            scene;

        this.container =

            scene.add
                .container(
                    x,
                    y
                )

                .setDepth(
                    99999
                );

        //
        // fundo
        //

        this.background =

            scene.add
                .rectangle(

                    0,
                    0,

                    570,
                    150,

                    0x111111,
                    0.85

                )

                .setOrigin(
                    0,
                    0
                );

        //
        // textos
        //

        this.xText =

            scene.add.text(

                20,
                10,

                "",

                {
                    fontSize:
                        "14px",

                    fontFamily:
                        "MegaManX",

                    color:
                        "#66ccff"
                }

            );

        this.zeroText =

            scene.add.text(

                230,
                10,

                "",

                {
                    fontSize:
                        "14px",

                    fontFamily:
                        "MegaManX",

                    color:
                        "#ff6666"
                }

            );

        this.waveText =

            scene.add.text(

                425,
                30,

                "Wave: ",

                {
                    fontSize:
                        "14px",

                    fontFamily:
                        "MegaManX",

                    color:
                        "#ffffff"
                }

            );

        this.container.add([

            this.background,

            this.xText,

            this.zeroText,

            this.waveText

        ]);

    }

    update() {

        if (
        this.container?.destroyed ||
        this.container?.scene === undefined
        ) {

            return;
        }

        const x =
            this.scene.players[0];

        const zero =
            this.scene.players[1];

        this.xText?.setText(

        `
X
HP: ${x.hp}/${x.maxHp}
Actions: ${x.turnActions}
Evasion: ${Math.round(x.evasion * 100)}%
Reduction: ${Math.round(x.damageReduction * 100)}%` + 
(x.hasGigaAttack? `
Giga
Attack: ${Math.round((x.gigaAttackRechargeTurns/x.gigaAttackCooldown)*100)}%`: "")

                );

                this.zeroText?.setText(

        `
Zero
HP: ${zero.hp}/${zero.maxHp}
Actions: ${zero.turnActions}
Evasion: ${Math.round(zero.evasion * 100)}%
Reduction: ${Math.round(zero.damageReduction * 100)}%` + 
(zero.hasGigaAttack? `
Giga
Attack: ${Math.round((zero.gigaAttackRechargeTurns/zero.gigaAttackCooldown)*100)}%`: "")

                );


                this.waveText?.setText(
        `
Wave:${Math.min(this.scene.currentWaveIndex + 1,this.scene.totalNumberOfWaves)}/${this.scene.waves.length}`
                );

            }

}