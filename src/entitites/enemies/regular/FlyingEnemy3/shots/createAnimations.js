export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "enemy3_shot"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "enemy3_shot",

        frames: [
            { key: "enemy3_shot_1" },
            { key: "enemy3_shot_2" },
            { key: "enemy3_shot_3" }
        ],

        frameRate: 12,
        repeat: -1

    });

}