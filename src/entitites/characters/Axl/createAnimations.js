export default function
createAnimations(scene) {

    const armors = [
        "axl",
        "black_axl"
    ];

    for (const armor of armors) {

        scene.anims.create({
            key: `${armor}_light`,
            frames: [
                { key: `${armor}_light_1` }
            ],
            frameRate: 1,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_light_leaving`,
            frames: [
                { key: `${armor}_light_leaving_1` }
            ],
            frameRate: 1,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_spawning`,
            frames: Array.from(
                { length: 23 },
                (_, i) => ({
                    key: `${armor}_spawning_${i + 2}`
                })
            ),
            frameRate: 22,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_idle`,
            frames: [
                ...Array.from(
                    { length: 10 },
                    (_, i) => ({
                        key: `${armor}_idle_${i + 1}`
                    })
                ),

                { key: `${armor}_idle_11`, duration: 35 },
                { key: `${armor}_idle_12`, duration: 35 },
                { key: `${armor}_idle_13`, duration: 35 },
                { key: `${armor}_idle_14`},
                { key: `${armor}_idle_15`},
                { key: `${armor}_idle_16` },

            ],
            frameRate: 6,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_start_walking`,
            frames: [
                { key: `${armor}_start_walking_1` },
                { key: `${armor}_start_walking_2` }
            ],
            frameRate: 16,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_walking`,
            frames: Array.from(
                { length: 10 },
                (_, i) => ({
                    key: `${armor}_walking_${i + 3}`
                })
            ),
            frameRate: 20,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_taking_damage`,
            frames: Array.from(
                { length: 4 },
                (_, i) => ({
                    key: `${armor}_taking_damage_${i + 1}`
                })
            ),
            frameRate: 22,
            repeat: 0
        });


        scene.anims.create({
            key: `${armor}_dying`,
            frames: [{
                    key: `${armor}_dying_1`
                }],
            frameRate: 4,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_low_hp`,
            frames: [{
                key: `${armor}_low_hp_1`,
                duration: 600
            },
            {
                key: `${armor}_low_hp_2`
            },
            {
                key: `${armor}_low_hp_3`
            },
            {
                key: `${armor}_low_hp_2`
            },
            {
                key: `${armor}_low_hp_4`,
                duration: 600
            },
            {
                key: `${armor}_low_hp_5`
            },
            {
                key: `${armor}_low_hp_6`
            },
            {
                key: `${armor}_low_hp_5`
            }],
            frameRate: 5,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_victory`,
            frames: Array.from(
                { length: 14 },
                (_, i) => ({
                    key: `${armor}_victory_${i + 1}`
                })
            ),
            frameRate: 26,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_leaving`,
            frames: Array.from(
                { length: 9 },
                (_, i) => ({
                    key: `${armor}_leaving_${i + 1}`
                })
            ),
            frameRate: 22,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_start_shooting`,
            frames: [{
                    key: `${armor}_shooting_1`
                }],
            frameRate: 6,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_shooting`,
            frames: [{
                    key: `${armor}_shooting_2`
                },
                {
                    key: `${armor}_shooting_1`
                }],
            frameRate: 6,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_start_shooting_bazooka`,
            frames: [{
                    key: `${armor}_shooting_bazooka_1`
                },
                {
                    key: `${armor}_shooting_bazooka_2`
                },
                {
                    key: `${armor}_shooting_bazooka_3`
                }],
            frameRate: 6,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_shooting_bazooka`,
            frames: [{
                    key: `${armor}_shooting_bazooka_4`
                },
                {
                    key: `${armor}_shooting_bazooka_5`
                },
                {
                    key: `${armor}_shooting_bazooka_6`
                },
                {
                    key: `${armor}_shooting_bazooka_7`
                }],
            frameRate: 12,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_end_shooting_bazooka`,
            frames: [
                {
                    key: `${armor}_shooting_bazooka_8`
                }],
            frameRate: 6,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_start_shooting_shock`,
            frames: [{
                    key: `${armor}_shooting_shock_1`
                },
                {
                    key: `${armor}_shooting_shock_2`
                },
                {
                    key: `${armor}_shooting_shock_3`
                },
                {
                    key: `${armor}_shooting_shock_4`
                },
                {
                    key: `${armor}_shooting_shock_5`
                },
                {
                    key: `${armor}_shooting_shock_6`
                }],
            frameRate: 12,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_shooting_shock`,
            frames: [{
                    key: `${armor}_shooting_shock_7`
                }],
            frameRate: 12,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_end_shooting_shock`,
            frames: [{
                    key: `${armor}_shooting_shock_8`
                },
                {
                    key: `${armor}_shooting_shock_9`
                }],
            frameRate: 8,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_transform`,
            frames: [{
                    key: `${armor}_transform_1`
                },
                {
                    key: `${armor}_transform_2`
                },
                {
                    key: `${armor}_transform_3`
                },
                {
                    key: `${armor}_transform_4`
                },
                {
                    key: `${armor}_transform_5`
                },
                {
                    key: `${armor}_transform_6`, duration: 200
                },
                {
                    key: `${armor}_transform_7`, duration: 200
                }],
            frameRate: 12,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_transform_idle`,
            frames: [{
                    key: `${armor}_transform_idle_1`
                },
                {
                    key: `${armor}_transform_idle_2`
                },
                {
                    key: `${armor}_transform_idle_3`
                },
                {
                    key: `${armor}_transform_idle_4`
                }],
            frameRate: 9,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_transform_giga_attack`,
            frames: [{
                    key: `${armor}_transform_giga_attack_1`
                },
                {
                    key: `${armor}_transform_giga_attack_2`
                },
                {
                    key: `${armor}_transform_giga_attack_3`
                }],
            frameRate: 16,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_detransform`,
            frames: [{
                    key: `${armor}_transform_7`, duration: 200
                },
                {
                    key: `${armor}_transform_6`, duration: 200
                },
                {
                    key: `${armor}_transform_5`
                },
                {
                    key: `${armor}_transform_4`
                }],
            frameRate: 12,
            repeat: 0
        });

    }

    createDeathSpheres(scene);

}

function createDeathSpheres(scene) {
    scene.anims.create({

        key: "axl_death_sphere_1",

        frames:[
            {
                key: "axl_death_sphere_1_1"
            },
            {
                key: "axl_death_sphere_1_2"
            },
            {
                key: "axl_death_sphere_1_3"
            },
            {
                key: "axl_death_sphere_1_4"
            },
            {
                key: "axl_death_sphere_1_5"
            },
        ],

        frameRate: 22,

        repeat: -1

    });

    scene.anims.create({

        key: "axl_death_sphere_2",

        frames:[
            {
                key: "axl_death_sphere_2_1"
            },
            {
                key: "axl_death_sphere_2_2"
            },
            {
                key: "axl_death_sphere_2_3"
            },
            {
                key: "axl_death_sphere_2_4"
            }
        ],

        frameRate: 22,

        repeat: -1

    });
}