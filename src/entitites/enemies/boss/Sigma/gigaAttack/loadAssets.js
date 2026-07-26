export default function
loadAssets(scene) {


    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `sigma_head_giga_attack_sphere_${i}`,
            `assets/sprites/bosses/sigma_head/giga_attack_sphere/giga_attack_sphere_${i}.png`
        );

    }

}