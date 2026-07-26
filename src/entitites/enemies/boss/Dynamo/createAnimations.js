export default function
createAnimations(scene) {

    scene.anims.create({
        key: "dynamo_light",
        frames: [{
            key: "dynamo_spawning_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_dying",
        frames: [{
            key: "dynamo_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_spawning",
        frames: [
            { key: "dynamo_spawning_2" },
            { key: "dynamo_spawning_3" },
            { key: "dynamo_spawning_4" },
            { key: "dynamo_spawning_5" },
            { key: "dynamo_spawning_6" },
            { key: "dynamo_spawning_5" },
            { key: "dynamo_spawning_7" },
            { key: "dynamo_spawning_10" },
            { key: "dynamo_spawning_9" },
            { key: "dynamo_spawning_11" },
            { key: "dynamo_spawning_8" },
            { key: "dynamo_spawning_11" },
            { key: "dynamo_spawning_8" },
            { key: "dynamo_spawning_11" },
            { key: "dynamo_spawning_8" },
            { key: "dynamo_spawning_11" },
            { key: "dynamo_spawning_8" },
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_idle",
        frames: [
            { key: "dynamo_idle_1" },
            { key: "dynamo_idle_2" },
            { key: "dynamo_idle_3" },
            { key: "dynamo_idle_1" }
        ],
        frameRate: 4,
        repeat: -1
    });

    scene.anims.create({
        key: "dynamo_start_attack",
        frames: [
            { key: "dynamo_attack_1" }
        ],
        frameRate: 4,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_attack",
        frames: [
            { key: "dynamo_attack_2" },
            { key: "dynamo_attack_3" },
            { key: "dynamo_attack_4" },
            { key: "dynamo_attack_5" }
        ],
        frameRate: 60,
        repeat: -1
    });

    scene.anims.create({
        key: "dynamo_start_jump",
        frames: [
            { key: "dynamo_giga_attack_1" }
        ],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_jump",
        frames: [
            { key: "dynamo_giga_attack_2" }
        ],
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_start_giga_attack",
        frames: [
            { key: "dynamo_giga_attack_3" },
            { key: "dynamo_giga_attack_4" },
            { key: "dynamo_giga_attack_5" },
            { key: "dynamo_giga_attack_6" }
        ],
        frameRate: 30,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_start_giga_attack_loop",
        frames: [
            { key: "dynamo_giga_attack_7" },
            { key: "dynamo_giga_attack_7_1" }
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_start_giga_attack_slash",
        frames: [
            { key: "dynamo_giga_attack_8" },
            { key: "dynamo_giga_attack_9" }
        ],
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "dynamo_giga_attack",
        frames: [
            { key: "dynamo_giga_attack_10" },
            { key: "dynamo_giga_attack_11" },
            { key: "dynamo_giga_attack_12" },
            { key: "dynamo_giga_attack_13" }
        ],
        frameRate: 10,
        repeat: 0
    });

}