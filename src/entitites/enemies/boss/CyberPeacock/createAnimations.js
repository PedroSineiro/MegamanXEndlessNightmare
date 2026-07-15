export default function
createAnimations(scene) {

    let frames = [];

    frames.push({
            key: "cyber_peacock_teleport_0"
        });

    for(let i = 1; i<=18; i++){
        frames.push({
            key: `cyber_peacock_spawning_${i}`
        });
    }

    scene.anims.create({
        key: "cyber_peacock_start_spawning",
        frames,
        frameRate: 16,
        repeat: 0
    });

    frames = [];

    for(let i = 19; i<=31; i++){
        frames.push({
            key: `cyber_peacock_spawning_${i}`
        });
    }

    scene.anims.create({
        key: "cyber_peacock_mid_spawning",
        frames,
        frameRate: 16,
        repeat: 0
    });

    frames = [];


    for(let i = 32; i<=37; i++){
        frames.push({
            key: `cyber_peacock_spawning_${i}`
        });
    }

    scene.anims.create({
        key: "cyber_peacock_spawning",
        frames,
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "cyber_peacock_idle",
        frames: [{
            key: "cyber_peacock_idle_1", duration: 5000
        },
        {
            key: "cyber_peacock_idle_2", duration: 30
        },
        {
            key: "cyber_peacock_idle_3", duration: 30
        },
        {
            key: "cyber_peacock_idle_2", duration: 30
        }],
        frameRate: 12,
        repeat: -1
    });

    frames = [];


    for(let i = 1; i<=15; i++){
        frames.push({
            key: `cyber_peacock_attack_${i}`
        });
    }

    scene.anims.create({
        key: "cyber_peacock_attack",
        frames,
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "cyber_peacock_stop_attack",
        frames:[{
            key: "cyber_peacock_attack_2"
        },
        {
            key: "cyber_peacock_attack_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "cyber_peacock_teleport_in",
        frames: [{
            key: "cyber_peacock_teleport_1"
        },
        {
            key: "cyber_peacock_idle_1"
        },
        {
            key: "cyber_peacock_teleport_3"
        },
        {
            key: "cyber_peacock_teleport_1"
        },
        {
            key: "cyber_peacock_teleport_3"
        },
        {
            key: "cyber_peacock_teleport_2"
        },
        {
            key: "cyber_peacock_teleport_3"
        },
        {
            key: "cyber_peacock_teleport_0"
        }],
        frameRate: 30,
        repeat: 0
    });

    scene.anims.create({
        key: "cyber_peacock_teleport_out",
        frames: [{
            key: "cyber_peacock_teleport_0"
        },
        {
            key: "cyber_peacock_teleport_3"
        },
        {
            key: "cyber_peacock_teleport_2"
        },
        {
            key: "cyber_peacock_teleport_3"
        },
        {
            key: "cyber_peacock_teleport_1"
        },
        {
            key: "cyber_peacock_teleport_3"
        },
        {
            key: "cyber_peacock_idle_1"
        },
        {
            key: "cyber_peacock_teleport_1"
        }],
        frameRate: 30,
        repeat: 0
    });

    scene.anims.create({
        key: "cyber_peacock_dying",
        frames:[{
            key: "cyber_peacock_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    frames = [];


    for(let i = 1; i<=7; i++){
        frames.push({
            key: `cyber_peacock_giga_attack_${i}`
        });
    }

    scene.anims.create({
        key: "cyber_peacock_start_giga_attack",
        frames,
        frameRate: 20,
        repeat: 0
    });

    frames = [];


    for(let i = 8; i<=14; i++){
        frames.push({
            key: `cyber_peacock_giga_attack_${i}`
        });
    }

    scene.anims.create({
        key: "cyber_peacock_giga_attack",
        frames,
        frameRate: 20,
        repeat: 0
    });

    scene.anims.create({
        key: "cyber_peacock_teleport_giga",
        frames:[{
            key: "cyber_peacock_teleport_giga"
        },
        {
            key: "cyber_peacock_teleport_0"
        }],
        frameRate: 6,
        repeat: 0
    });

}