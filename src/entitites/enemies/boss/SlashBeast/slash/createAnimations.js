export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "slash_beast_slash"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "slash_beast_slash",

        frames: [
            { key: "slash_beast_slash_1" },
            { key: "slash_beast_slash_2" }
        ],

        frameRate: 26,
        repeat: -1

    });

}