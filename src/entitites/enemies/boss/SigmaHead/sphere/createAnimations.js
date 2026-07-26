export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "sigma_head_attack_sphere"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "sigma_head_attack_sphere",

        frames: [
            { key: "sigma_head_attack_sphere_1" },
            { key: "sigma_head_attack_sphere_2" },
            { key: "sigma_head_attack_sphere_3" },
            { key: "sigma_head_attack_sphere_4" }
        ],

        frameRate: 26,
        repeat: -1

    });

}