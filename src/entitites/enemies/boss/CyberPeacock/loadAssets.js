export default function loadAssets(scene) {

    scene.load.image(
        "cyber_peacock_dying_1",
        "assets/sprites/bosses/cyber_peacock/dying/dying_1.png"
    );


    for (let i = 1; i <= 37; i++) {

        scene.load.image(
            `cyber_peacock_spawning_${i}`,
            `assets/sprites/bosses/cyber_peacock/spawning/spawning_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `cyber_peacock_idle_${i}`,
            `assets/sprites/bosses/cyber_peacock/idle/idle_${i}.png`
        );

    }

    for (let i = 0; i <= 3; i++) {

        scene.load.image(
            `cyber_peacock_teleport_${i}`,
            `assets/sprites/bosses/cyber_peacock/teleport/teleport_${i}.png`
        );

    }

    for (let i = 1; i <= 15; i++) {

        scene.load.image(
            `cyber_peacock_attack_${i}`,
            `assets/sprites/bosses/cyber_peacock/attack/attack_${i}.png`
        );

    }

    for (let i = 1; i <= 14; i++) {

        scene.load.image(
            `cyber_peacock_giga_attack_${i}`,
            `assets/sprites/bosses/cyber_peacock/giga_attack/giga_attack_${i}.png`
        );

    }

    scene.load.image(
        "cyber_peacock_aim",
        "assets/sprites/bosses/cyber_peacock/aim/aim.png"
    );

    scene.load.image(
        "cyber_peacock_teleport_giga",
        "assets/sprites/bosses/cyber_peacock/teleport/teleport_giga_attack.png"
    );
    
    scene.load.audio(
        "cyber_peacock_arriving",
        "assets/sounds/cyber_peacock/spawning.wav"
    );

    scene.load.audio(
        "cyber_peacock_flex",
        "assets/sounds/cyber_peacock/spawning_2.wav"
    );

    scene.load.audio(
        "cyber_peacock_lock",
        "assets/sounds/cyber_peacock/lock_in.wav"
    );

    scene.load.audio(
        "cyber_peacock_arrow",
        "assets/sounds/cyber_peacock/shot.wav"
    );

    scene.load.audio(
        "cyber_peacock_teleport",
        "assets/sounds/cyber_peacock/disapearing.wav"
    );

    scene.load.audio(
        "cyber_peacock_giga_attack",
        "assets/sounds/cyber_peacock/giga_attack.wav"
    );


}