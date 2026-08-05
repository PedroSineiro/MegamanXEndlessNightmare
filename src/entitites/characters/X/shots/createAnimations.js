export default function
createAnimations(scene) {
    const armors = [

        {
            armor: "x",
            source: "x",
            chargedSpawnFrames: [1, 2, 3, 4],
            chargedMovingFrames: [5, 6, 7]

        },

        {
            armor: "fourth",
            source: "fourth",
            chargedSpawnFrames: [1, 2, 3, 4],
            chargedMovingFrames: [5, 6, 7, 8]
        },

        {
            armor: "falcon",
            source: "falcon",
            chargedSpawnFrames: [1, 2, 3, 4],
            chargedMovingFrames: [5, 6, 7, 8]
        },

        {
            armor: "ultimate",
            source: "fourth",
            chargedSpawnFrames: [1, 2, 3, 4],
            chargedMovingFrames: [5, 6, 7, 8]
        },
        
        {
            armor: "blade",
            source: "blade",
            chargedSpawnFrames: null,
            chargedMovingFrames: [1, 2, 3, 4, 5]
        },

        {
            armor: "shadow",
            source: "shadow",
            chargedSpawnFrames: null,
            chargedMovingFrames: [1, 2, 3, 4]
        }
    ];

    for (const armor of armors) {

        createShotAnimations(

            scene,

            armor.armor,

            armor.source,

            armor.chargedSpawnFrames,

            armor.chargedMovingFrames

        );

    }

    scene.anims.create({

        key: "blade_giga_shot_moving",

        frames: [

            { key: "blade_giga_shot_1" },
            { key: "blade_giga_shot_2" }

        ],

        frameRate: 20,
        repeat: -1

    });

    scene.anims.create({

        key: "shadow_giga_attack",

        frames: [

            { key: "shadow_giga_attack_1" },
            { key: "shadow_giga_attack_2" },
            { key: "shadow_giga_attack_3" },
            { key: "shadow_giga_attack_4" },
            { key: "shadow_giga_attack_5" }

        ],

        frameRate: 20,
        repeat: -1

    });

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

    const frames = [];

    for(let i = 5; i<=(armor=="shadow"?16:8);i++){
        frames.push({ key: `${sourceArmor}_basic_shot_${i}` })
    }

    scene.anims.create({

        key: `${armor}_basic_shot_moving`,

        frames,

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

    if(chargedSpawnFrames) {
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
    }

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