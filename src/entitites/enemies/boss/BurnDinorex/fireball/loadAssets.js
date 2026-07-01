export default function
loadAssets(scene) {


    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `fireball_${i}`,
            `assets/sprites/bosses/burn_dinorex/fireball/fireball_${i}.png`
        );

    }

}