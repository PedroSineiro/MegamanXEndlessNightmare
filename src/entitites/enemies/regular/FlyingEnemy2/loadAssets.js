export default function loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `flying_enemy_2_${i}`,
            `assets/sprites/enemies/flying_2/idle/idle_${i}.png`
        );

    }

}