export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "big_enemy2_shot"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "big_enemy2_shot",

        frames: [
            { key: "big_enemy2_shot_1" },
            { key: "big_enemy2_shot_2" },
            { key: "big_enemy2_shot_3" }
        ],

        frameRate: 12,
        repeat: -1

    });

}