export default function
loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `ground_enemy_2_shot_${i}`,
            `assets/sprites/enemies/ground_2/shot/shot_${i}.png`
        );

    }

}