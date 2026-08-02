export default function
createAnimations(scene) {

    const CHARACTERS = [

        "x",

        "fourth",

        "ultimate",

        "falcon",

        "blade",

        "zero",

        "black_zero",

        "alia",

        "nightmare_zero",

        "dynamo",

    ];

    CHARACTERS.forEach(character => {
        scene.anims.create({
            key: `dialog_${character}_idle`,
            frames: [
                { key: `dialog_${character}_idle_1`, duration: 1500 },
                { key: `dialog_${character}_idle_2`, duration: 30 },
                { key: `dialog_${character}_idle_3`, duration: 30 },
                { key: `dialog_${character}_idle_2`, duration: 30 }
            ],
            frameRate: 16,
            repeat: -1
        });

        scene.anims.create({
            key: `dialog_${character}_speaking`,
            frames: [
                { key: `dialog_${character}_speaking_1`, duration: 30 },
                { key: `dialog_${character}_speaking_2`, duration: 30 },
                { key: `dialog_${character}_speaking_3`, duration: 30 },
                { key: `dialog_${character}_speaking_2`, duration: 30 }
            ],
            frameRate: 16,
            repeat: -1
        });
    });

    scene.anims.create({
        key: "dialog_high_max_idle",
        frames: [
            { key: "dialog_high_max_idle_1" }
        ],
        frameRate: 0,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_high_max_speaking",
        frames: [
            { key: "dialog_high_max_speaking_1", duration: 30 },
            { key: "dialog_high_max_speaking_2", duration: 30 },
            { key: "dialog_high_max_speaking_3", duration: 30 },
            { key: "dialog_high_max_speaking_2", duration: 30 }
        ],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "dialog_sigma_idle",
        frames: [
            { key: "dialog_sigma_idle_1" }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "dialog_sigma_speaking",
        frames: [
            { key: "dialog_sigma_idle_1" }
        ],
        frameRate: 16,
        repeat: 0
    });


}