export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "cyber_peacock_arrow"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "cyber_peacock_arrow",

        frames: [
            { key: "cyber_peacock_arrow_1" },
            { key: "cyber_peacock_arrow_2" }
        ],

        frameRate: 20,
        repeat: -1

    });

}