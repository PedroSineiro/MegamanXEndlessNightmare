export default function
loadAssets(scene) {


    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `high_max_sphere_${i}`,
            `assets/sprites/bosses/high_max/sphere/sphere_${i}.png`
        );

    }

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `high_max_giga_attack_sphere_${i}`,
            `assets/sprites/bosses/high_max/giga_attack_sphere/sphere_${i}.png`
        );

    }

}