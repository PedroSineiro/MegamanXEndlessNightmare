export default function loadAssets(scene) {

    scene.load.image(
        "spiral_pegasus_arriving_1",
        "assets/sprites/bosses/spiral_pegasus/arriving/arriving_1.png"
    );

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `spiral_pegasus_landing_${i}`,
            `assets/sprites/bosses/spiral_pegasus/landing/landing_${i}.png`
        );

    }

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `spiral_pegasus_idle_${i}`,
            `assets/sprites/bosses/spiral_pegasus/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `spiral_pegasus_pointing_${i}`,
            `assets/sprites/bosses/spiral_pegasus/pointing/pointing_${i}.png`
        );

    }

    for (let i = 0; i <= 1; i++) {

        scene.load.image(
            `spiral_pegasus_flying_${i}`,
            `assets/sprites/bosses/spiral_pegasus/flying/flying_${i}.png`
        );

    }

    scene.load.image(
        "spiral_pegasus_attack_1",
        "assets/sprites/bosses/spiral_pegasus/attack/attack_1.png"
    );

    for (let i = 0; i <= 8; i++) {

        scene.load.image(
            `spiral_pegasus_giga_attack_${i}`,
            `assets/sprites/bosses/spiral_pegasus/giga_attack/giga_attack_${i}.png`
        );

    }


    scene.load.image(
        "spiral_pegasus_dying_1",
        "assets/sprites/bosses/spiral_pegasus/dying/dying_1.png"
    );

    scene.load.audio(
        "spiral_pegasus_hurricane",
        "assets/sounds/spiral_pegasus/hurricane.wav"
    );

}