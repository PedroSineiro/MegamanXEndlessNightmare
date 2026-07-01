export default function loadAssets(scene) {

    for (let i = 1; i <= 9; i++) {

        scene.load.image(
            `flying_enemy_1_${i}`,
            `assets/sprites/enemies/flying_1/idle/flying_${i}.png`
        );

    }

}