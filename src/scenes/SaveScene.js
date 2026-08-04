import DataManager from "../systems/DataManager.js";
import InterSceneManager from "../systems/InterSceneManager.js";
import SoundManager from "../systems/SoundManager.js";

export default class SaveScene extends Phaser.Scene {

    constructor() {

        super(
            "SaveScene"
        );

    }

    init(data) {

        this.mode =
            data.mode;

        this.difficulty =
            data.difficulty;

        this.InterSceneManager = InterSceneManager;

    }

    preload() {

        //
        // armaduras X
        //

        this.load.image(
            "x_empty_armor",
            "assets/images/ui/x_empty_armor.png"
        );

        this.load.image(
            "fourth_empty_armor",
            "assets/images/ui/fourth_empty_armor.png"
        );

        this.load.image(
            "ultimate_empty_armor",
            "assets/images/ui/ultimate_empty_armor.png"
        );

        this.load.image(
            "falcon_empty_armor",
            "assets/images/ui/falcon_empty_armor.png"
        );

        this.load.image(
            "blade_empty_armor",
            "assets/images/ui/blade_empty_armor.png"
        );

        //
        // armaduras Zero
        //

        this.load.image(
            "zero_empty_armor",
            "assets/images/ui/zero_empty_armor.png"
        );

        this.load.image(
            "black_zero_empty_armor",
            "assets/images/ui/black_zero_empty_armor.png"
        );

    }

    create() {

        this.sfx =
            new SoundManager(
                this
            );

        this.selectedSlot =
            null;

        this.slotBackgrounds =
            [];

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
            80,

            "SELECT YOUR SAVE",

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

        const saves =
            DataManager.getAllSaves();

        this.createSaveSlot(
            1,
            saves[0],
            220
        );

        this.createSaveSlot(
            2,
            saves[1],
            420
        );

        this.createSaveSlot(
            3,
            saves[2],
            620
        );

        //
        // confirm
        //

        this.confirmButton =

            this.createMenuButton(

                "CONFIRM",

                500,
                770,

                () => {

                    this.confirmSlot();

                }

            );

        this.confirmButton.setVisible(
            false
        );

        //
        // back
        //

        this.backButton =

            this.createMenuButton(

                "BACK",

                820,
                770,

                () => {

                    this.goBack();

                }

            );

    }

    createSaveSlot(
        slotNumber,
        saveData,
        y
    ) {

        const background =

            this.add.rectangle(

                500,
                y,

                820,
                150,

                0x222222

            );

        background.setStrokeStyle(
            2,
            0xffffff
        );

        background.setInteractive({
            useHandCursor:
                true
        });

        this.slotBackgrounds.push(
            background
        );

        background.on(

            "pointerdown",

            () => {

                //
                // não permite carregar
                // slot vazio
                //

                if (

                    this.mode ===
                    "load_game"

                    &&

                    !saveData

                ) {
                    return;
                }

                this.selectSlot(
                    slotNumber,
                    background
                );

            }

        );

        //
        // título
        //

        this.add.text(

            120,
            y - 55,

            `SLOT ${slotNumber}`,

            {

                fontFamily:
                    "MegaManX",

                fontSize:
                    "18px",

                color:
                    "#FFFFFF"

            }

        );

        //
        // vazio
        //

        if(!saveData){

            this.add.text(

                500,
                y,

                "NO DATA",

                {

                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "24px",

                    color:
                        "#FFFFFF"

                }

            )

            .setOrigin(0.5);

            return;

        }

        //
        // infos
        //

        this.add.text(

            120,
            y - 20,

            `Difficulty: ${saveData.difficulty.toUpperCase()}`,

            this.getInfoStyle()

        );

        this.add.text(

            120,
            y + 10,

            `Stages Completed: ${saveData.amountCompletedStages}`,

            this.getInfoStyle()

        );

        this.add.text(

            120,
            y + 40,

            `Nightmare Level: ${saveData.nightmareLevel}`,

            this.getInfoStyle()

        );

        //
        // armaduras
        //

        const xArmor = saveData.currentArmors[0];

        const zeroArmor = saveData.currentArmors[1];

        this.add.image(

            700,
            y,

            `${xArmor}_empty_armor`

        )

        .setScale(1.6);

        this.add.image(

            780,
            y,

            `${zeroArmor}_empty_armor`

        )

        .setScale(1.6);

    }

    getInfoStyle() {

        return {

            fontFamily:
                "MegaManX",

            fontSize:
                "14px",

            color:
                "#FFFFFF"

        };

    }

    selectSlot(
        slotNumber,
        background
    ) {

        this.sfx.play(
            "buying_upgrade",
            {
                volume: 0.15
            }
        );

        this.selectedSlot =
            slotNumber;

        this.slotBackgrounds.forEach(
            bg => {

                bg.fillColor =
                    0x222222;

            }
        );

        background.fillColor =
            0x666666;

        this.confirmButton.setVisible(
            true
        );

    }

    async confirmSlot() {

        if(
            this.selectedSlot ==
            null
        ){
            return;
        }

        DataManager.setPointer(
            this.selectedSlot
        );

        this.disableButtons();

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

        //
        // NEW GAME
        //

        if(
            this.mode ===
            "new_game"
        ){

            this.scene.start(

                "IntroScene",

                {

                    difficulty:
                        this.difficulty

                }

            );

            return;

        }

        //
        // LOAD GAME
        //

        const saveData =

            DataManager.loadSaveData();

        if(saveData.amountCompletedStages == 0){
            const sceneData = this.InterSceneManager.handleNextSceneAfterBase(saveData, DataManager);

            this.scene.start(

            "CombatScene", sceneData.data);
        } else {
            this.scene.start(

                "BaseScene",

                saveData

            );
        }

    }

    disableButtons() {

        this.confirmButton
            ?.disableInteractive();

        this.backButton
            ?.disableInteractive();

        this.slotBackgrounds
            .forEach(

                bg => {

                    bg.disableInteractive();

                }

            );

    }

    goBack() {

        if(
            this.mode ===
            "new_game"
        ){

            this.scene.start(
                "DifficultyScene"
            );

            return;

        }

        this.scene.start(
            "TitleScene"
        );

    }

    createMenuButton(
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

                    stroke:
                        "#000000",

                    strokeThickness:
                        6

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