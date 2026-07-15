export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "colonel_slash"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "colonel_slash",

        frames: [
            { key: "colonel_slash_1" },
            { key: "colonel_slash_2" },
            { key: "colonel_slash_3" }
        ],

        frameRate: 20,
        repeat: -1

    });

}