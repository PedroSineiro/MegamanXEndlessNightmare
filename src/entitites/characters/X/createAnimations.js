export default function
createAnimations(scene) {

    const ARMORS = [

        {
            id: "x",
            hasNovaStrike: false
        },

        {
            id: "fourth",
            hasNovaStrike: true
        },

        {
            id: "ultimate",
            hasNovaStrike: true
        },

        {
            id: "falcon",
            hasNovaStrike: false
        },

        {
            id: "blade",
            hasNovaStrike: false
        }

    ];

    ARMORS.forEach(armor => {

        const id =
            armor.id;

        createSpawnAnimation(
            scene,
            id
        );

        createLightAnimation(
            scene,
            id
        );

        createLightLeavingAnimation(
            scene,
            id
        );

        createIdleAnimation(
            scene,
            id
        );

        createSimpleAnimation(
            scene,
            `${id}_start_walking`,
            `${id}_start_walking`,
            1,
            2,
            16
        );

        createSimpleAnimation(
            scene,
            `${id}_walking`,
            `${id}_walking`,
            3,
            16,
            20,
            -1
        );

        createSimpleAnimation(
            scene,
            `${id}_basic_shooting`,
            `${id}_basic_shooting`,
            1,
            5,
            16
        );

        createSimpleAnimation(
            scene,
            `${id}_charged_shooting`,
            `${id}_shooting_charged`,
            1,
            7,
            16
        );

        createSimpleAnimation(
            scene,
            `${id}_low_hp`,
            `${id}_low_hp`,
            1,
            6,
            3,
            -1
        );

        createSimpleAnimation(
            scene,
            `${id}_dying`,
            `${id}_dying`,
            1,
            4,
            16
        );

        createSimpleAnimation(
            scene,
            `${id}_taking_damage`,
            `${id}_dying`,
            1,
            4,
            16
        );

        createSimpleAnimation(
            scene,
            `${id}_victory`,
            `${id}_victory`,
            1,
            4,
            10
        );

        createSimpleAnimation(
            scene,
            `${id}_leaving`,
            `${id}_leaving`,
            1,
            5,
            16
        );

        if (
            armor.hasNovaStrike
        ) {

            createSimpleAnimation(
                scene,
                `${id}_start_nova_strike`,
                `${id}_start_nova_strike`,
                1,
                4,
                10
            );

            createSimpleAnimation(
                scene,
                `${id}_nova_strike`,
                `${id}_nova_strike`,
                1,
                4,
                36,
                -1
            );

            createSimpleAnimation(
                scene,
                `${id}_end_nova_strike`,
                `${id}_end_nova_strike`,
                1,
                4,
                10
            );

        }

    });

    createFalconGigaAttack(scene);

    let frames = [];

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `x_charging_${i}`
        });

    }

    scene.anims.create({
        key: "x_charging",
        frames: frames,
        frameRate: 30,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `x_charged_${i}`
        });

    }

    scene.anims.create({
        key: "x_charged",
        frames: frames,
        frameRate: 30,
        repeat: -1
    });

    createBladeSlash(scene);
}

function createSimpleAnimation(
    scene,
    key,
    prefix,
    start,
    end,
    frameRate,
    repeat = 0
) {

    const frames = [];

    for (
        let i = start;
        i <= end;
        i++
    ) {

        frames.push({
            key: `${prefix}_${i}`
        });

    }

    scene.anims.create({

        key,

        frames,

        frameRate,

        repeat

    });

}

function createIdleAnimation(scene, armor) {

    scene.anims.create({

        key: `${armor}_idle`,

        frames: [

            { key: `${armor}_idle_1` },
            { key: `${armor}_idle_2` },
            { key: `${armor}_idle_3` },
            { key: `${armor}_idle_4` },
            { key: `${armor}_idle_5` },

            { key: `${armor}_idle_9`, duration: 20 },

            { key: `${armor}_idle_6`, duration: 20 },
            { key: `${armor}_idle_7`, duration: 20 },
            { key: `${armor}_idle_8`, duration: 20 },

            { key: `${armor}_idle_9`, duration: 20 },

            { key: `${armor}_idle_10` },
            { key: `${armor}_idle_11` }

        ],

        frameRate: 6,

        repeat: -1

    });

}

function createSpawnAnimation(
    scene,
    armor
) {

    const frames = [];

    for (
        let i = 2;
        i <= 16;
        i++
    ) {

        frames.push({

            key: `${armor}_spawning_${i}`,
            duration: 60

        });

    }

    frames.push({

        key: `${armor}_spawning_17`,
        duration: 500

    });

    scene.anims.create({

        key: `${armor}_spawning`,

        frames,

        frameRate: 16,

        repeat: 0

    });

}

function createLightAnimation(scene, armor) {

    scene.anims.create({

        key: `${armor}_light`,

        frames: [

            {
                key: `${armor}_light_1`
            }

        ],

        frameRate: 1,

        repeat: -1

    });

}

function createLightLeavingAnimation(scene, armor) {

    scene.anims.create({

        key: `${armor}_light_leaving`,

        frames: [

            {
                key: `${armor}_light_leaving_1`
            }

        ],

        frameRate: 1,

        repeat: -1

    });

}

function createFalconGigaAttack(scene) {
    scene.anims.create({

        key: "falcon_start_giga_attack",

        frames: [

            {
                key: "falcon_giga_attack_1"
            }

        ],

        frameRate: 12,

        repeat: 0

    });

    scene.anims.create({

        key: "falcon_charge_giga_attack",

        frames: [
            {
                key: "falcon_giga_attack_2"
            },
            {
                key: "falcon_giga_attack_3"
            }
        ],

        frameRate: 30,

        repeat: -1

    });

    scene.anims.create({

        key: "falcon_giga_attack",

        frames: [
            {
                key: "falcon_giga_attack_4"
            },
            {
                key: "falcon_giga_attack_5"
            }
        ],

        frameRate: 30,

        repeat: -1

    });
}

function createBladeSlash(scene) {

    const frames = [];

    for(let i = 1; i<=13; i++){
        frames.push({
            key: `blade_slash_${i}`
        })
    }

    frames.push({
        key: "blade_slash_14",
        duration: 180
    });

    frames.push({
        key: "blade_slash_15",
        duration: 180
    });

    scene.anims.create({

        key: "blade_slash",

        frames,

        frameRate: 25,

        repeat: 0

    });
}