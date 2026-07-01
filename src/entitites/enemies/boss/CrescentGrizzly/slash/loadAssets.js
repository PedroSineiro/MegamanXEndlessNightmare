export default function
loadAssets(scene) {


    for (let i = 1; i <= 8; i++) {

        scene.load.image(
            `crescent_grizzly_slash_${i}`,
            `assets/sprites/bosses/crescent_grizzly/slash/slash_${i}.png`
        );

    }

}