export default function loadAssets(scene) {

    scene.load.image(
        "night_zero_light_1",
        "assets/sprites/bosses/nightmare_zero/light/light_1.png"
    );

    scene.load.image(
        "night_zero_dying_1",
        "assets/sprites/bosses/nightmare_zero/dying/dying_1.png"
    );


    for (let i = 1; i <= 13; i++) {

        scene.load.image(
            `night_zero_spawning_${i}`,
            `assets/sprites/bosses/nightmare_zero/arriving/arriving_${i}.png`
        );

    }

    for (let i = 1; i <= 9; i++) {

        scene.load.image(
            `night_zero_idle_${i}`,
            `assets/sprites/bosses/nightmare_zero/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 23; i++) {

        scene.load.image(
            `night_zero_giga_${i}`,
            `assets/sprites/bosses/nightmare_zero/giga_attack/giga_attack_${i}.png`
        );

    }

    for (let i = 1; i <= 20; i++) {

        scene.load.image(
            `night_zero_slash_${i}`,
            `assets/sprites/bosses/nightmare_zero/slash_attack/slash_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `night_zero_vanishing_${i}`,
            `assets/sprites/bosses/nightmare_zero/vanishing/vanishing_${i}.png`
        );

    }
    
    scene.load.audio(
        "night_zero_laugth",
        "assets/sounds/NightmareZero/laugth.wav"
    );

    scene.load.audio(
        "night_zero_spawning",
        "assets/sounds/X/arriving.wav"
    );

    scene.load.audio(
        "night_zero_basic_attack",
        "assets/sounds/NightmareZero/basic_attack.wav"
    );

    scene.load.audio(
        "night_zero_saber",
        "assets/sounds/Zero/z_saber.wav"
    );

    scene.load.audio(
        "night_zero_giga_attack_voice",
        "assets/sounds/NightmareZero/giga_attack.wav"
    );

    scene.load.audio(
        "night_zero_dying",
        "assets/sounds/NightmareZero/dying.wav"
    );

}