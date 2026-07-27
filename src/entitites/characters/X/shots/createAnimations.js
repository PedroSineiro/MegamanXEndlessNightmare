export default function
createAnimations(scene) {
    const armors = [

        {
            armor: "x",
            source: "x"
        },

        {
            armor: "fourth",
            source: "fourth"
        },

        {
            armor: "falcon",
            source: "falcon"
        },

        {
            armor: "ultimate",
            source: "fourth"
        }

    ];

    for (const armor of armors) {

        createShotAnimations(

            scene,

            armor.armor,

            armor.source,

            [1, 2, 3, 4],

            [5, 6, 7]

        );

    }

}

function createShotAnimations(
    scene,
    armor,
    sourceArmor,
    chargedSpawnFrames,
    chargedMovingFrames
) {

    scene.anims.create({

        key: `${armor}_basic_shot_spawn`,

        frames: [

            { key: `${sourceArmor}_basic_shot_1` },
            { key: `${sourceArmor}_basic_shot_2` },
            { key: `${sourceArmor}_basic_shot_3` },
            { key: `${sourceArmor}_basic_shot_4` }

        ],

        frameRate: 20,
        repeat: 0

    });

    scene.anims.create({

        key: `${armor}_basic_shot_moving`,

        frames: [

            { key: `${sourceArmor}_basic_shot_5` },
            { key: `${sourceArmor}_basic_shot_6` },
            { key: `${sourceArmor}_basic_shot_7` },
            { key: `${sourceArmor}_basic_shot_8` }

        ],

        frameRate: 20,
        repeat: -1

    });

    scene.anims.create({

        key: `${armor}_medium_shot_spawn`,

        frames: [

            { key: `${sourceArmor}_medium_shot_1` },
            { key: `${sourceArmor}_medium_shot_2` },
            { key: `${sourceArmor}_medium_shot_3` }

        ],

        frameRate: 20,
        repeat: 0

    });

    scene.anims.create({

        key: `${armor}_medium_shot_moving`,

        frames: [

            { key: `${sourceArmor}_medium_shot_4` },
            { key: `${sourceArmor}_medium_shot_5` },
            { key: `${sourceArmor}_medium_shot_6` },
            { key: `${sourceArmor}_medium_shot_7` }

        ],

        frameRate: 20,
        repeat: -1

    });

    scene.anims.create({

        key: `${armor}_charged_shot_spawn`,

        frames: chargedSpawnFrames.map(

            frame => ({
                key: `${sourceArmor}_charged_shot_${frame}`
            })

        ),

        frameRate: 20,
        repeat: 0

    });

    scene.anims.create({

        key: `${armor}_charged_shot_moving`,

        frames: chargedMovingFrames.map(

            frame => ({
                key: `${sourceArmor}_charged_shot_${frame}`
            })

        ),

        frameRate: 20,
        repeat: -1

    });

}