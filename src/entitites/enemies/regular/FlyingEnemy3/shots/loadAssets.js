export default function
loadAssets(scene) {

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `enemy3_shot_${i}`,
            `assets/sprites/enemies/flying_3/shots/shot_${i}.png`
        );

    }

}