export default function
createAnimations(scene) {

    scene.anims.create({
        key: "crescent_grizzly_arriving",
        frames: [{
            key: "crescent_grizzly_falling_1"
        }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "crescent_grizzly_dying",
        frames: [{
            key: "crescent_grizzly_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    let frames = [];

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `crescent_grizzly_idle_${i}`
        });

    }

    scene.anims.create({
        key: "crescent_grizzly_idle",
        frames,
        frameRate: 3,
        repeat: -1
    });


    frames = [];


    frames.push({
        key: "crescent_grizzly_landing_1"
    });



    scene.anims.create({
        key: "crescent_grizzly_landing",
        frames,
        frameRate: 6,
        repeat: 0
    });

    frames = [];


    frames.push({
        key: "crescent_grizzly_falling_1"
    });



    scene.anims.create({
        key: "crescent_grizzly_falling",
        frames,
        frameRate: 20,
        repeat: 0
    });

    frames = [];

    frames.push({
        key: "crescent_grizzly_start_jumping_1"
    });


    scene.anims.create({
        key: "crescent_grizzly_start_jumping",
        frames,
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "crescent_grizzly_jumping",
        frames: [{
            key: "crescent_grizzly_jumping_1"
        }],
        frameRate: 12,
        repeat: -1
    });

    frames = [];

    for (let i = 0; i <= 10; i++) {

        frames.push({
            key: `crescent_grizzly_start_attack_${i}`
        });

    }

     scene.anims.create({
        key: "crescent_grizzly_invisible",
        frames:[{
            key: "crescent_grizzly_start_attack_0"
        }],
        frameRate: 12,
        repeat: 0
    });


    scene.anims.create({
        key: "crescent_grizzly_start_attack",
        frames,
        frameRate: 12,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 3; i++) {

        frames.push({
            key: `crescent_grizzly_attack_${i}`
        });

    }

    scene.anims.create({
        key: "crescent_grizzly_attack",
        frames,
        frameRate: 16,
        repeat: -1
    });

    frames = [];

    for (let i = 10; i >= 0; i--) {

        frames.push({
            key: `crescent_grizzly_start_attack_${i}`
        });

    }

    scene.anims.create({
        key: "crescent_grizzly_stop_attack",
        frames,
        frameRate: 12,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 6; i++) {

        frames.push({
            key: `crescent_grizzly_giga_attack_${i}`
        });

    }


    scene.anims.create({
        key: "crescent_grizzly_giga_attack",
        frames,
        frameRate: 16,
        repeat: 0
    });

}