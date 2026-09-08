export default function
createAnimations(scene) {

    scene.anims.create({

        key: "axl_shot",

        frames: [

            { key: "axl_shot_1" },
            { key: "axl_shot_2" }

        ],

        frameRate: 20,
        repeat: -1

    });

    scene.anims.create({

        key: "axl_bazooka",

        frames: [

            { key: "axl_bazooka_1" },
            { key: "axl_bazooka_2" }

        ],

        frameRate: 20,
        repeat: -1

    });

    let frames = [];
    for(let i = 1; i<=12; i++){
        frames.push({ key: `axl_shock_${i}` })
    }

    scene.anims.create({

        key: "axl_shock",

        frames,

        frameRate: 20,
        repeat: 0

    });
}