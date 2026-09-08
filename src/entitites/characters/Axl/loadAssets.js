export default function loadAssets(scene) {

    const armors = [

        {
            key: "axl",
            folder: "axl"
        },

        {
            key: "black_axl",
            folder: "black_axl"
        }
    ];

    const commonAnimations = [

        {
            name: "idle",
            start: 1,
            end: 16
        },

        {
            name: "spawning",
            start: 2,
            end: 24
        },

        {
            name: "start_walking",
            start: 1,
            end: 2
        },

        {
            name: "walking",
            start: 3,
            end: 12
        },

        {
            name: "taking_damage",
            start: 1,
            end: 4
        },

        {
            name: "dying",
            start: 1,
            end: 1
        },

        {
            name: "low_hp",
            start: 1,
            end: 6
        },

        {
            name: "shooting",
            start: 1,
            end: 2
        },

        {
            name: "victory",
            start: 1,
            end: 14
        },

        {
            name: "leaving",
            start: 1,
            end: 9
        },

        {
            name: "shooting_bazooka",
            start: 1,
            end: 8
        },

        {
            name: "shooting_shock",
            start: 1,
            end: 9
        },

        {
            name: "transform",
            start: 1,
            end: 7
        },

        {
            name: "transform_idle",
            start: 1,
            end: 4
        },

        {
            name: "transform_giga_attack",
            start: 1,
            end: 3
        },

    ];

    for (const armor of armors) {

        for (const anim of commonAnimations) {

            const folder =

                anim.folder ??
                anim.name;

            const filePrefix =

                anim.filePrefix ??
                anim.name;

            for (

                let i = anim.start;

                i <= anim.end;

                i++

            ) {

                scene.load.image(

                    `${armor.key}_${anim.name}_${i}`,

                    `assets/sprites/characters/axl/${armor.folder}/${folder}/${filePrefix}_${i}.png`

                );

            }

        }

        scene.load.image(

            `${armor.key}_light_1`,

            `assets/sprites/characters/axl/${armor.folder}/light/light_1.png`

        );

        scene.load.image(

            `${armor.key}_light_leaving_1`,

            `assets/sprites/characters/axl/${armor.folder}/light/light_leaving_1.png`

        );

    }

    loadDeathBalls(scene);

    scene.load.audio(
        "axl_arriving",
        "assets/sounds/X/arriving.wav"
    );

    scene.load.audio(
        "axl_taking_damage",
        "assets/sounds/general/player_taking_damage.wav"
    );

    scene.load.audio(
        "axl_taking_damage_voice",
        "assets/sounds/Axl/getting_hurt.wav"
    );

    scene.load.audio(
        "axl_bazooka_voice",
        "assets/sounds/Axl/bazooka_voice.wav"
    );

    scene.load.audio(
        "axl_dying_voice",
        "assets/sounds/Axl/dying.wav"
    );

    scene.load.audio(
        "axl_transform",
        "assets/sounds/Axl/transform.wav"
    );
}

function loadDeathBalls(scene) {
    for (let i = 1;i <= 5;i++) {

        scene.load.image(

            `axl_death_sphere_1_${i}`,

            `assets/sprites/characters/axl/death_sphere/death_sphere_1_${i}.png`

        );

    }

    for (let i = 1;i <= 4;i++) {

        scene.load.image(

            `axl_death_sphere_2_${i}`,

            `assets/sprites/characters/axl/death_sphere/death_sphere_2_${i}.png`

        );

    }
}
