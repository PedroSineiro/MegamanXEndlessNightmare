export default class BaseMenu {

    constructor(
        scene
    ) {

        this.scene =
            scene;

        this.buttons =
            [];

        this.createButtons();

    }

    createButtons() {

        this.addButton(

            "X Upgrades",

            100,

            640,

            () => {

                this.scene.sfx.play(
                    "choosing_menu",
                    {
                        volume: 0.2
                    }
                );

                this.scene
                    .showUpgradeScreen(
                        "x"
                    );

            }

        );

        this.addButton(

            "Zero Upgrades",
            100,

            720,

            () => {

                this.scene.sfx.play(
                    "choosing_menu",
                    {
                        volume: 0.2
                    }
                );

                this.scene
                    .showUpgradeScreen(
                        "zero"
                    );

            }

        );


        this.addButton(

            "Next Mission",

            420,

            680,

            () => {
                this.scene.sfx.play("equiping_armor", {volume: 0.15});

                this.scene.DataManager.saveGameData(this.scene.GameData);

                const sceneData = this.scene.InterSceneManager.handleNextSceneAfterBase(this.scene.GameData, this.scene.DataManager);

                this.scene.goCombatScene(sceneData);
            }

        );

        this.addButton(

            "Save Game",

            740,

            640,

            () => {

                this.scene.sfx.play(
                    "selecting_menu",
                    {
                        volume: 0.2
                    }
                );

                this.scene.DataManager.saveSaveData(this.scene.GameData);

            }

        );

        const leaveButton = this.addButton(

            "Leave To Title Screen",
            740,

            720,

            async () => {

                    this.scene.sfx.play(
                        "buying_upgrade",
                        {
                            volume: 0.2
                        }
                    );

                    this.scene.goTitleScene();
                    }

        );

        leaveButton.on(
                    "pointerdown",
                    () => {
                        leaveButton.disableInteractive();
                    }
                );
    }

    addButton(
        text,
        x,
        y,
        callback
    ) {

        const button =

            this.scene
                .add
                .text(

                    x,

                    y,

                    text,

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px",

                        backgroundColor:
                            "#000",

                        padding: {

                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5

                        }

                    }

                )

                .setInteractive({
                    useHandCursor:
                        true
                })
                .setDepth(
                    99999
                )
                .on(
                    "pointerdown",
                    () => {


                        callback?.();

                    }
                );

        this.buttons.push(
            button
        );

        return button;
    }

}