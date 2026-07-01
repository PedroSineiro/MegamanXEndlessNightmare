export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "ready_anim"
        )
    ) {
        return;
    }

    scene.anims.create({
        key: "ready_anim",
        frames: [
            { key: "ready_1", duration: 30 },
            { key: "ready_2", duration: 30 },
            { key: "ready_3", duration: 30 },
            { key: "ready_4", duration: 30 },
            { key: "ready_5", duration: 30 },
            { key: "ready_6", duration: 30 },
            { key: "ready_7", duration: 60 },
            { key: "ready_8", duration: 60 },
            { key: "ready_9", duration: 60 },
            { key: "ready_10", duration: 60 },
            { key: "ready_11", duration: 200 }
        ],
        frameRate: 16,
        repeat: 0
    });



    scene.anims.create({

        key: "warning_anim",

        frames:

            scene.anims.generateFrameNumbers(
                "warning"
            ),

        frameRate: 35,

        repeat: 0

    });

}