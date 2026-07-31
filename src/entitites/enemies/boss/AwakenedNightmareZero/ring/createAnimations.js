export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "night_zero_ring"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "night_zero_ring",

        frames: [
            { key: "night_zero_ring_1" },
            { key: "night_zero_ring_2" },
            { key: "night_zero_ring_3" }
        ],

        frameRate: 30,
        repeat: -1

    });

}