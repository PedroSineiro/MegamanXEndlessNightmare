import AchievementManager from "../systems/AchievementManager.js";
import SoundManager from "../systems/SoundManager.js";

export default class UIScene extends Phaser.Scene {

    constructor() {

        super(
            "UIScene"
        );

    }

    create() {

        this.scene.bringToTop();

        this.sfx =
            new SoundManager(
                this
        );

        this.queue = [];

        this.isShowing = false;

        AchievementManager.setUIScene(
            this
        );

    }

    async showAchievement(
        achievement
    ) {

        this.queue.push(
            achievement
        );

        this.processQueue();

    }

    async processQueue() {

        if (
            this.isShowing
        ) {
            return;
        }

        if (
            this.queue.length === 0
        ) {
            return;
        }

        this.isShowing =
            true;

        const achievement =
            this.queue.shift();

        await this.displayAchievement(
            achievement
        );

        this.isShowing =
            false;

        this.processQueue();

    }

    async displayAchievement(
        achievement
    ) {

        this.sfx.play("equiping_armor", {volume: 0.15});

        const container =

            this.add.container(
                1200,
                80
            );

        const bg =

            this.add.rectangle(
                0,
                0,
                350,
                80,
                0x000000,
                0.9
            );

        bg.setStrokeStyle(
            2,
            0xffffff
        );

        const title =

            this.add.text(
                -155,
                -22,

                "ACHIEVEMENT UNLOCKED",

                {
                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "14px",

                    color:
                        "#FFD700"
                }

            );

        const name =

            this.add.text(
                -155,
                5,

                achievement.name,

                {
                    fontFamily:
                        "MegaManX",

                    fontSize:
                        "10px",

                    color:
                        "#FFFFFF"
                }

            );

        container.add([
            bg,
            title,
            name
        ]);

        container.setDepth(
            999999
        );

        //
        // entrar
        //

        this.tweens.add({

            targets:
                container,

            x:
                810,

            duration:
                400

        });

        await this.wait(
            4000
        );

        //
        // sair
        //

        await new Promise(
            resolve => {

                this.tweens.add({

                    targets:
                        container,

                    x:
                        1200,

                    duration:
                        400,

                    onComplete: () => {

                        container.destroy();

                        resolve();

                    }

                });

            }
        );

    }

    wait(ms) {

        return new Promise(
            resolve => {

                this.time.delayedCall(

                    ms,

                    resolve

                );

            }
        );

    }

}