export default function
loadAssets(scene) {

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `big_enemy2_shot_${i}`,
            `assets/sprites/enemies/big_2/missile/missile_${i}.png`
        );

    }

}