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
                    100000
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

        this.container.add(
            this.background
        );

        //
        // personagens
        //

        this.playerTexts = [];

        this.createPlayerTexts();

        //
        // wave
        //

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

        this.container.add(
            this.waveText
        );

    }

    createPlayerTexts() {

        const players =
            this.scene.players || [];

        players.forEach(

            (player, index) => {

                const config =
                    this.getPlayerConfig(
                        player
                    );

                //
                // posição
                //

                const x =
                    20 + (index * 210);

                const text =

                    this.scene.add.text(

                        x,
                        10,

                        "",

                        {

                            fontSize:
                                "14px",

                            fontFamily:
                                "MegaManX",

                            color:
                                config.color

                        }

                    );

                this.container.add(
                    text
                );

                this.playerTexts.push({

                    player:
                        player,

                    text:
                        text,

                    config:
                        config

                });

            }

        );

    }

    getPlayerConfig(player) {

        const filename =
            player.filename;

        //
        // X
        //

        if (
            filename === "x"
        ) {

            return {

                title:
                    "X",

                color:
                    "#66ccff"

            };

        }

        //
        // Zero
        //

        if (
            filename === "zero"
        ) {

            return {

                title:
                    "Zero",

                color:
                    "#ff6666"

            };

        }

        //
        // Axl
        //

        if (
            filename === "axl"
        ) {

            return {

                title:
                    "Axl",

                color:
                    "#0a3686"

            };

        }

        //
        // fallback
        //

        return {

            title:
                player.filename || "Unknown",

            color:
                "#ffffff"

        };

    }

    update() {

        if (

            this.container?.destroyed ||

            this.container?.scene ===
            undefined

        ) {

            return;

        }

        //
        // caso a composição dos players
        // tenha mudado
        //

        if (

            this.playerTexts.length !==
            this.scene.players.length

        ) {

            this.rebuild();

        }

        this.playerTexts.forEach(

            data => {

                const player =
                    data.player;

                if (!player) {
                    return;
                }

                const gigaText =

                    player.hasGigaAttack

                    ? `\nGiga\nAttack: ${
                        Math.round(
                            (
                                player
                                    .gigaAttackRechargeTurns /

                                player
                                    .gigaAttackCooldown

                            ) * 100
                        )
                    }%`

                    : "";

                data.text.setText(

                    `${data.config.title}
HP: ${player.hp}/${player.maxHp}
Actions: ${player.turnActions}
Evasion: ${Math.round(player.evasion * 100)}%
Reduction: ${Math.round(player.damageReduction * 100)}%${gigaText}`

                );

            }

        );

        //
        // wave
        //

        this.waveText?.setText(

            `Wave:${Math.min(
                this.scene.currentWaveIndex + 1,
                this.scene.totalNumberOfWaves
            )}/${this.scene.waves.length}`

        );

    }

    rebuild() {

        this.playerTexts.forEach(

            data => {

                data.text?.destroy();

            }

        );

        this.playerTexts = [];

        this.createPlayerTexts();

    }

}