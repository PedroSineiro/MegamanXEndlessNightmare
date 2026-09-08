export default function loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `blaze_heatnix_idle_${i}`,
            `assets/sprites/bosses/blaze_heatnix/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `blaze_heatnix_attack_${i}`,
            `assets/sprites/bosses/blaze_heatnix/attack/attack_${i}.png`
        );

    }

    for (let i = 1; i <= 8; i++) {

        scene.load.image(
            `blaze_heatnix_prepare_${i}`,
            `assets/sprites/bosses/blaze_heatnix/prepare/prepare_${i}.png`
        );

    }


    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `blaze_heatnix_attack_${i}`,
            `assets/sprites/bosses/blaze_heatnix/attack/attack_${i}.png`
        );

    }


    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `blaze_heatnix_giga_attack_${i}`,
            `assets/sprites/bosses/blaze_heatnix/giga_attack/giga_attack_${i}.png`
        );

    }

    scene.load.image(
        "blaze_heatnix_dying_1",
        "assets/sprites/bosses/blaze_heatnix/dying/dying_1.png"
    );
    
    scene.load.audio(
        "blaze_heatnix_attack",
        "assets/sounds/blaze_heatnix/attack.wav"
    );

    scene.load.audio(
        "blaze_heatnix_dying",
        "assets/sounds/blaze_heatnix/dying.wav"
    );

    scene.load.audio(
        "blaze_heatnix_wing_beat",
        "assets/sounds/blaze_heatnix/wing_beat.wav"
    );

    scene.load.audio(
        "blaze_heatnix_giga_attack",
        "assets/sounds/blaze_heatnix/giga_attack.wav"
    );

    scene.load.audio(
        "blaze_heatnix_flame",
        "assets/sounds/blaze_heatnix/giga_attack_sound.wav"
    );

}