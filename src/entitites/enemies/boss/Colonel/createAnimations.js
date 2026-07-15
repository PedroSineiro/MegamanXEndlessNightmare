export default function
createAnimations(scene) {

    let frames = [];


    for(let i = 1; i<=5; i++){
        frames.push({
            key: `colonel_teleport_${i}`
        });
    }

    scene.anims.create({
        key: "colonel_teleport",
        frames,
        frameRate: 12,
        repeat: 0
    });

    frames = [];

    for(let i = 5; i>=1; i--){
        frames.push({
            key: `colonel_teleport_${i}`
        });
    }

    scene.anims.create({
        key: "colonel_teleport_out",
        frames,
        frameRate: 12,
        repeat: 0
    });

    frames = [];

    for(let i = 1; i<=3; i++){
        frames.push({
            key: `colonel_idle_${i}`
        });
    }

    scene.anims.create({
        key: "colonel_idle",
        frames,
        frameRate: 16,
        repeat: -1
    });

    frames = [];

    for(let i = 1; i<=6; i++){
        frames.push({
            key: `colonel_slash_a_${i}`
        });
    }

    scene.anims.create({
        key: "colonel_slash_a",
        frames,
        frameRate: 13,
        repeat: 0
    });

    frames = [];

    for(let i = 1; i<=5; i++){
        frames.push({
            key: `colonel_slash_b_${i}`
        });
    }

    scene.anims.create({
        key: "colonel_slash_b",
        frames,
        frameRate: 13,
        repeat: 0
    });

    scene.anims.create({
        key: "colonel_start_teleport",
        frames: [
            {
                key: "colonel_start_teleport"
            }
        ],
        frameRate: 2,
        repeat: 0
    });

    scene.anims.create({
        key: "colonel_dying",
        frames: [
            {
                key: "colonel_dying_1"
            }
        ],
        frameRate: 16,
        repeat: 0
    });

}