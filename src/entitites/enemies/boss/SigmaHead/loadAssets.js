export default function loadAssets(scene) {

    scene.load.image(
        "sigma_head_idle_1",
        "assets/sprites/bosses/sigma_head/idle/idle_1.png"
    );

    scene.load.image(
        "sigma_head_attack_1",
        "assets/sprites/bosses/sigma_head/attack/attack_1.png"
    );

    for (let i = 0; i <= 1; i++) {

        scene.load.image(
            `sigma_head_spawning_${i}`,
            `assets/sprites/bosses/sigma_head/spawning/spawning_${i}.png`
        );

    }

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `sigma_head_giga_attack_${i}`,
            `assets/sprites/bosses/sigma_head/giga_attack/giga_attack_${i}.png`
        );

    }

    scene.load.audio(
        "sigma_head_teleport",
        "assets/sounds/sigma/sigma_teleport.wav"
    );

    scene.load.audio(
        "sigma_head_electric",
        "assets/sounds/sigma/sigma_electric.wav"
    );

}