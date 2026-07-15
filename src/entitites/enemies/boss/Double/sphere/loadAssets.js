export default function
loadAssets(scene) {


    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `double_sphere_${i}`,
            `assets/sprites/bosses/double/sphere/sphere_${i}.png`
        );

    }

}