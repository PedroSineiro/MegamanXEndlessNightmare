export default function
createAnimations(scene) {

    scene.anims.create({
        key: "slash_beast_idle",
        frames: [{
            key: "slash_beast_idle_1", duration: 9000
        },
        {
            key: "slash_beast_idle_2"
        }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "slash_beast_running",
        frames: [{
            key: "slash_beast_running_1"
        },
        {
            key: "slash_beast_running_2"
        },
        {
            key: "slash_beast_running_3"
        }],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "slash_beast_start_idle_scream",
        frames: [{
            key: "slash_beast_idle_scream_1"
        }],
        frameRate: 1,
        repeat: 0
    });

    scene.anims.create({
        key: "slash_beast_idle_scream",
        frames: [{
            key: "slash_beast_idle_scream_2"
        },
        {
            key: "slash_beast_idle_scream_3"
        }],
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "slash_beast_dying",
        frames: [{
            key: "slash_beast_dying_1"
        }],
        frameRate: 1,
        repeat: 0
    });

    scene.anims.create({
        key: "slash_beast_start_attack",
        frames: [{
            key: "slash_beast_start_attack_1"
        },
        {
            key: "slash_beast_start_attack_2"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "slash_beast_stop_attack",
        frames: [{
            key: "slash_beast_stop_attack_1"
        },
        {
            key: "slash_beast_stop_attack_2"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "slash_beast_start_giga_attack",
        frames: [{
            key: "slash_beast_giga_attack_1", duration: 90
        },
        {
            key: "slash_beast_giga_attack_2", duration: 90
        },
        {
            key: "slash_beast_giga_attack_3", duration: 30
        },
        {
            key: "slash_beast_giga_attack_4", duration: 30
        },
        {
            key: "slash_beast_giga_attack_5", duration: 30
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "slash_beast_giga_attack",
        frames: [{
            key: "slash_beast_giga_attack_6", duration: 30
        },
        {
            key: "slash_beast_giga_attack_7", duration: 30
        },
        {
            key: "slash_beast_giga_attack_8", duration: 30
        },
        {
            key: "slash_beast_giga_attack_9", duration: 30
        },
        {
            key: "slash_beast_giga_attack_10", duration: 90
        },
        {
            key: "slash_beast_giga_attack_11", duration: 90
        },
        {
            key: "slash_beast_giga_attack_12", duration: 90
        },
        {
            key: "slash_beast_giga_attack_13", duration: 90
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "slash_beast_attack",
        frames: [{
            key: "slash_beast_attack_1"
        },
        {
            key: "slash_beast_attack_2"
        },
        {
            key: "slash_beast_attack_3"
        },
        {
            key: "slash_beast_attack_4"
        }],
        frameRate: 90,
        repeat: -1
    });
}