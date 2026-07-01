export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "hadoken"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "hadoken",

        frames: [
            { key: "hadoken_1" },
            { key: "hadoken_2" },
            { key: "hadoken_3" },
            { key: "hadoken_4" }
        ],

        frameRate: 26,
        repeat: -1

    });

}