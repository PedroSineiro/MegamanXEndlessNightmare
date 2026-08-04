import DataManager from "../systems/DataManager.js";
import SoundManager from "../systems/SoundManager.js";

export default class DifficultyScene extends Phaser.Scene {

    constructor() {

        super(
            "DifficultyScene"
        );

    }

    create() {

        this.selectedDifficulty =
            null;

        this.sfx =
            new SoundManager(
                this
            );

        this.cameras.main.fadeIn(
            500,
            0,
            0,
            0
        );

        this.cameras.main.setBackgroundColor(
            "#000000"
        );

        this.add.text(

            500,
            120,

            "SELECT DIFFICULTY",

            {

                fontFamily:
                    "MegaManX",

                fontSize:
                    "28px",

                color:
                    "#FFFFFF"

            }

        )
        .setOrigin(0.5);

        this.easyButton =

            this.createDifficultyButton(

                "EASY",

                500,
                260,

                () => {

                    this.selectDifficulty(
                        "easy"
                    );

                }

            );

        this.normalButton =

            this.createDifficultyButton(

                "NORMAL",

                500,
                340,

                () => {

                    this.selectDifficulty(
                        "normal"
                    );

                }

            );

        this.hardButton =

            this.createDifficultyButton(

                "HARD",

                500,
                420,

                () => {

                    this.selectDifficulty(
                        "hard"
                    );

                }

            );

        this.nightmareButton =

            this.createDifficultyButton(

                "NIGHTMARE",

                500,
                500,

                () => {

                    this.selectDifficulty(
                        "nightmare"
                    );

                }

            );

        this.descriptionText =

            this.add.text(

                500,
                600,

                "",

                {

                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "16px",

                    color:
                        "#FFFFFF",

                    align:
                        "center",

                    wordWrap: {
                        width: 700
                    }

                }

            )

            .setOrigin(0.5)

            .setVisible(false);

        this.confirmButton =

            this.createDifficultyButton(

                "CONFIRM",

                500,
                700,

                () => {

                    this.confirmDifficulty();

                }

            );

        this.confirmButton.setVisible(
            false
        );

        this.backButton =

            this.createDifficultyButton(

                "BACK",

                500,
                760,

                () => {

                    this.scene.start(
                        "TitleScene"
                    );

                }

            );

    }

    selectDifficulty(
        difficulty
    ) {

        this.sfx.play(
            "buying_upgrade",
            {
                volume: 0.15
            }
        );

        this.selectedDifficulty =
            difficulty;

        const buttons = [

            this.easyButton,
            this.normalButton,
            this.hardButton,
            this.nightmareButton

        ];

        buttons.forEach(
            button => {

                button.setBackgroundColor(
                    "#000000"
                );

            }
        );

        const selectedButton = {

            easy:
                this.easyButton,

            normal:
                this.normalButton,

            hard:
                this.hardButton,
            
            nightmare:
                this.nightmareButton

        }[difficulty];

        selectedButton
            .setBackgroundColor(
                "#666666"
            );

        const descriptions = {

            easy:

`Recommended for new players.

Enemies deal less damage and have reduced health.

Perfect for learning mechanics and experimenting with upgrades.`,

            normal:

`The intended experience.

Balanced enemy stats and progression.

Recommended for most players.`,

            hard:

`For veteran hunters only.

Enemies deal significantly more damage and survive longer.

Resource management becomes critical.`,

            nightmare:

`The true challenge.

Enemies deal significantly more damage and survive longer.

Bosses start in second phase.`

        };

        this.descriptionText.setText(
            descriptions[difficulty]
        );

        this.descriptionText.setVisible(
            true
        );

        this.confirmButton.setVisible(
            true
        );

    }

    async confirmDifficulty() {

        if (
            !this.selectedDifficulty
        ) {
            return;
        }

        const buttons = [

            this.easyButton,
            this.normalButton,
            this.hardButton,
            this.nightmareButton,
            this.confirmButton,
            this.backButton

        ];

        buttons.forEach(
            button => {

                button.disableInteractive();

            }
        );

        this.sfx.play(
            "buying_upgrade",
            {
                volume: 0.15
            }
        );

        this.cameras.main.fadeOut(

            500,

            0,
            0,
            0

        );

        await new Promise(

            resolve => {

                this.time.delayedCall(

                    500,

                    resolve

                );

            }

        );

        this.scene.start(

            "SaveScene",

            {

                mode: "new_game",

                difficulty:
                    this.selectedDifficulty

            }

        );

    }

    createDifficultyButton(
        text,
        x,
        y,
        callback
    ) {

        const button =

            this.add.text(

                x,
                y,

                text,

                {

                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "22px",

                    color:
                        "#FFFFFF",

                    backgroundColor:
                        "#000000",

                    padding: {

                        left: 12,
                        right: 12,
                        top: 6,
                        bottom: 6

                    }

                }

            )

            .setOrigin(0.5)

            .setInteractive({

                useHandCursor:
                    true

            });

        button.on(

            "pointerover",

            () => {

                button.setScale(
                    1.05
                );

            }

        );

        button.on(

            "pointerout",

            () => {

                button.setScale(
                    1
                );

            }

        );

        button.on(

            "pointerdown",

            callback

        );

        return button;

    }

}