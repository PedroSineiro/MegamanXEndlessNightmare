export default function loadAssets(scene) {

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `frost_walrus_idle_${i}`,
            `assets/sprites/bosses/frost_walrus/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 7; i++) {

        scene.load.image(
            `frost_walrus_roar_${i}`,
            `assets/sprites/bosses/frost_walrus/roar/roar_${i}.png`
        );

    }

    for (let i = 1; i <= 8; i++) {

        scene.load.image(
            `frost_walrus_attack_${i}`,
            `assets/sprites/bosses/frost_walrus/attack/attack_${i}.png`
        );

    }

    scene.load.image(
        "frost_walrus_dying_1",
        "assets/sprites/bosses/frost_walrus/dying/dying_1.png"
    );

    scene.load.image(
        "frost_walrus_arriving_1",
        "assets/sprites/bosses/frost_walrus/arriving/arriving_1.png"
    );
    

    scene.load.audio(
        "frost_walrus_scream",
        "assets/sounds/frost_walrus/scream.wav"
    );

    scene.load.audio(
        "frost_walrus_fist_hit",
        "assets/sounds/frost_walrus/fist_hit.wav"
    );

    scene.load.audio(
        "frost_walrus_launch_ice",
        "assets/sounds/frost_walrus/launch_ice.wav"
    );

}