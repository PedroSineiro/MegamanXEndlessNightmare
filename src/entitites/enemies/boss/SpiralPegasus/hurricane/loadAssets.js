export default function
loadAssets(scene) {


    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `spiral_pegasus_hurricane_${i}`,
            `assets/sprites/bosses/spiral_pegasus/hurricane/hurricane_${i}.png`
        );

    }

}