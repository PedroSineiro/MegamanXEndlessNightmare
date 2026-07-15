export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "spiral_pegasus_hurricane"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "spiral_pegasus_hurricane",

        frames: [
            { key: "spiral_pegasus_hurricane_1" },
            { key: "spiral_pegasus_hurricane_2" }
        ],

        frameRate: 26,
        repeat: -1

    });

}