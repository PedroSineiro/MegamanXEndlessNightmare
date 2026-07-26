export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "sigma_attack_wave"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "sigma_attack_wave",

        frames: [
            { key: "sigma_attack_wave_1" },
            { key: "sigma_attack_wave_2" },
            { key: "sigma_attack_wave_3" }
        ],

        frameRate: 26,
        repeat: -1

    });

}