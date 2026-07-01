export default function loadAssets(scene) {

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `ground_enemy_2_idle_${i}`,
            `assets/sprites/enemies/ground_2/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `ground_enemy_2_attack_${i}`,
            `assets/sprites/enemies/ground_2/shooting/shooting_${i}.png`
        );

    }

    scene.load.audio(
            "ground_enemy_2_shot",
            `assets/sounds/general/generic_shot_2.wav`
        );

}