export default function
createAnimations(scene) {

    let frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `night_zero_aura_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_aura",
        frames,
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `night_zero_floating_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_floating",
        frames,
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 2; i++) {

        frames.push({
            key: `night_zero_shooting_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_start_shooting",
        frames,
        frameRate: 8,
        repeat: 0
    });

    frames = [];

    for (let i = 3; i <= 8; i++) {

        frames.push({
            key: `night_zero_shooting_${i}`
        });

    }

    scene.anims.create({
        key: "night_zero_shooting",
        frames,
        frameRate: 16,
        repeat: 0
    });



}