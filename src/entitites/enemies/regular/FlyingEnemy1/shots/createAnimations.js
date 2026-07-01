export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "enemy1_shot"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "enemy1_shot",

        frames: [
            { key: "enemy1_shot_1" },
            { key: "enemy1_shot_2" }
        ],

        frameRate: 12,
        repeat: -1

    });

}