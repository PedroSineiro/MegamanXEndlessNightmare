export default function loadAssets(scene) {

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `blizzard_wolfang_idle_${i}`,
            `assets/sprites/bosses/blizzard_wolfang/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `blizzard_wolfang_howl_${i}`,
            `assets/sprites/bosses/blizzard_wolfang/howl/howl_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `blizzard_wolfang_running_${i}`,
            `assets/sprites/bosses/blizzard_wolfang/walking/walking_${i}.png`
        );

    }

    for (let i = 1; i <= 20; i++) {

        scene.load.image(
            `blizzard_wolfang_attack_${i}`,
            `assets/sprites/bosses/blizzard_wolfang/attack/attack_${i}.png`
        );

    }

    scene.load.image(
        "blizzard_wolfang_stop_charge",
        "assets/sprites/bosses/blizzard_wolfang/jumping/jumping_1.png"
    );

    scene.load.image(
        "blizzard_wolfang_charge",
        "assets/sprites/bosses/blizzard_wolfang/jumping/jumping_2.png"
    );

    scene.load.image(
        "blizzard_wolfang_dying_1",
        "assets/sprites/bosses/blizzard_wolfang/dying/dying_1.png"
    );


    scene.load.audio(
        "blizzard_wolfang_giga_attack_scream",
        "assets/sounds/blizzard_wolfang/jump.wav"
    );

    scene.load.audio(
        "blizzard_wolfang_howl",
        "assets/sounds/blizzard_wolfang/howl.wav"
    );

    scene.load.audio(
        "blizzard_wolfang_dying",
        "assets/sounds/blizzard_wolfang/dying.wav"
    );

    scene.load.audio(
        "blizzard_wolfang_charge",
        "assets/sounds/blizzard_wolfang/jump.wav"
    );

}