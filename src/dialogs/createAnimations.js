export default function
createAnimations(scene) {

     if (
        scene.anims.exists(
            "dialog_x_idle"
        )
    ) {
        return;
    }

    scene.anims.create({
        key: "dialog_x_idle",
        frames: [
            { key: "dialog_x_idle_1", duration: 1500 },
            { key: "dialog_x_idle_2", duration: 30 },
            { key: "dialog_x_idle_3", duration: 30 },
            { key: "dialog_x_idle_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_x_speaking",
        frames: [
            { key: "dialog_x_speaking_1", duration: 30 },
            { key: "dialog_x_speaking_2", duration: 30 },
            { key: "dialog_x_speaking_3", duration: 30 },
            { key: "dialog_x_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_fourth_idle",
        frames: [
            { key: "dialog_fourth_idle_1", duration: 1500 },
            { key: "dialog_fourth_idle_2", duration: 30 },
            { key: "dialog_fourth_idle_3", duration: 30 },
            { key: "dialog_fourth_idle_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_fourth_speaking",
        frames: [
            { key: "dialog_fourth_speaking_1", duration: 30 },
            { key: "dialog_fourth_speaking_2", duration: 30 },
            { key: "dialog_fourth_speaking_3", duration: 30 },
            { key: "dialog_fourth_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_ultimate_idle",
        frames: [
            { key: "dialog_ultimate_idle_1", duration: 1500 },
            { key: "dialog_ultimate_idle_2", duration: 30 },
            { key: "dialog_ultimate_idle_3", duration: 30 },
            { key: "dialog_ultimate_idle_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_ultimate_speaking",
        frames: [
            { key: "dialog_ultimate_speaking_1", duration: 30 },
            { key: "dialog_ultimate_speaking_2", duration: 30 },
            { key: "dialog_ultimate_speaking_3", duration: 30 },
            { key: "dialog_ultimate_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });


    scene.anims.create({
        key: "dialog_zero_idle",
        frames: [
            { key: "dialog_zero_idle_1", duration: 1500 },
            { key: "dialog_zero_idle_2", duration: 30 },
            { key: "dialog_zero_idle_3", duration: 30 },
            { key: "dialog_zero_idle_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_zero_speaking",
        frames: [
            { key: "dialog_zero_speaking_1", duration: 30 },
            { key: "dialog_zero_speaking_2", duration: 30 },
            { key: "dialog_zero_speaking_3", duration: 30 },
            { key: "dialog_zero_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_black_zero_idle",
        frames: [
            { key: "dialog_black_zero_idle_1", duration: 1500 },
            { key: "dialog_black_zero_idle_2", duration: 30 },
            { key: "dialog_black_zero_idle_3", duration: 30 },
            { key: "dialog_black_zero_idle_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_black_zero_speaking",
        frames: [
            { key: "dialog_black_zero_speaking_1", duration: 30 },
            { key: "dialog_black_zero_speaking_2", duration: 30 },
            { key: "dialog_black_zero_speaking_3", duration: 30 },
            { key: "dialog_black_zero_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_alia_idle",
        frames: [
            { key: "dialog_alia_idle_1", duration: 1500 },
            { key: "dialog_alia_idle_2", duration: 30 },
            { key: "dialog_alia_idle_3", duration: 30 },
            { key: "dialog_alia_idle_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_alia_speaking",
        frames: [
            { key: "dialog_alia_speaking_1", duration: 30 },
            { key: "dialog_alia_speaking_2", duration: 30 },
            { key: "dialog_alia_speaking_3", duration: 30 },
            { key: "dialog_alia_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_nightmare_zero_idle",
        frames: [
            { key: "dialog_nightmare_zero_idle_1", duration: 1500 },
            { key: "dialog_nightmare_zero_idle_2", duration: 30 },
            { key: "dialog_nightmare_zero_idle_3", duration: 30 },
            { key: "dialog_nightmare_zero_idle_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_nightmare_zero_speaking",
        frames: [
            { key: "dialog_nightmare_zero_speaking_1", duration: 30 },
            { key: "dialog_nightmare_zero_speaking_2", duration: 30 },
            { key: "dialog_nightmare_zero_speaking_3", duration: 30 },
            { key: "dialog_nightmare_zero_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });


}