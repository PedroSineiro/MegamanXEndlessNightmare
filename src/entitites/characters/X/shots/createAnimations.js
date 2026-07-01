export default function
createAnimations(scene) {
    scene.anims.create({
        key: "x_basic_shot_spawn",
        frames: [
            { key: "x_basic_shot_1" },
            { key: "x_basic_shot_2" },
            { key: "x_basic_shot_3" },
            { key: "x_basic_shot_4" },
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "x_basic_shot_moving",
        frames: [
            { key: "x_basic_shot_5" },
            { key: "x_basic_shot_6" },
            { key: "x_basic_shot_7" },
            { key: "x_basic_shot_8" },
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "x_medium_shot_spawn",
        frames: [
            { key: "x_medium_shot_1" },
            { key: "x_medium_shot_2" },
            { key: "x_medium_shot_3" }
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "x_medium_shot_moving",
        frames: [
            { key: "x_medium_shot_4" },
            { key: "x_medium_shot_5" },
            { key: "x_medium_shot_6" },
            { key: "x_medium_shot_7" },
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "x_charged_shot_spawn",
        frames: [
            { key: "x_charged_shot_1" },
            { key: "x_charged_shot_2" },
            { key: "x_charged_shot_3" },
            { key: "x_charged_shot_4" }
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "x_charged_shot_moving",
        frames: [
            { key: "x_charged_shot_5" },
            { key: "x_charged_shot_6" },
            { key: "x_charged_shot_7" }
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "fourth_basic_shot_spawn",
        frames: [
            { key: "fourth_basic_shot_1" },
            { key: "fourth_basic_shot_2" },
            { key: "fourth_basic_shot_3" },
            { key: "fourth_basic_shot_4" },
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "fourth_basic_shot_moving",
        frames: [
            { key: "fourth_basic_shot_5" },
            { key: "fourth_basic_shot_6" },
            { key: "fourth_basic_shot_7" },
            { key: "fourth_basic_shot_8" },
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "fourth_medium_shot_spawn",
        frames: [
            { key: "fourth_medium_shot_1" },
            { key: "fourth_medium_shot_2" },
            { key: "fourth_medium_shot_3" }
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "fourth_medium_shot_moving",
        frames: [
            { key: "fourth_medium_shot_4" },
            { key: "fourth_medium_shot_5" },
            { key: "fourth_medium_shot_6" },
            { key: "fourth_medium_shot_7" },
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "fourth_charged_shot_spawn",
        frames: [
            { key: "fourth_charged_shot_1" },
            { key: "fourth_charged_shot_2" },
            { key: "fourth_charged_shot_3" },
            { key: "fourth_charged_shot_4" }
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "fourth_charged_shot_moving",
        frames: [
            { key: "fourth_charged_shot_5" },
            { key: "fourth_charged_shot_6" },
            { key: "fourth_charged_shot_7" }
        ],
        frameRate: 20,
        repeat: -1
    });
}