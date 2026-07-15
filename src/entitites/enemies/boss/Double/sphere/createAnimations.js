export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "double_sphere"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "double_sphere",

        frames: [
            { key: "double_sphere_1" },
            { key: "double_sphere_2" },
            { key: "double_sphere_3" },
            { key: "double_sphere_4" },
            { key: "double_sphere_5" },
            { key: "double_sphere_6" }
        ],

        frameRate: 26,
        repeat: -1

    });

}