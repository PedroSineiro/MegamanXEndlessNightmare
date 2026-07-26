export default function loadAssets(scene) {

    scene.load.image(
        "high_max_dying_1",
        "assets/sprites/bosses/high_max/dying/dying_1.png"
    );

    scene.load.image(
        "high_max_idle_1",
        "assets/sprites/bosses/high_max/idle/idle_1.png"
    );

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `high_max_attack_1_${i}`,
            `assets/sprites/bosses/high_max/attack_1/attack_1_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `high_max_attack_2_${i}`,
            `assets/sprites/bosses/high_max/attack_2/attack_2_${i}.png`
        );

    }

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `high_max_giga_attack_${i}`,
            `assets/sprites/bosses/high_max/giga_attack/giga_attack_${i}.png`
        );

    }
    
    scene.load.audio(
        "high_max_arriving",
        "assets/sounds/high_max/high_max_arrival.wav"
    );

    scene.load.audio(
        "high_max_attack_sphere",
        "assets/sounds/high_max/high_max_shot.wav"
    );

    scene.load.audio(
        "high_max_sphere",
        "assets/sounds/high_max/high_max_charge.wav"
    );

    scene.load.audio(
        "high_max_giga_attack_sphere",
        "assets/sounds/high_max/high_max_charged_sphere.wav"
    );

    scene.load.audio(
        "high_max_voice",
        "assets/sounds/high_max/high_max_voice.wav"
    );

}