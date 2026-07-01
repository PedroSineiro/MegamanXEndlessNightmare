export default function
createAnimations(scene) {

    scene.anims.create({
            key: "x_light",
            frames: [
                { key: "x_light_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
            key: "x_light_leaving",
            frames: [
                { key: "x_light_leaving_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
        key: "x_spawning",
        frames: [
            { key: "x_spawning_2", duration: 60 },
            { key: "x_spawning_3", duration: 60 },
            { key: "x_spawning_4", duration: 60 },
            { key: "x_spawning_5", duration: 60 },
            { key: "x_spawning_6", duration: 60 },
            { key: "x_spawning_7", duration: 60 },
            { key: "x_spawning_8", duration: 60 },
            { key: "x_spawning_9", duration: 60 },
            { key: "x_spawning_10", duration: 60 },
            { key: "x_spawning_11", duration: 60 },
            { key: "x_spawning_12", duration: 60 },
            { key: "x_spawning_13", duration: 60 },
            { key: "x_spawning_14", duration: 60 },
            { key: "x_spawning_15", duration: 60 },
            { key: "x_spawning_16", duration: 60 },
            { key: "x_spawning_17", duration: 500 }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "x_idle",
        frames: [
            { key: "x_idle_1" },
            { key: "x_idle_2" },
            { key: "x_idle_3" },
            { key: "x_idle_4" },
            { key: "x_idle_5" },
            { key: "x_idle_6", duration: 35 },
            { key: "x_idle_7", duration: 35 },
            { key: "x_idle_8", duration: 35 },
            { key: "x_idle_9" },
            { key: "x_idle_10" },
            { key: "x_idle_11" }
        ],
        frameRate: 6,
        repeat: -1
    });


    scene.anims.create({
        key: "x_start_walking",
        frames: [
            { key: "x_start_walking_1" },
            { key: "x_start_walking_2" }
        ],
        frameRate: 16,
        repeat: 0
    });
    
    scene.anims.create({
        key: "x_walking",
        frames: [
            { key: "x_walking_3" },
            { key: "x_walking_4" },
            { key: "x_walking_5" },
            { key: "x_walking_6" },
            { key: "x_walking_7" },
            { key: "x_walking_8" },
            { key: "x_walking_9" },
            { key: "x_walking_10" },
            { key: "x_walking_11" },
            { key: "x_walking_12" },
            { key: "x_walking_13" },
            { key: "x_walking_14" },
            { key: "x_walking_15" },
            { key: "x_walking_16" }
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "x_basic_shooting",
        frames: [
            { key: "x_basic_shooting_1" },
            { key: "x_basic_shooting_2" },
            { key: "x_basic_shooting_3" },
            { key: "x_basic_shooting_4" },
            { key: "x_basic_shooting_5" }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "x_charged_shooting",
        frames: [
            { key: "x_shooting_charged_1" },
            { key: "x_shooting_charged_2" },
            { key: "x_shooting_charged_3" },
            { key: "x_shooting_charged_4" },
            { key: "x_shooting_charged_5" },
            { key: "x_shooting_charged_6" },
            { key: "x_shooting_charged_7" }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "x_taking_damage",
        frames: [
            { key: "x_taking_damage_1" },
            { key: "x_taking_damage_2" },
            { key: "x_taking_damage_3" },
            { key: "x_taking_damage_4" },
            { key: "x_taking_damage_5" }
        ],
        frameRate: 22,
        repeat: 0
    });

    scene.anims.create({
        key: "x_low_hp",
        frames: [
            { key: "x_low_hp_1" },
            { key: "x_low_hp_2" },
            { key: "x_low_hp_3" },
            { key: "x_low_hp_4" },
            { key: "x_low_hp_5" },
            { key: "x_low_hp_6" }
        ],
        frameRate: 3,
        repeat: -1
    });

    scene.anims.create({
        key: "x_dying",
        frames: [
            { key: "x_dying_1" },
            { key: "x_dying_2" },
            { key: "x_dying_3" },
            { key: "x_dying_4" }
        ],
        frameRate: 16,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `x_victory_${i}`
        });

    }

    scene.anims.create({
        key: "x_victory",
        frames: frames,
        frameRate: 10,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `x_leaving_${i}`
        });

    }

    scene.anims.create({
        key: "x_leaving",
        frames: frames,
        frameRate: 16,
        repeat: 0
    });



    scene.anims.create({
            key: "fourth_light",
            frames: [
                { key: "fourth_light_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
            key: "fourth_light_leaving",
            frames: [
                { key: "fourth_light_leaving_1" }
            ],
            frameRate: 1,
            repeat: -1
        });

    scene.anims.create({
        key: "fourth_spawning",
        frames: [
            { key: "fourth_spawning_2", duration: 60 },
            { key: "fourth_spawning_3", duration: 60 },
            { key: "fourth_spawning_4", duration: 60 },
            { key: "fourth_spawning_5", duration: 60 },
            { key: "fourth_spawning_6", duration: 60 },
            { key: "fourth_spawning_7", duration: 60 },
            { key: "fourth_spawning_8", duration: 60 },
            { key: "fourth_spawning_9", duration: 60 },
            { key: "fourth_spawning_10", duration: 60 },
            { key: "fourth_spawning_11", duration: 60 },
            { key: "fourth_spawning_12", duration: 60 },
            { key: "fourth_spawning_13", duration: 60 },
            { key: "fourth_spawning_14", duration: 60 },
            { key: "fourth_spawning_15", duration: 60 },
            { key: "fourth_spawning_16", duration: 60 },
            { key: "fourth_spawning_17", duration: 500 }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "fourth_idle",
        frames: [
            { key: "fourth_idle_1" },
            { key: "fourth_idle_2" },
            { key: "fourth_idle_3" },
            { key: "fourth_idle_4" },
            { key: "fourth_idle_5" },
            { key: "fourth_idle_6", duration: 35 },
            { key: "fourth_idle_7", duration: 35 },
            { key: "fourth_idle_8", duration: 35 },
            { key: "fourth_idle_9" },
            { key: "fourth_idle_10" },
            { key: "fourth_idle_11" }
        ],
        frameRate: 6,
        repeat: -1
    });


    scene.anims.create({
        key: "fourth_start_walking",
        frames: [
            { key: "fourth_start_walking_1" },
            { key: "fourth_start_walking_2" }
        ],
        frameRate: 16,
        repeat: 0
    });
    
    scene.anims.create({
        key: "fourth_walking",
        frames: [
            { key: "fourth_walking_3" },
            { key: "fourth_walking_4" },
            { key: "fourth_walking_5" },
            { key: "fourth_walking_6" },
            { key: "fourth_walking_7" },
            { key: "fourth_walking_8" },
            { key: "fourth_walking_9" },
            { key: "fourth_walking_10" },
            { key: "fourth_walking_11" },
            { key: "fourth_walking_12" },
            { key: "fourth_walking_13" },
            { key: "fourth_walking_14" },
            { key: "fourth_walking_15" },
            { key: "fourth_walking_16" }
        ],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "fourth_basic_shooting",
        frames: [
            { key: "fourth_basic_shooting_1" },
            { key: "fourth_basic_shooting_2" },
            { key: "fourth_basic_shooting_3" },
            { key: "fourth_basic_shooting_4" },
            { key: "fourth_basic_shooting_5" }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "fourth_charged_shooting",
        frames: [
            { key: "fourth_shooting_charged_1" },
            { key: "fourth_shooting_charged_2" },
            { key: "fourth_shooting_charged_3" },
            { key: "fourth_shooting_charged_4" },
            { key: "fourth_shooting_charged_5" },
            { key: "fourth_shooting_charged_6" },
            { key: "fourth_shooting_charged_7" }
        ],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "fourth_taking_damage",
        frames: [
            { key: "fourth_taking_damage_1" },
            { key: "fourth_taking_damage_2" },
            { key: "fourth_taking_damage_3" },
            { key: "fourth_taking_damage_4" },
            { key: "fourth_taking_damage_5" }
        ],
        frameRate: 22,
        repeat: 0
    });

    scene.anims.create({
        key: "fourth_low_hp",
        frames: [
            { key: "fourth_low_hp_1" },
            { key: "fourth_low_hp_2" },
            { key: "fourth_low_hp_3" },
            { key: "fourth_low_hp_4" },
            { key: "fourth_low_hp_5" },
            { key: "fourth_low_hp_6" }
        ],
        frameRate: 3,
        repeat: -1
    });

    scene.anims.create({
        key: "fourth_dying",
        frames: [
            { key: "fourth_dying_1" },
            { key: "fourth_dying_2" },
            { key: "fourth_dying_3" },
            { key: "fourth_dying_4" }
        ],
        frameRate: 16,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `fourth_victory_${i}`
        });

    }

    scene.anims.create({
        key: "fourth_victory",
        frames: frames,
        frameRate: 10,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `fourth_leaving_${i}`
        });

    }

    scene.anims.create({
        key: "fourth_leaving",
        frames: frames,
        frameRate: 16,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `fourth_start_nova_strike_${i}`
        });

    }

    scene.anims.create({
        key: "fourth_start_nova_strike",
        frames: frames,
        frameRate: 10,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `fourth_nova_strike_${i}`
        });

    }

    scene.anims.create({
        key: "fourth_nova_strike",
        frames: frames,
        frameRate: 36,
        repeat: -1
    });

    frames = []

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `fourth_end_nova_strike_${i}`
        });

    }

    scene.anims.create({
        key: "fourth_end_nova_strike",
        frames: frames,
        frameRate: 10,
        repeat: 0
    });

    frames = []

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `x_charging_${i}`
        });

    }

    scene.anims.create({
        key: "x_charging",
        frames: frames,
        frameRate: 30,
        repeat: -1
    });

    frames = []

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `x_charged_${i}`
        });

    }

    scene.anims.create({
        key: "x_charged",
        frames: frames,
        frameRate: 30,
        repeat: -1
    });

}