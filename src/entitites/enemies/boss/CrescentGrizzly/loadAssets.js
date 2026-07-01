export default function loadAssets(scene) {

    scene.load.image(
        "crescent_grizzly_jumping_1",
        "assets/sprites/bosses/crescent_grizzly/jumping/jumping_2.png"
    );

    scene.load.image(
        "crescent_grizzly_start_jumping_1",
        "assets/sprites/bosses/crescent_grizzly/jumping/jumping_1.png"
    );

    scene.load.image(
        "crescent_grizzly_falling_1",
        "assets/sprites/bosses/crescent_grizzly/jumping/jumping_2.png"
    );

    scene.load.image(
        "crescent_grizzly_landing_1",
        "assets/sprites/bosses/crescent_grizzly/jumping/jumping_1.png"
    );


    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `crescent_grizzly_idle_${i}`,
            `assets/sprites/bosses/crescent_grizzly/idle/idle_${i}.png`
        );

    }

    for (let i = 0; i <= 10; i++) {

        scene.load.image(
            `crescent_grizzly_start_attack_${i}`,
            `assets/sprites/bosses/crescent_grizzly/attack/attack_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `crescent_grizzly_attack_${i}`,
            `assets/sprites/bosses/crescent_grizzly/attack/attack_${10 + i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `crescent_grizzly_jumping_${i}`,
            `assets/sprites/bosses/crescent_grizzly/jumping/jumping_${i}.png`
        );

    }
    
    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `crescent_grizzly_giga_attack_${i}`,
            `assets/sprites/bosses/crescent_grizzly/giga_attack/attacking_${i}.png`
        );

    }


    scene.load.image(
        "crescent_grizzly_dying_1",
        "assets/sprites/bosses/crescent_grizzly/dying/dying_1.png"
    );
    
    scene.load.audio(
        "crescent_grizzly_landing",
        "assets/sounds/crescent_grizzly/landing.wav"
    );

    scene.load.audio(
        "crescent_grizzly_scream",
        "assets/sounds/crescent_grizzly/scream.wav"
    );

    scene.load.audio(
        "crescent_grizzly_breaking_ground",
        "assets/sounds/crescent_grizzly/breaking_ground.wav"
    );

    scene.load.audio(
        "crescent_grizzly_slash",
        "assets/sounds/crescent_grizzly/slash.wav"
    );

}