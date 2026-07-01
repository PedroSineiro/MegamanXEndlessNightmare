export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "big_enemy4_shot"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "big_enemy4_shot",

        frames: [
            { key: "big_enemy4_shot_1" }
        ],

        frameRate: 12,
        repeat: -1

    });

}