export default function
createAnimations(scene) {

    scene.anims.create({
        key: "frost_walrus_idle",
        frames: [{
            key: "frost_walrus_idle_1", duration: 9000
        },
        {
            key: "frost_walrus_idle_2"
        }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "frost_walrus_arriving",
        frames: [{
            key: "frost_walrus_arriving_1"
        }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "frost_walrus_dying",
        frames: [{
            key: "frost_walrus_dying_1"
        }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "frost_walrus_start_fist",
        frames: [{
            key: "frost_walrus_roar_1"
        },
        {
            key: "frost_walrus_roar_2"
        },
        {
            key: "frost_walrus_roar_1"
        }],
        frameRate: 12,
        repeat: 0
    });

    scene.anims.create({
        key: "frost_walrus_fist",
        frames: [{
            key: "frost_walrus_roar_3"
        },
        {
            key: "frost_walrus_roar_4"
        }],
        frameRate: 12,
        repeat: -1
    });

    scene.anims.create({
        key: "frost_walrus_start_roar",
        frames: [{
            key: "frost_walrus_roar_5"
        }],
        frameRate: 2,
        repeat: 0
    });

    scene.anims.create({
        key: "frost_walrus_roar",
        frames: [{
            key: "frost_walrus_roar_6"
        },
        {
            key: "frost_walrus_roar_7"
        }],
        frameRate: 12,
        repeat: -1
    });

    let frames = [];
    for(let i = 1; i <=8;i++){
        frames.push({
            key: `frost_walrus_attack_${i}`
        })
    }

    scene.anims.create({
        key: "frost_walrus_attack",
        frames,
        frameRate: 10,
        repeat: 0
    });
}