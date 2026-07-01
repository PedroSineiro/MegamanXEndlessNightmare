export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "nightmare_shot"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "nightmare_shot",

        frames: [
            { key: "nightmare_shot_1" },
            { key: "nightmare_shot_2" },
            { key: "nightmare_shot_3" },
            { key: "nightmare_shot_4" }
        ],

        frameRate: 12,
        repeat: -1

    });

}