export default function loadAssets(scene) {

    const armors = [

        {
            key: "x",
            folder: "base_x"
        },

        {
            key: "fourth",
            folder: "fourth"
        },

        {
            key: "ultimate",
            folder: "ultimate"
        },

        {
            key: "falcon",
            folder: "falcon"
        }

    ];

    const commonAnimations = [

        {
            name: "idle",
            start: 1,
            end: 11
        },

        {
            name: "start_walking",
            start: 1,
            end: 2
        },

        {
            name: "walking",
            start: 3,
            end: 16
        },

        {
            name: "spawning",
            start: 2,
            end: 17
        },

        {
            name: "shooting_charged",
            start: 1,
            end: 7
        },

        {
            name: "basic_shooting",
            folder: "shooting",
            filePrefix: "shooting",
            start: 1,
            end: 5
        },

        {
            name: "low_hp",
            start: 1,
            end: 6
        },

        {
            name: "dying",
            start: 1,
            end: 4
        },

        {
            name: "victory",
            start: 1,
            end: 4
        },

        {
            name: "leaving",
            start: 1,
            end: 5
        }

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

                    `assets/sprites/characters/x/${armor.folder}/${folder}/${filePrefix}_${i}.png`

                );

            }

        }

        scene.load.image(

            `${armor.key}_light_1`,

            `assets/sprites/characters/x/${armor.folder}/light/light_1.png`

        );

        scene.load.image(

            `${armor.key}_light_leaving_1`,

            `assets/sprites/characters/x/${armor.folder}/light/light_leaving_1.png`

        );

    }

    //
    // Fourth Armor
    //

    loadNovaStrike(scene, "fourth");

    //
    // Ultimate Armor
    //

    loadNovaStrike(scene, "ultimate");

    //
    // Falcon Armor
    //
    loadFalconGigaAttack(scene);

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `x_charging_${i}`,
            `assets/sprites/characters/x/charging/charging_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `x_charged_${i}`,
            `assets/sprites/characters/x/charged/charged_${i}.png`
        );

    }

    scene.load.audio(
        "x_arriving",
        "assets/sounds/X/arriving.wav"
    );

    scene.load.audio(
        "x_basic_shot",
        "assets/sounds/X/basic_shot.wav"
    );

    scene.load.audio(
        "x_charged_shot",
        "assets/sounds/X/charged_shot.wav"
    );

    scene.load.audio(
        "x_charging",
        "assets/sounds/X/charging_buster.wav"
    );

    scene.load.audio(
        "x_charging_quick",
        "assets/sounds/X/charging_buster_quick.wav"
    );

    scene.load.audio(
        "x_charged",
        "assets/sounds/X/charging_buster_full.wav"
    );

    scene.load.audio(
        "x_taking_damage",
        "assets/sounds/general/player_taking_damage.wav"
    );

    scene.load.audio(
        "x_taking_damage_voice",
        "assets/sounds/X/getting_hurt.wav"
    );

    scene.load.audio(
        "x_dying_voice",
        "assets/sounds/X/dying.wav"
    );

    scene.load.audio(
        "x_charged_voice",
        "assets/sounds/X/charged_shot_voice.wav"
    );

    scene.load.audio(
        "nova_strike",
        "assets/sounds/general/dash.wav"
    );

    scene.load.audio(
        "end_nova_strike",
        "assets/sounds/general/dash_end.wav"
    );

    scene.load.audio(
        "falcon_giga_attack",
        "assets/sounds/X/falcon_giga_attack.wav"
    );
}

function loadNovaStrike(scene, armor) {

    const animations = [

        "start_nova_strike",

        "nova_strike",

        "end_nova_strike"

    ];

    for (

        const animation of animations

    ) {

        for (

            let i = 1;

            i <= 4;

            i++

        ) {

            scene.load.image(

                `${armor}_${animation}_${i}`,

                `assets/sprites/characters/x/${armor}/${animation}/${animation}_${i}.png`

            );

        }

    }

}

function loadFalconGigaAttack(scene){
    for (

        let i = 1;

        i <= 5;

        i++

    ) {

        scene.load.image(

            `falcon_giga_attack_${i}`,

            `assets/sprites/characters/x/falcon/giga_attack/giga_attack_${i}.png`

        );

    }

}
