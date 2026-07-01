export default function
loadAssets(scene) {


    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `magma_dragoon_fireball_${i}`,
            `assets/sprites/bosses/magma_dragoon/fireball/fireball_${i}.png`
        );

    }

}