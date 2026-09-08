export default function
loadAssets(scene) {


    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `blaze_fireball_${i}`,
            `assets/sprites/bosses/blaze_heatnix/magma/magma_${i}.png`
        );

    }

}