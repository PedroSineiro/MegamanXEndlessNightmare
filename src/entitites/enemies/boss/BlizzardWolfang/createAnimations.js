export default function
createAnimations(scene) {

    scene.anims.create({
        key: "blizzard_wolfang_idle",
        frames: [{
            key: "blizzard_wolfang_idle_1", duration: 300
        },
        {
            key: "blizzard_wolfang_idle_2", duration: 300
        },
        {
            key: "blizzard_wolfang_idle_3", duration: 300
        },
        {
            key: "blizzard_wolfang_idle_4", duration: 300
        },
        {
            key: "blizzard_wolfang_idle_5", duration: 30
        },
        {
            key: "blizzard_wolfang_idle_6", duration: 30
        },
        {
            key: "blizzard_wolfang_idle_5", duration: 30
        }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "blizzard_wolfang_running",
        frames: [{
            key: "blizzard_wolfang_running_1"
        },
        {
            key: "blizzard_wolfang_running_2"
        },
        {
            key: "blizzard_wolfang_running_3"
        },
        {
            key: "blizzard_wolfang_running_4"
        },
        {
            key: "blizzard_wolfang_running_5"
        },],
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: "blizzard_wolfang_start_howl",
        frames: [{
            key: "blizzard_wolfang_howl_1"
        },
        {
            key: "blizzard_wolfang_howl_2"
        }],
        frameRate: 4,
        repeat: 0
    });

    scene.anims.create({
        key: "blizzard_wolfang_howl",
        frames: [{
            key: "blizzard_wolfang_howl_3"
        },
        {
            key: "blizzard_wolfang_howl_4"
        }],
        frameRate: 8,
        repeat: 0
    });

    let frames = [];

    for(let i=1; i<=20; i++){
        frames.push({
            key: `blizzard_wolfang_attack_${i}`
        })
    }

    scene.anims.create({
        key: "blizzard_wolfang_attack",
        frames,
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "blizzard_wolfang_charge",
        frames:[{
            key: "blizzard_wolfang_charge"
        }],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "blizzard_wolfang_stop_charge",
        frames:[{
            key: "blizzard_wolfang_stop_charge"
        }],
        frameRate: 16,
        repeat: 0
    });

    scene.anims.create({
        key: "blizzard_wolfang_dying",
        frames:[{
            key: "blizzard_wolfang_dying_1"
        }],
        frameRate: 16,
        repeat: 0
    });

}