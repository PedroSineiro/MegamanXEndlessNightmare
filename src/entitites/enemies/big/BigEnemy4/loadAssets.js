export default function loadAssets(scene) {

    scene.load.image(
            `big_enemy_4_1`,
            `assets/sprites/enemies/big_4/idle/idle_1.png`
        );

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `big_enemy_4_attack_${i}`,
            `assets/sprites/enemies/big_4/shooting/shooting_${i}.png`
        );

    }

}