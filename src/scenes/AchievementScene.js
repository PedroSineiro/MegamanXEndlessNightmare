import { ACHIEVEMENTS } from "../constants/AchievementDefinition.js";
import AchievementManager from "../systems/AchievementManager.js";

export default class AchievementScene extends Phaser.Scene {

    constructor() {
        super("AchievementScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#000000");

        const title = this.add.text(
            500,
            60,
            "ACHIEVEMENTS",
            {
                fontFamily: "MegaManX",
                fontSize: "32px",
                color: "#FFFFFF"
            }
        ).setOrigin(0.5);

        const text = this.add.text(
            500,
            90,
            "Use mouse wheel to scroll",
            {
                fontFamily: "MegaManX",
                fontSize: "12px",
                color: "#AAAAAA"
            }
        ).setOrigin(0.5);

        this.scrollContainer =
            this.add.container(0, 0);

        this.scrollContainer.add([
                    title,
                    text
                ]);

        let y = 160;

        Object.values(ACHIEVEMENTS)
            .forEach(achievement => {

                const unlocked =
                    AchievementManager.isUnlocked(
                        achievement.id
                    );

                const bg = this.add.rectangle(
                    500,
                    y,
                    850,
                    70,
                    0x222222
                );

                const name = this.add.text(
                    100,
                    y - 15,

                    unlocked
                        ? achievement.name
                        : "????",

                    {
                        fontFamily: "MegaManX",
                        fontSize: "20px",

                        color:

                            unlocked

                            ? "#FFFFFF"

                            : "#777777"
                    }
                );

                const description =
                    this.add.text(

                        100,
                        y + 10,

                        achievement.description,

                        {
                            fontFamily: "MegaManX",
                            fontSize: "12px",

                            color:

                                unlocked

                                ? "#CCCCCC"

                                : "#666666"
                        }
                    );

                this.scrollContainer.add([
                    bg,
                    name,
                    description
                ]);

                y += 90;

            });

        this.minScroll =
            Math.min(

                0,

                720 - y

            );

        this.maxScroll =
            0;

        this.input.on(

            "wheel",

            (

                pointer,

                gameObjects,

                deltaX,

                deltaY

            ) => {

                this.scrollContainer.y -=
                    deltaY * 0.5;

                this.scrollContainer.y =

                    Phaser.Math.Clamp(

                        this.scrollContainer.y,

                        this.minScroll,

                        this.maxScroll

                    );

            }

        );

        this.createButton(

            "BACK",

            500,
            740,

            () => {

                this.scene.start(
                    "TitleScene"
                );

            }

        );

    }

    createButton(
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

            () => button.setScale(
                1.05
            )

        );

        button.on(

            "pointerout",

            () => button.setScale(
                1
            )

        );


        button.on(

            "pointerdown",

            () => {

                callback?.();

            }

        );

        return button;

    }

}