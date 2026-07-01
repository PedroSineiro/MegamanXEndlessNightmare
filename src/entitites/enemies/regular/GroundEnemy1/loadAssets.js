export default function loadAssets(scene) {

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `ground_enemy_1_${i}`,
            `assets/sprites/enemies/ground_1/idle/idle_${i}.png`
        );

    }

}