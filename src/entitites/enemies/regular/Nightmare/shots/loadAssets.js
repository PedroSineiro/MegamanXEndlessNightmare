export default function
loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `nightmare_shot_${i}`,
            `assets/sprites/enemies/nightmare/shot/shot_${i}.png`
        );

    }

}