export default function
createAnimations(scene) {

    scene.anims.create({
        key: "spiral_pegasus_arriving",
        frames: [{
            key: "spiral_pegasus_arriving_1"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "spiral_pegasus_landing",
        frames: [{
            key: "spiral_pegasus_landing_1"
        },
        {
            key: "spiral_pegasus_landing_2"
        }],
        frameRate: 8,
        repeat: 0
    });
    
    scene.anims.create({
        key: "spiral_pegasus_pointing",
        frames: [{
            key: "spiral_pegasus_pointing_1"
        },
        {
            key: "spiral_pegasus_pointing_2", duration: 500
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "spiral_pegasus_idle",
        frames: [{
            key: "spiral_pegasus_idle_1", duration: 4000
        },
        {
            key: "spiral_pegasus_idle_2", duration: 30
        },
        {
            key: "spiral_pegasus_idle_3", duration: 30
        },
        {
            key: "spiral_pegasus_idle_4", duration: 30
        },
        {
            key: "spiral_pegasus_idle_3", duration: 30
        },
        {
            key: "spiral_pegasus_idle_2", duration: 30
        }],
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: "spiral_pegasus_flying",
        frames: [{
            key: "spiral_pegasus_flying_0"
        },
        {
            key: "spiral_pegasus_flying_1"
        }],
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: "spiral_pegasus_attack",
        frames: [{
            key: "spiral_pegasus_attack_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "spiral_pegasus_start_giga_attack",
        frames:[{
            key: "spiral_pegasus_giga_attack_0"
        }],
        frameRate: 12,
        repeat: 0
    });

    let frames = [];

    for(let i=1;i<=7;i++){
        frames.push({
            key: `spiral_pegasus_giga_attack_${i}`
        })
    }

    scene.anims.create({
        key: "spiral_pegasus_giga_attack",
        frames,
        frameRate: 12,
        repeat: 0
    });


     scene.anims.create({
        key: "spiral_pegasus_stop_giga_attack",
        frames:[{
            key: "spiral_pegasus_giga_attack_8"
        },
        {
            key: "spiral_pegasus_giga_attack_3"
        },
        {
            key: "spiral_pegasus_giga_attack_2"
        }],
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: "spiral_pegasus_dying",
        frames: [{
            key: "spiral_pegasus_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });
}