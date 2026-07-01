export default function
loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `big_enemy3_shot_${i}`,
            `assets/sprites/enemies/big_3/missile/shot_${i}.png`
        );

    }

}