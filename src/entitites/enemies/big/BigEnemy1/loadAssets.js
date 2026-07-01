export default function loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `big_enemy_1_${i}`,
            `assets/sprites/enemies/mecha_1/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `big_enemy_1_attack_${i}`,
            `assets/sprites/enemies/mecha_1/attack/attack_${i}.png`
        );

    }

    scene.load.audio(
        "mecha_attack",
        "assets/sounds/general/mecha_punch.wav"
    );

    scene.load.audio(
        "mecha_moving",
        "assets/sounds/general/moving.wav"
    );

}