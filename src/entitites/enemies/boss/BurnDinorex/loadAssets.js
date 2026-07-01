export default function loadAssets(scene) {

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `burn_dinorex_falling_${i}`,
            `assets/sprites/bosses/burn_dinorex/falling/falling_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `burn_dinorex_landing_${i}`,
            `assets/sprites/bosses/burn_dinorex/landing/landing_${i}.png`
        );

    }

    for (let i = 1; i <= 8; i++) {

        scene.load.image(
            `burn_dinorex_idle_${i}`,
            `assets/sprites/bosses/burn_dinorex/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `burn_dinorex_start_attack_${i}`,
            `assets/sprites/bosses/burn_dinorex/start_shooting/start_shooting_${i}.png`
        );

    }


    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `burn_dinorex_attack_${i}`,
            `assets/sprites/bosses/burn_dinorex/shooting/shooting_${i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `burn_dinorex_jumping_${i}`,
            `assets/sprites/bosses/burn_dinorex/jumping/jumping_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `burn_dinorex_giga_attack_${i}`,
            `assets/sprites/bosses/burn_dinorex/giga_attack/giga_attack_${i}.png`
        );

    }

    scene.load.image(
        "burn_dinorex_dying_1",
        "assets/sprites/bosses/burn_dinorex/dying/dying_1.png"
    );
    
    scene.load.audio(
        "burn_dinorex_landing",
        "assets/sounds/burn_dinorex/landing.wav"
    );

    scene.load.audio(
        "burn_dinorex_flame",
        "assets/sounds/burn_dinorex/fireball.wav"
    );

}