export default function
createAnimations(scene) {

    scene.anims.create({
        key: "burn_dinorex_arriving",
        frames: [{
            key: "burn_dinorex_falling_1"
        },
        {
            key: "burn_dinorex_falling_2"
            }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "burn_dinorex_dying",
        frames: [{
            key: "burn_dinorex_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    let frames = [];

    for (let i = 1; i <= 8; i++) {

        frames.push({
            key: `burn_dinorex_idle_${i}`
        });

    }

    scene.anims.create({
        key: "burn_dinorex_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });


    frames = [];

    for (let i = 1; i <= 3; i++) {

        frames.push({
            key: `burn_dinorex_landing_${i}`
        });

    }


    scene.anims.create({
        key: "burn_dinorex_landing",
        frames,
        frameRate: 20,
        repeat: 0
    });

    frames = [];

    for (let i = 3; i >= 1; i--) {

        frames.push({
            key: `burn_dinorex_landing_${i}`
        });

    }


    scene.anims.create({
        key: "burn_dinorex_start_jumping",
        frames,
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "burn_dinorex_jumping",
        frames: [{
            key: "burn_dinorex_jumping_1"
        },
        {
            key: "burn_dinorex_jumping_2"
            }],
        frameRate: 12,
        repeat: -1
    });
    

    frames = [];

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `burn_dinorex_start_attack_${i}`
        });

    }


    scene.anims.create({
        key: "burn_dinorex_start_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 6; i++) {

        frames.push({
            key: `burn_dinorex_attack_${i}`
        });

    }


    scene.anims.create({
        key: "burn_dinorex_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });


    frames = [];

    for (let i = 1; i <= 3; i++) {

        frames.push({
            key: `burn_dinorex_giga_attack_${i}`
        });

    }

    scene.anims.create({
        key: "burn_dinorex_giga_attack",
        frames,
        frameRate: 16,
        repeat: -1
    });
}