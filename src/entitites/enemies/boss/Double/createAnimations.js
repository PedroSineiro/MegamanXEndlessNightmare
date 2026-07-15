export default function
createAnimations(scene) {

    scene.anims.create({
        key: "double_idle",
        frames: [{
            key: "double_idle_1"
        },
        {
            key: "double_idle_2"
        }],
        frameRate: 2,
        repeat: -1
    });

    scene.anims.create({
        key: "double_devil_slash_down",
        frames: [{
            key: "double_devil_slash_down_1"
        },
        {
            key: "double_devil_slash_down_2"
        },
        {
            key: "double_devil_slash_down_3"
        }],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "double_devil_slash",
        frames: [{
            key: "double_devil_slash_1"
        },
        {
            key: "double_devil_slash_2"
        },
        {
            key: "double_devil_slash_3"
        }],
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: "double_end_devil_slash",
        frames: [{
            key: "double_end_devil_slash_1"
        },
        {
            key: "double_end_devil_slash_2"
        }],
        frameRate: 4,
        repeat: 0
    });

    scene.anims.create({
        key: "double_start_attack",
        frames: [{
            key: "double_attack_1"
        },
        {
            key: "double_attack_2"
        },
        {
            key: "double_attack_3"
        }],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "double_attack",
        frames: [{
            key: "double_attack_4"
        },
        {
            key: "double_attack_5"
        },
        {
            key: "double_attack_6"
        }],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "double_jump",
        frames: [{
            key: "double_jump_1"
        }],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "double_dying",
        frames: [{
            key: "double_dying_1"
        }],
        frameRate: 16,
        repeat: 0
    });

}