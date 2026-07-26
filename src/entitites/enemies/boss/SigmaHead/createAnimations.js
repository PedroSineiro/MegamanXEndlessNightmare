export default function
createAnimations(scene) {


    scene.anims.create({
        key: "sigma_head_idle",
        frames: [{
            key: "sigma_head_idle_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_head_spawning",
        frames: [{
            key: "sigma_head_spawning_0"
        },
        {
            key: "sigma_head_spawning_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_head_giga_attack",
        frames: [{
            key: "sigma_head_giga_attack_1"
        },
        {
            key: "sigma_head_giga_attack_2"
        },
        {
            key: "sigma_head_giga_attack_3"
        },
        {
            key: "sigma_head_giga_attack_4"
        }],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_head_stop_giga_attack",
        frames: [{
            key: "sigma_head_giga_attack_4"
        },
        {
            key: "sigma_head_giga_attack_3"
        },
        {
            key: "sigma_head_giga_attack_2"
        },
        {
            key: "sigma_head_giga_attack_1"
        }],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_head_attack",
        frames: [{
            key: "sigma_head_attack_1"
        }],
        frameRate: 8,
        repeat: 0
    });

}