export default function loadAssets(scene) {

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `flying_enemy_3_${i}`,
            `assets/sprites/enemies/flying_3/idle/idle_${i}.png`
        );

    }

}