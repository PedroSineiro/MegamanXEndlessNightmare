export default function loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `nightmare_snake_idle_${i}`,
            `assets/sprites/bosses/nightmare_snake/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `nightmare_snake_boost_${i}`,
            `assets/sprites/bosses/nightmare_snake/boost/boost_${i}.png`
        );

    }

    scene.load.image(
        "nightmare_snake_dying_1",
        "assets/sprites/bosses/nightmare_snake/dying/dying_1.png"
    );

    scene.load.audio(
        "nightmare_snake_flame",
        "assets/sounds/blaze_heatnix/giga_attack_sound.wav"
    );

}