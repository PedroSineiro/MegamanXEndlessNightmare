export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "blizzard_wolfang_ice"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "blizzard_wolfang_ice",

        frames: [
            { key: "blizzard_wolfang_ice_1" },
            { key: "blizzard_wolfang_ice_2" },
            { key: "blizzard_wolfang_ice_3" },
            { key: "blizzard_wolfang_ice_4" },
            { key: "blizzard_wolfang_ice_5" }
        ],

        frameRate: 26,
        repeat: -1

    });

}