export default function
loadAssets(scene) {


    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `hadoken_${i}`,
            `assets/sprites/bosses/magma_dragoon/hadoken/hadoken_${i}.png`
        );

    }

}