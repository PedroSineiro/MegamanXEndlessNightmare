export default function loadAssets(scene) {

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `slash_beast_idle_${i}`,
            `assets/sprites/bosses/slash_beast/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `slash_beast_running_${i}`,
            `assets/sprites/bosses/slash_beast/running/running_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `slash_beast_idle_scream_${i}`,
            `assets/sprites/bosses/slash_beast/idle_scream/idle_scream_${i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `slash_beast_start_attack_${i}`,
            `assets/sprites/bosses/slash_beast/start_attack/start_attack_${i}.png`
        );

    }

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `slash_beast_attack_${i}`,
            `assets/sprites/bosses/slash_beast/attack/attack_${i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `slash_beast_stop_attack_${i}`,
            `assets/sprites/bosses/slash_beast/stop_attack/stop_attack_${i}.png`
        );

    }

    for (let i = 1; i <= 13; i++) {

        scene.load.image(
            `slash_beast_giga_attack_${i}`,
            `assets/sprites/bosses/slash_beast/giga_attack/giga_attack_${i}.png`
        );

    }

    scene.load.image(
        "slash_beast_dying_1",
        "assets/sprites/bosses/slash_beast/dying/dying_1.png"
    );
    

    scene.load.audio(
        "slash_beast_attack_scream",
        "assets/sounds/slash_beast/scream_attack.wav"
    );

   scene.load.audio(
        "slash_beast_giga_attack_scream",
        "assets/sounds/slash_beast/giga_attack.wav"
    );

     scene.load.audio(
        "slash_beast_stop_attack",
        "assets/sounds/slash_beast/stop_attack.wav"
    );

}