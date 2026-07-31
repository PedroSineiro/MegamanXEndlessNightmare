export default function loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `night_zero_aura_${i}`,
            `assets/sprites/bosses/nightmare_zero/aura/aura_${i}.png`
        );

    }

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `night_zero_floating_${i}`,
            `assets/sprites/bosses/nightmare_zero/floating/floating_${i}.png`
        );

    }

    for (let i = 1; i <= 8; i++) {

        scene.load.image(
            `night_zero_shooting_${i}`,
            `assets/sprites/bosses/nightmare_zero/shooting/shooting_${i}.png`
        );

    }

    scene.load.audio(
        "night_zero_aura",
        "assets/sounds/NightmareZero/aura.wav"
    );

    scene.load.audio(
        "nightmare_shield",
        "assets/sounds/general/shield.wav"
    );
}