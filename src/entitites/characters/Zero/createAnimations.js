export default function
createAnimations(scene) {

    scene.anims.create({
            key: "zero_light",
            frames: [
                { key: "zero_light_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
            key: "zero_light_leaving",
            frames: [
                { key: "zero_light_leaving_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
        key: "zero_spawning",
        frames: [
            { key: "zero_spawning_2", duration: 60 },
            { key: "zero_spawning_3", duration: 60 },
            { key: "zero_spawning_4", duration: 60 },
            { key: "zero_spawning_5", duration: 60 },
            { key: "zero_spawning_6", duration: 60 },
            { key: "zero_spawning_7", duration: 60 },
            { key: "zero_spawning_8", duration: 60 },
            { key: "zero_spawning_9", duration: 60 },
            { key: "zero_spawning_10", duration: 60 },
            { key: "zero_spawning_11", duration: 60 },
            { key: "zero_spawning_12", duration: 60 },
            { key: "zero_spawning_13", duration: 60 },
            { key: "zero_spawning_14", duration: 60 }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "zero_idle",
        frames: [
            { key: "zero_idle_1" },
            { key: "zero_idle_2" },
            { key: "zero_idle_3" },
            { key: "zero_idle_4" },
            { key: "zero_idle_5" },
            { key: "zero_idle_6" },
            { key: "zero_idle_7" },
            { key: "zero_idle_8" },
            { key: "zero_idle_9", duration: 35 },
            { key: "zero_idle_10", duration: 35 },
            { key: "zero_idle_11", duration: 35 }
        ],
        frameRate: 6,
        repeat: -1
    });


    scene.anims.create({
        key: "zero_start_walking",
        frames: [
            { key: "zero_start_walking_1" },
            { key: "zero_start_walking_2" }
        ],
        frameRate: 16,
        repeat: 0
    });
    
    scene.anims.create({
        key: "zero_walking",
        frames: [
            { key: "zero_walking_1" },
            { key: "zero_walking_2" },
            { key: "zero_walking_3" },
            { key: "zero_walking_4" },
            { key: "zero_walking_5" },
            { key: "zero_walking_6" },
            { key: "zero_walking_7" },
            { key: "zero_walking_8" },
            { key: "zero_walking_9" },
            { key: "zero_walking_10" },
            { key: "zero_walking_11" },
            { key: "zero_walking_12" },
            { key: "zero_walking_13" },
            { key: "zero_walking_14" }
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "zero_taking_damage",
        frames: [
            { key: "zero_taking_damage_1" },
            { key: "zero_taking_damage_2" },
            { key: "zero_taking_damage_3" },
            { key: "zero_taking_damage_4" }
        ],
        frameRate: 22,
        repeat: 0
    });

    scene.anims.create({
        key: "zero_low_hp",
        frames: [
            { key: "zero_low_hp_1" },
            { key: "zero_low_hp_2" },
            { key: "zero_low_hp_3" },
            { key: "zero_low_hp_4" },
            { key: "zero_low_hp_5" },
            { key: "zero_low_hp_6" }
        ],
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "zero_dying",
        frames: [
            { key: "zero_dying_1" },
            { key: "zero_dying_2" },
            { key: "zero_dying_3" },
            { key: "zero_dying_4" },
            { key: "zero_dying_5" },
            { key: "zero_dying_6" },
            { key: "zero_dying_7" },
            { key: "zero_dying_8" }
        ],
        frameRate: 20,
        repeat: 0
    });

    let frames = [];

    for (let i = 1; i <= 13; i++) {

        frames.push({
            key: `zero_slash_a_${i}`
        });

    }

    scene.anims.create({
        key: "zero_slash_a",
        frames: frames,
        frameRate: 30,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 12; i++) {

        frames.push({
            key: `zero_slash_b_${i}`
        });

    }

    scene.anims.create({
        key: "zero_slash_b",
        frames: frames,
        frameRate: 30,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 15; i++) {

        frames.push({
            key: `zero_slash_c_${i}`
        });

    }

    scene.anims.create({
        key: "zero_slash_c",
        frames: frames,
        frameRate: 30,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `zero_slash_end_${i}`
        });

    }

    scene.anims.create({
        key: "zero_slash_end",
        frames: frames,
        frameRate: 20,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 33; i++) {

        frames.push({
            key: `zero_special_attack_1_${i}`
        });

    }

    scene.anims.create({
        key: "zero_special_attack_1",
        frames: frames,
        frameRate: 20,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 7; i++) {

        frames.push({
            key: `zero_victory_${i}`
        });

    }

    scene.anims.create({
        key: "zero_victory",
        frames: frames,
        frameRate: 16,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `zero_leaving_${i}`
        });

    }

    scene.anims.create({
        key: "zero_leaving",
        frames: frames,
        frameRate: 16,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 3; i++) {

        frames.push({
            key: `zero_giga_attack_${i}`
        });

    }

    scene.anims.create({
        key: "zero_start_giga_attack",
        frames: frames,
        frameRate: 10,
        repeat: 0
    });

    frames = []

    for (let i = 4; i <= 11; i++) {

        frames.push({
            key: `zero_giga_attack_${i}`
        });

    }

    scene.anims.create({
        key: "zero_giga_attack",
        frames: frames,
        frameRate: 12,
        repeat: 0
    });

        scene.anims.create({
            key: "black_zero_light",
            frames: [
                { key: "black_zero_light_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
            key: "black_zero_light_leaving",
            frames: [
                { key: "black_zero_light_leaving_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
        key: "black_zero_spawning",
        frames: [
            { key: "black_zero_spawning_2", duration: 60 },
            { key: "black_zero_spawning_3", duration: 60 },
            { key: "black_zero_spawning_4", duration: 60 },
            { key: "black_zero_spawning_5", duration: 60 },
            { key: "black_zero_spawning_6", duration: 60 },
            { key: "black_zero_spawning_7", duration: 60 },
            { key: "black_zero_spawning_8", duration: 60 },
            { key: "black_zero_spawning_9", duration: 60 },
            { key: "black_zero_spawning_10", duration: 60 },
            { key: "black_zero_spawning_11", duration: 60 },
            { key: "black_zero_spawning_12", duration: 60 },
            { key: "black_zero_spawning_13", duration: 60 },
            { key: "black_zero_spawning_14", duration: 60 }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "black_zero_idle",
        frames: [
            { key: "black_zero_idle_1" },
            { key: "black_zero_idle_2" },
            { key: "black_zero_idle_3" },
            { key: "black_zero_idle_4" },
            { key: "black_zero_idle_5" },
            { key: "black_zero_idle_6" },
            { key: "black_zero_idle_7" },
            { key: "black_zero_idle_8" },
            { key: "black_zero_idle_9", duration: 35 },
            { key: "black_zero_idle_10", duration: 35 },
            { key: "black_zero_idle_11", duration: 35 }
        ],
        frameRate: 6,
        repeat: -1
    });


    scene.anims.create({
        key: "black_zero_start_walking",
        frames: [
            { key: "black_zero_start_walking_1" },
            { key: "black_zero_start_walking_2" }
        ],
        frameRate: 16,
        repeat: 0
    });
    
    scene.anims.create({
        key: "black_zero_walking",
        frames: [
            { key: "black_zero_walking_1" },
            { key: "black_zero_walking_2" },
            { key: "black_zero_walking_3" },
            { key: "black_zero_walking_4" },
            { key: "black_zero_walking_5" },
            { key: "black_zero_walking_6" },
            { key: "black_zero_walking_7" },
            { key: "black_zero_walking_8" },
            { key: "black_zero_walking_9" },
            { key: "black_zero_walking_10" },
            { key: "black_zero_walking_11" },
            { key: "black_zero_walking_12" },
            { key: "black_zero_walking_13" },
            { key: "black_zero_walking_14" }
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "black_zero_taking_damage",
        frames: [
            { key: "black_zero_taking_damage_1" },
            { key: "black_zero_taking_damage_2" },
            { key: "black_zero_taking_damage_3" },
            { key: "black_zero_taking_damage_4" }
        ],
        frameRate: 22,
        repeat: 0
    });

    scene.anims.create({
        key: "black_zero_low_hp",
        frames: [
            { key: "black_zero_low_hp_1" },
            { key: "black_zero_low_hp_2" },
            { key: "black_zero_low_hp_3" },
            { key: "black_zero_low_hp_4" },
            { key: "black_zero_low_hp_5" },
            { key: "black_zero_low_hp_6" }
        ],
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "black_zero_dying",
        frames: [
            { key: "black_zero_dying_1" },
            { key: "black_zero_dying_2" },
            { key: "black_zero_dying_3" },
            { key: "black_zero_dying_4" },
            { key: "black_zero_dying_5" },
            { key: "black_zero_dying_6" },
            { key: "black_zero_dying_7" },
            { key: "black_zero_dying_8" }
        ],
        frameRate: 20,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 13; i++) {

        frames.push({
            key: `black_zero_slash_a_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_slash_a",
        frames: frames,
        frameRate: 30,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 12; i++) {

        frames.push({
            key: `black_zero_slash_b_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_slash_b",
        frames: frames,
        frameRate: 30,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 15; i++) {

        frames.push({
            key: `black_zero_slash_c_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_slash_c",
        frames: frames,
        frameRate: 30,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `black_zero_slash_end_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_slash_end",
        frames: frames,
        frameRate: 20,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 33; i++) {

        frames.push({
            key: `black_zero_special_attack_1_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_special_attack_1",
        frames: frames,
        frameRate: 20,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 7; i++) {

        frames.push({
            key: `black_zero_victory_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_victory",
        frames: frames,
        frameRate: 16,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `black_zero_leaving_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_leaving",
        frames: frames,
        frameRate: 16,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 3; i++) {

        frames.push({
            key: `black_zero_giga_attack_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_start_giga_attack",
        frames: frames,
        frameRate: 10,
        repeat: 0
    });

    frames = []

    for (let i = 4; i <= 11; i++) {

        frames.push({
            key: `black_zero_giga_attack_${i}`
        });

    }

    scene.anims.create({
        key: "black_zero_giga_attack",
        frames: frames,
        frameRate: 12,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `zero_giga_shot_${i}`
        });

    }

    scene.anims.create({
        key: "zero_giga_shot",
        frames: frames,
        frameRate: 12,
        repeat: -1
    });

}