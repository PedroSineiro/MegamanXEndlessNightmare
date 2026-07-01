export default function
createAnimations(scene) {

    scene.anims.create({
        key: "night_zero_light",
        frames: [{
            key: "night_zero_light_1"
        }],
        frameRate: 8,
        repeat: 0
    });

        scene.anims.create({
        key: "night_zero_dying",
        frames: [{
            key: "night_zero_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    

    let frames = [];

    for (let i = 1; i <= 13; i++) {

        frames.push({
            key: `night_zero_spawning_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_spawning",
        frames,
        frameRate: 16,
        repeat: 0
    });


    scene.anims.create({
        key: "night_zero_idle",
        frames: [
            { key: "night_zero_idle_1" },
            { key: "night_zero_idle_2" },
            { key: "night_zero_idle_3" },
            { key: "night_zero_idle_4" },
            { key: "night_zero_idle_5" },
            { key: "night_zero_idle_6" },
            { key: "night_zero_idle_7", duration: 35 },
            { key: "night_zero_idle_8", duration: 35 },
            { key: "night_zero_idle_9", duration: 35 },
        ],
        frameRate: 4,
        repeat: -1
    });


    frames = [];

    for (let i = 1; i <= 20; i++) {

        frames.push({
            key: `night_zero_slash_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_slash",
        frames,
        frameRate: 22,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 3; i++) {

        frames.push({
            key: `night_zero_vanishing_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_vanishing",
        frames,
        frameRate: 26,
        repeat: 0
    });

    frames = [];

    for (let i = 3; i >= 1; i--) {

        frames.push({
            key: `night_zero_vanishing_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_reapearing",
        frames,
        frameRate: 26,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 23; i++) {

        frames.push({
            key: `night_zero_giga_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_giga_attack",
        frames,
        frameRate: 26,
        repeat: 0
    });



}