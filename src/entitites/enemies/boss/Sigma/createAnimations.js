export default function
createAnimations(scene) {


    scene.anims.create({
        key: "sigma_idle",
        frames: [{
            key: "sigma_idle_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_start_spawning",
        frames: [{
            key: "sigma_spawning_0"
        },
        {
            key: "sigma_spawning_1"
        },
        {
            key: "sigma_spawning_2"
        },
        {
            key: "sigma_spawning_3"
        }],
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_spawning",
        frames: [{
            key: "sigma_spawning_4"
        },
        {
            key: "sigma_spawning_6"
        },
        {
            key: "sigma_spawning_4"
        },
        {
            key: "sigma_spawning_6"
        },
        {
            key: "sigma_spawning_5"
        },
        {
            key: "sigma_spawning_4"
        },
        {
            key: "sigma_spawning_5"
        }],
        frameRate: 30,
        repeat: -1
    });

    scene.anims.create({
        key: "sigma_cape_idle",
        frames: [{
            key: "sigma_preparing_1"
        }],
        frameRate: 1,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_start_preparing",
        frames: [{
            key: "sigma_preparing_2"
        }],
        frameRate: 2,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_preparing",
        frames: [{
            key: "sigma_preparing_3"
        },
        {
            key: "sigma_preparing_4"
        },
        {
            key: "sigma_preparing_5"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_attack",
        frames: [{
            key: "sigma_preparing_5"
        },
        {
            key: "sigma_preparing_4"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_stop_attack",
        frames: [{
            key: "sigma_preparing_4"
        },
        {
            key: "sigma_preparing_5"
        }],
        frameRate: 4,
        repeat: 0
    });

    scene.anims.create({
        key: "sigma_dying",
        frames: [{
            key: "sigma_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });



}