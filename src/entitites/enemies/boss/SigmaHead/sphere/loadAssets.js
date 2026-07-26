export default function
loadAssets(scene) {


    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `sigma_head_attack_sphere_${i}`,
            `assets/sprites/bosses/sigma_head/attack_sphere/attack_sphere_${i}.png`
        );

    }

}