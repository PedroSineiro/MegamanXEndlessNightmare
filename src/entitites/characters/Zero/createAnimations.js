export default function createAnimations(scene) {

    const armors = [
        "zero",
        "black_zero"
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
                { length: 13 },
                (_, i) => ({
                    key: `${armor}_spawning_${i + 2}`,
                    duration: 60
                })
            ),
            frameRate: 16,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_idle`,
            frames: [
                ...Array.from(
                    { length: 8 },
                    (_, i) => ({
                        key: `${armor}_idle_${i + 1}`
                    })
                ),

                { key: `${armor}_idle_9`, duration: 35 },
                { key: `${armor}_idle_10`, duration: 35 },
                { key: `${armor}_idle_11`, duration: 35 }
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
                { length: 14 },
                (_, i) => ({
                    key: `${armor}_walking_${i + 1}`
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
            key: `${armor}_low_hp`,
            frames: [{
                key: `${armor}_low_hp_1`
            },
            {
                key: `${armor}_low_hp_2`,
                duration: 600
            },
            {
                key: `${armor}_low_hp_3`
            },
            {
                key: `${armor}_low_hp_4`,
                duration: 60
            },
            {
                key: `${armor}_low_hp_5`,
                duration: 60
            },
            {
                key: `${armor}_low_hp_6`,
                duration: 60
            }],
            frameRate: 6,
            repeat: -1
        });

        scene.anims.create({
            key: `${armor}_dying`,
            frames: Array.from(
                { length: 8 },
                (_, i) => ({
                    key: `${armor}_dying_${i + 1}`
                })
            ),
            frameRate: 20,
            repeat: 0
        });

        //
        // SABER COMBO
        //

        scene.anims.create({
            key: `${armor}_slash_a`,
            frames: Array.from(
                { length: 13 },
                (_, i) => ({
                    key: `${armor}_slash_a_${i + 1}`
                })
            ),
            frameRate: 30,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_slash_b`,
            frames: Array.from(
                { length: 12 },
                (_, i) => ({
                    key: `${armor}_slash_b_${i + 1}`
                })
            ),
            frameRate: 30,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_slash_c`,
            frames: Array.from(
                { length: 15 },
                (_, i) => ({
                    key: `${armor}_slash_c_${i + 1}`
                })
            ),
            frameRate: 30,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_slash_end`,
            frames: Array.from(
                { length: 4 },
                (_, i) => ({
                    key: `${armor}_slash_end_${i + 1}`
                })
            ),
            frameRate: 20,
            repeat: 0
        });

        //
        // PIERCING SLASH
        //

        scene.anims.create({
            key: `${armor}_special_attack_1`,
            frames: Array.from(
                { length: 29 },
                (_, i) => ({
                    key: `${armor}_special_attack_1_${i + 1}`
                })
            ),
            frameRate: 20,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_special_attack_1_combo`,
            frames: [
                { key: `${armor}_slash_end_1` },
                { key: `${armor}_slash_end_2` },
                { key: `${armor}_slash_end_3` },

                ...Array.from(
                    { length: 27 },
                    (_, i) => ({
                        key: `${armor}_special_attack_1_${i + 3}`
                    })
                )
            ],
            frameRate: 20,
            repeat: 0
        });

        //
        // VICTORY
        //

        scene.anims.create({
            key: `${armor}_victory`,
            frames: Array.from(
                { length: 7 },
                (_, i) => ({
                    key: `${armor}_victory_${i + 1}`
                })
            ),
            frameRate: 16,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_leaving`,
            frames: Array.from(
                { length: 5 },
                (_, i) => ({
                    key: `${armor}_leaving_${i + 1}`
                })
            ),
            frameRate: 16,
            repeat: 0
        });

        //
        // GIGA ATTACK
        //

        scene.anims.create({
            key: `${armor}_start_giga_attack`,
            frames: Array.from(
                { length: 3 },
                (_, i) => ({
                    key: `${armor}_giga_attack_${i + 1}`
                })
            ),
            frameRate: 10,
            repeat: 0
        });

        scene.anims.create({
            key: `${armor}_giga_attack`,
            frames: Array.from(
                { length: 8 },
                (_, i) => ({
                    key: `${armor}_giga_attack_${i + 4}`
                })
            ),
            frameRate: 12,
            repeat: 0
        });
    }

    //
    // compartilhado
    //

    scene.anims.create({
        key: "zero_giga_shot",
        frames: Array.from(
            { length: 4 },
            (_, i) => ({
                key: `zero_giga_shot_${i + 1}`
            })
        ),
        frameRate: 12,
        repeat: -1
    });

}