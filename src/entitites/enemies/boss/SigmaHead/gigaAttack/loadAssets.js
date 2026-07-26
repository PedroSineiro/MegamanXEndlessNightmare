export default function
loadAssets(scene) {


    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `sigma_block_${i}`,
            `assets/sprites/bosses/sigma/block/block_${i}.png`
        );

    }

}