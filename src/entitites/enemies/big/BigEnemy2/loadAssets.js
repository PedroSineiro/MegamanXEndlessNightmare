export default function loadAssets(scene) {

    scene.load.image(
            `big_enemy_2_1`,
            `assets/sprites/enemies/big_2/idle/idle_1.png`
        );

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `big_enemy_2_attack_${i}`,
            `assets/sprites/enemies/big_2/shooting/attacking_${i}.png`
        );

    }

}