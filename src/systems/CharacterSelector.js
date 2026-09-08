export default class CharacterSelector {

    constructor(scene) {

        this.scene = scene;

        this.selectedCharacters = [];

        this.uiElements = [];

        this.characterCards = [];

        const currentArmors = this.scene.getCurrentArmors();

        this.currentArmors = {
            x: currentArmors[0],
            zero: currentArmors[1],
            axl: currentArmors[2]
        }

        this.create();

    }

    create() {

        this.instructionText =

            this.scene.add.text(

                280,
                80,

                "Choose two Hunters for the next mission.\nThe remaining Hunter will protect the base.",

                {
                    fontFamily: "MegaManX",
                    fontSize: "10px",
                    align: "center",
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

            .setDepth(99999);

        this.uiElements.push(
            this.instructionText
        );

        this.createCharacterCards();

    }

    createCharacterCards() {

        this.createCharacterCard(
            "x",
            250,
            250
        );

        this.createCharacterCard(
            "zero",
            500,
            250
        );

        this.createCharacterCard(
            "axl",
            750,
            250
        );

    }

    createCharacterCard(
        filename,
        x,
        y
    ) {

    const background =

        this.scene.add.rectangle(

            x,
            y,

            180,
            180,

            0x000000

        );

    const sprite =

        this.scene.add.sprite(

            x,
            y,

            filename

        );

    sprite.play(
        `${this.currentArmors[filename]}_idle`
    );

    sprite.setScale(2);

    const container =

        this.scene.add.container(
            0,
            0,
            [
                background,
                sprite
            ]
        );

    background
        .setInteractive(
            { useHandCursor: true }
        )
        .on(
            "pointerdown",
            () => {

                this.toggleCharacter(
                    filename,
                    background,
                    sprite
                );

            }
        );

        this.characterCards.push({

                filename,

                background,

                sprite

        });

        this.uiElements.push(
            container
        );

    }

    toggleCharacter(
        filename,
        background,
        sprite
    ) {

        const selected =

            this.selectedCharacters.includes(
                filename
            );

        if(selected) {

            this.selectedCharacters =

                this.selectedCharacters.filter(
                    c => c !== filename
                );

            background.fillColor =
                0x000000;

            sprite.play(
                `${this.currentArmors[filename]}_idle`,
                true
            );

            this.scene.sfx.play(
                "choosing_menu",
                {
                    volume: 0.2
                }
            );

            this.scene.enableNextMission(false);

            return;
        }

        if(
            this.selectedCharacters.length >= 2
        ) {
            return;
        }

        this.scene.sfx.play("equiping_armor", {volume: 0.15});

        this.selectedCharacters.push(
            filename
        );

        background.fillColor =
            0x00aa00;

        sprite.play(
            `${this.currentArmors[filename]}_victory`,
            true
        );

        if(this.selectedCharacters.length == 2) {
            this.scene.enableNextMission();
        }

    }

    cancelSelection() {

        if(
            this.selectedCharacters.length > 0
        ) {

            this.scene.enableNextMission(false);

            const lastCharacter =

                this.selectedCharacters.pop();

            const card =

                this.characterCards.find(
                    c => c.filename === lastCharacter
                );

            card.background.fillColor =
                0x000000;

            card.sprite.play(
                `${this.currentArmors[lastCharacter]}_idle`,
                true
            );

            return;
        }

        this.destroy();

        this.scene.BaseMenu.resetButtons();

        this.scene.BaseMenu.createUpgradeButtons();

    }

    destroy() {

        this.uiElements.forEach(
            e => e.destroy()
        );

        this.uiElements = [];

    }

}