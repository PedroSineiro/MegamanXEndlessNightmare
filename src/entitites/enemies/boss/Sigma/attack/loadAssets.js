export default function
loadAssets(scene) {


    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `sigma_attack_wave_${i}`,
            `assets/sprites/bosses/sigma/wave/wave_${i}.png`
        );

    }

}