export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "big_enemy3_shot"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "big_enemy3_shot",

        frames: [
            { key: "big_enemy3_shot_1" },
            { key: "big_enemy3_shot_2" },
            { key: "big_enemy3_shot_3" },
            { key: "big_enemy3_shot_4" }
        ],

        frameRate: 12,
        repeat: -1

    });

}