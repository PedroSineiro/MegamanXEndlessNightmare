export default function
createAnimations(scene) {

    scene.anims.create({
        key: "nightmare_snake_dying",
        frames: [{
            key: "nightmare_snake_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    let frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `nightmare_snake_idle_${i}`
        });

    }

    for (let i = 3; i >= 1; i--) {

        frames.push({
            key: `nightmare_snake_idle_${i}`
        });

    }

    scene.anims.create({
        key: "nightmare_snake_idle",
        frames,
        frameRate: 14,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `nightmare_snake_boost_${i}`
        });

    }

    scene.anims.create({
        key: "nightmare_snake_boost",
        frames,
        frameRate: 20,
        repeat: -1
    });
}