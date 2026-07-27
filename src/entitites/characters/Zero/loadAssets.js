export default function loadAssets(scene) {

    const armors = [

        {
            key: "zero",
            folder: "zero"
        },

        {
            key: "black_zero",
            folder: "black_zero"
        }

    ];

    const commonAnimations = [

        {
            name: "idle",
            end: 11
        },

        {
            name: "start_walking",
            end: 2
        },

        {
            name: "walking",
            end: 14
        },

        {
            name: "spawning",
            end: 14
        },

        {
            name: "taking_damage",
            end: 4
        },

        {
            name: "low_hp",
            end: 6
        },

        {
            name: "dying",
            end: 8
        },

        {
            name: "slash_a",
            end: 13
        },

        {
            name: "slash_b",
            end: 12
        },

        {
            name: "slash_c",
            end: 15
        },

        {
            name: "slash_end",
            end: 4
        },

        {
            name: "special_attack_1",
            end: 29
        },

        {
            name: "victory",
            end: 7
        },

        {
            name: "leaving",
            end: 5
        },

        {
            name: "giga_attack",
            end: 11
        }

    ];

    for (const armor of armors) {

        //
        // animações comuns
        //

        for (const animation of commonAnimations) {

            for (

                let i = 1;

                i <= animation.end;

                i++

            ) {

                scene.load.image(

                    `${armor.key}_${animation.name}_${i}`,

                    `assets/sprites/characters/zero/${armor.folder}/${animation.name}/${animation.name}_${i}.png`

                );

            }

        }

        //
        // light
        //

        scene.load.image(

            `${armor.key}_light_1`,

            `assets/sprites/characters/zero/${armor.folder}/light/light_1.png`

        );

        scene.load.image(

            `${armor.key}_light_leaving_1`,

            `assets/sprites/characters/zero/${armor.folder}/light/light_leaving_1.png`

        );

        //
        // giga shot
        //

        for (

            let i = 1;

            i <= 4;

            i++

        ) {

            scene.load.image(

                `${armor.key}_giga_shot_${i}`,

                `assets/sprites/characters/zero/${armor.folder}/giga_attack_shot/shot_${i}.png`

            );

        }

    }

    //
    // sons
    //

    scene.load.audio(
        "zero_arriving",
        "assets/sounds/X/arriving.wav"
    );

    scene.load.audio(
        "zero_taking_damage",
        "assets/sounds/general/player_taking_damage.wav"
    );

    scene.load.audio(
        "zero_taking_damage_voice",
        "assets/sounds/Zero/getting_hurt.wav"
    );

    scene.load.audio(
        "zero_dying_voice",
        "assets/sounds/Zero/dying.wav"
    );

    scene.load.audio(
        "z_saber",
        "assets/sounds/Zero/z_saber.wav"
    );

    scene.load.audio(
        "zero_regular_hit",
        "assets/sounds/Zero/zero_first_hit.wav"
    );

    scene.load.audio(
        "zero_second_hit",
        "assets/sounds/Zero/zero_second_hit.wav"
    );

    scene.load.audio(
        "zero_strong_hit",
        "assets/sounds/Zero/zero_last_hit.wav"
    );

    scene.load.audio(
        "zero_giga_attack_voice",
        "assets/sounds/Zero/giga_attack_voice.wav"
    );

    scene.load.audio(
        "zero_giga_attack",
        "assets/sounds/Zero/giga_attack.wav"
    );

}