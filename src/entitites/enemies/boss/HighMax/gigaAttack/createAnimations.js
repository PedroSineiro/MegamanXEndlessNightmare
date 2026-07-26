export default function
createAnimations(scene) {

    scene.anims.create({

        key: "high_max_sphere",

        frames: [
            { key: "high_max_sphere_1" },
            { key: "high_max_sphere_2" },
            { key: "high_max_sphere_3" },
            { key: "high_max_sphere_4" }
        ],

        frameRate: 26,
        repeat: -1

    });

    scene.anims.create({

        key: "high_max_giga_attack_sphere",

        frames: [
            { key: "high_max_giga_attack_sphere_1" },
            { key: "high_max_giga_attack_sphere_2" },
            { key: "high_max_giga_attack_sphere_3" },
            { key: "high_max_giga_attack_sphere_4" },
            { key: "high_max_giga_attack_sphere_5" },
            { key: "high_max_giga_attack_sphere_6" },
        ],

        frameRate: 26,
        repeat: -1

    });

}