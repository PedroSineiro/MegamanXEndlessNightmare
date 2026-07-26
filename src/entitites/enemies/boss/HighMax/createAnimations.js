export default function
createAnimations(scene) {

    scene.anims.create({
        key: "high_max_dying",
        frames: [{
            key: "high_max_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_idle",
        frames: [{
            key: "high_max_idle_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_start_attack_1",
        frames: [{
            key: "high_max_attack_1_1"
        },
        {
            key: "high_max_attack_1_2"
        },
        {
            key: "high_max_attack_1_3"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_attack_1",
        frames: [{
            key: "high_max_attack_1_4"
        },
        {
            key: "high_max_attack_1_5"
        },
        {
            key: "high_max_attack_1_6"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_start_attack_2",
        frames: [{
            key: "high_max_attack_2_1"
        },
        {
            key: "high_max_attack_2_2"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_attack_2",
        frames: [{
            key: "high_max_attack_2_3"
        },
        {
            key: "high_max_attack_2_4"
        },
        {
            key: "high_max_attack_2_5"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_start_giga_attack",
        frames: [{
            key: "high_max_giga_attack_1"
        },
        {
            key: "high_max_giga_attack_2"
        },
        {
            key: "high_max_giga_attack_3"
        },
        {
            key: "high_max_giga_attack_4"
        },
        {
            key: "high_max_giga_attack_5"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_giga_attack",
        frames: [{
            key: "high_max_giga_attack_6"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "high_max_stop_giga_attack",
        frames: [{
            key: "high_max_giga_attack_5"
        },
        {
            key: "high_max_giga_attack_4"
        },
        {
            key: "high_max_giga_attack_3"
        },
        {
            key: "high_max_giga_attack_2"
        },
        {
            key: "high_max_giga_attack_1"
        }],
        frameRate: 12,
        repeat: 0
    });
}