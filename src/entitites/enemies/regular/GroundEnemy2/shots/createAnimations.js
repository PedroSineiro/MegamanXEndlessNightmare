export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "ground_enemy_2_shot"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "ground_enemy_2_shot",

        frames: [
            { key: "ground_enemy_2_shot_1" },
            { key: "ground_enemy_2_shot_2" },
            { key: "ground_enemy_2_shot_3" },
            { key: "ground_enemy_2_shot_4" }
        ],

        frameRate: 12,
        repeat: -1

    });

}