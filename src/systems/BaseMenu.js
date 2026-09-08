export default class BaseMenu {

    constructor(
        scene
    ) {

        this.scene =
            scene;

        this.buttons =
            [];

        this.confirmButton = null;

        this.createUpgradeButtons();

    }

    createUpgradeButtons() {

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

            680,

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

            "Axl Upgrades",

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
                        "axl"
                    );

            }

        );


        this.addButton(

            "Next Mission",

            420,

            680,

            () => {
                this.scene.sfx.play("equiping_armor", {volume: 0.15});

                this.scene.showTeamSelectScreen();

                this.resetButtons();

                this.scene.clearScreen();

                this.createTeamSelectButtons();
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

                this.scene.DataManager.saveSaveData(
                    this.scene.GameData
                );

                this.scene.SaveNotificator.notify();

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

    createTeamSelectButtons() {

        this.confirmButton = this.addButton(

            "Confirm",

            250,

            680,

            () => {

                this.scene.sfx.play(
                    "buying_upgrade",
                    {
                        volume: 0.2
                    }
                );


                this.scene.goToMissions();

            }

        );

        this.confirmButton.setVisible(false);

        this.confirmButton.on(
                    "pointerdown",
                    () => {
                        this.confirmButton.disableInteractive();
                    }
                );

        this.addButton(

            "Cancel",

            650,

            680,

            () => {

                this.scene.sfx.play(
                    "choosing_menu",
                    {
                        volume: 0.2
                    }
                );

                this.scene.characterSelector.cancelSelection();

            }

        );

    }

    resetButtons() {
        this.buttons.forEach(button => button.destroy());

        this.buttons = [];
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