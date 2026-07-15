export default class DialogBox {

    constructor(scene) {

        this.scene = scene;

        this.dialogs = [];

        this.currentIndex = 0;

        this.isTyping = false;

        this.fullText = "";

        this.currentText = "";

        this.uiDepth =
            999999;

        this.typingEvent = null;

        this.createUI();

    }

    start(
        dialogs
    ) {

        return new Promise(

            resolve => {

                this.dialogs =
                    dialogs;

                this.currentIndex =
                    0;

                this.onFinished =
                    resolve;

                this.container
                    .setVisible(
                        true
                    );

                this.showCurrentDialog();

            }

        );

    }

    createUI() {

        this.container =

            this.scene.add.container(
                0,
                0
            ).setDepth(
            this.uiDepth
        );

        this.background =

            this.scene.add.rectangle(

                500,
                700,

                1000,
                200,

                0x000000

            );

        this.textBox =

            this.scene.add.rectangle(

                500,
                680,

                600,
                150,

                0x000000

            );

        this.portrait =

            this.scene.add.sprite(

                120,
                680,

                "dialog_alia_idle"

            );

        this.nameText =

            this.scene.add.text(

                220,
                620,

                "",

                {
                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "14px",

                    color:
                        "#FFFFFF"
                }

            );

        this.dialogText =

            this.scene.add.text(

                220,
                650,

                "",

                {
                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "10px",

                    color:
                        "#FFFFFF",

                    wordWrap: {
                        width: 500
                    }

                }

            );

        this.continueButton =

            this.scene.add.text(

                450,
                760,

                "CONTINUE",

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

            ).setDepth(
            this.uiDepth + 5
            ).setInteractive(
                {
                    useHandCursor:
                        true
                }
            );

        this.continueButton.on(

            "pointerdown",

            () => {

                this.onContinue();

            }

        );

        this.skipButton =

            this.scene.add.text(

                730,
                760,

                "SKIP",

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

            ).setDepth(
            this.uiDepth + 5
            ).setInteractive(
                {
                    useHandCursor:
                        true
                }
            );

        this.skipButton.on(

            "pointerdown",

            () => {

                this.onSkip();

            }

        );


        this.container.add([

            this.background,

            this.textBox,

            this.portrait,

            this.nameText,

            this.dialogText,

            this.continueButton,

            this.skipButton

        ]);

        this.container.setVisible(
            false
        );

    }

    getPortraitKey(
        speaker
    ) {

        if (
            speaker === "alia"
        ) {

            return {

                idle:
                    "dialog_alia_idle",

                speaking:
                    "dialog_alia_speaking"

            };

        }

        if (
            speaker === "x"
        ) {

            const armor =

                this.scene
                    .GameData
                    .currentArmors[0];

            return {

                idle:
                    `dialog_${armor}_idle`,

                speaking:
                    `dialog_${armor}_speaking`

            };

        }

        if (
            speaker === "zero"
        ) {

            const armor =

                this.scene
                    .GameData
                    .currentArmors[1];

            return {

                idle:
                    `dialog_${armor}_idle`,

                speaking:
                    `dialog_${armor}_speaking`

            };

        }

        if (
            speaker === "nightmare_zero"
        ) {

            return {

                idle:
                    "dialog_nightmare_zero_idle",

                speaking:
                    "dialog_nightmare_zero_speaking"

            };

        }

    }

    updateBackground(
        speaker
    ) {

        if (
            speaker === "alia"
        ) {

            this.background
                .setFillStyle(
                    0xff99cc
                );

        }

        else if(
            speaker === "x"
        ) {

            this.background
                .setFillStyle(
                    0x173aff
                );

        } else if(
            speaker === "zero"
        ) {

            this.background
                .setFillStyle(
                    0xf71e1e
                );

        } else if(
            speaker === "nightmare_zero"
        ) {

            this.background
                .setFillStyle(
                    0xfc03f8
                );

        }
        

    }

    async typeText(
        text
    ) {

        this.isTyping =
            true;

        this.currentText =
            text;

        this.dialogText
            .setText("");

        for (

            let i = 0;

            i < text.length;

            i++

        ) {

            if (
                !this.isTyping
            ) {

                break;

            }

            this.dialogText.setText(

                text.substring(
                    0,
                    i + 1
                )

            );

            this.scene.sfx.play(
                "text_beep", {
                    volume: 0.1
                }
            );

            await this.wait(
                25
            );

        }

        this.dialogText.setText(
            text
        );

        this.isTyping =
            false;

    }

    onContinue() {

        //
        // ainda digitando?
        //

        if (
            this.isTyping
        ) {

            this.isTyping =
                false;

            this.dialogText
                .setText(
                    this.currentText
                );

            return;

        }

        //
        // próxima fala
        //

        this.currentIndex++;

        this.showCurrentDialog();

    }

    onSkip() {

        this.isTyping = false;

        this.currentIndex = this.dialogs.length;

        this.showCurrentDialog();


    }

    async showCurrentDialog() {

        if (

            this.currentIndex >=

            this.dialogs.length

        ) {

            this.close();

            return;

        }

        const dialog =

            this.dialogs[
                this.currentIndex
            ];

        const portrait =

            this.getPortraitKey(
                dialog.speaker
            );

        this.updateBackground(
            dialog.speaker
        );

        this.nameText.setText(
            dialog.speaker.replaceAll("_", " ").toUpperCase()
        );

        this.portrait.setFlipX(
            this.shouldFlipPortrait(
                dialog.speaker
            )
        );

        this.portrait.play(
            portrait.speaking
        );

        await this.typeText(
            dialog.text
        );

        this.portrait.play(
            portrait.idle
        );

    }

    shouldFlipPortrait(
        speaker
    ) {

        return [

            "alia",
            "x",
            "zero"

        ].includes(
            speaker
        );

    }

    close() {

        this.container
            .setVisible(
                false
            );

        this.dialogText
            .setText(
                ""
            );

        this.nameText
            .setText(
                ""
            );

        this.onFinished
            ?.();

        this.onFinished =
            null;

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
}