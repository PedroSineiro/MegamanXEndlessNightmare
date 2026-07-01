export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "crescent_grizzly_slash"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "crescent_grizzly_slash",

        frames: [
            { key: "crescent_grizzly_slash_1" },
            { key: "crescent_grizzly_slash_2" },
            { key: "crescent_grizzly_slash_3" },
            { key: "crescent_grizzly_slash_4" },
            { key: "crescent_grizzly_slash_5" },
            { key: "crescent_grizzly_slash_6" },
            { key: "crescent_grizzly_slash_7" },
            { key: "crescent_grizzly_slash_8" }
        ],

        frameRate: 26,
        repeat: -1

    });

}