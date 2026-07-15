export default function loadAssets(scene) {

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `double_idle_${i}`,
            `assets/sprites/bosses/double/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `double_devil_slash_down_${i}`,
            `assets/sprites/bosses/double/devil_slash_down/devil_slash_down_${i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `double_end_devil_slash_${i}`,
            `assets/sprites/bosses/double/end_devil_slash/end_devil_slash_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `double_devil_slash_${i}`,
            `assets/sprites/bosses/double/devil_slash/devil_slash_${i}.png`
        );

    }

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `double_attack_${i}`,
            `assets/sprites/bosses/double/attack/attack_${i}.png`
        );

    }

    scene.load.image(
        "double_jump_1",
        "assets/sprites/bosses/double/jump/jump_1.png"
    );

    scene.load.image(
        "double_dying_1",
        "assets/sprites/bosses/double/dying/dying_1.png"
    );
    
    scene.load.audio(
        "double_arrive",
        "assets/sounds/double/double_arrival.wav"
    );

    scene.load.audio(
        "double_attack",
        "assets/sounds/double/double_attack.wav"
    );

    scene.load.audio(
        "double_devil_slash",
        "assets/sounds/double/double_devil_slash.wav"
    );

}