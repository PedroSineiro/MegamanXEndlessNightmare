export default function
loadAssets(scene) {

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `enemy1_shot_${i}`,
            `assets/sprites/enemies/flying_1/shots/shot_${i}.png`
        );

    }

}