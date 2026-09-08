export default function
createAnimations(scene) {

    scene.anims.create({
        key: "blaze_heatnix_dying",
        frames: [{
            key: "blaze_heatnix_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    let frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `blaze_heatnix_idle_${i}`
        });

    }

    scene.anims.create({
        key: "blaze_heatnix_idle",
        frames,
        frameRate: 9,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 8; i++) {

        frames.push({
            key: `blaze_heatnix_prepare_${i}`
        });

    }


    scene.anims.create({
        key: "blaze_heatnix_prepare",
        frames,
        frameRate: 12,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `blaze_heatnix_attack_${i}`
        });

    }


    scene.anims.create({
        key: "blaze_heatnix_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });


    frames = [];

    for (let i = 1; i <= 3; i++) {

        frames.push({
            key: `blaze_heatnix_giga_attack_${i}`
        });

    }

    scene.anims.create({
        key: "blaze_heatnix_giga_attack",
        frames,
        frameRate: 16,
        repeat: -1
    });
}