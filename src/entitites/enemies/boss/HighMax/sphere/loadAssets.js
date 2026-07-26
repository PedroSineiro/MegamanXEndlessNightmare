export default function
loadAssets(scene) {


    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `high_max_attack_sphere_${i}`,
            `assets/sprites/bosses/high_max/attack_sphere/attack_sphere_${i}.png`
        );

    }

}