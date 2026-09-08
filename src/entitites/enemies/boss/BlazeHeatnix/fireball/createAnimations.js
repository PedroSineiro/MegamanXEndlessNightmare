export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "blaze_heatnix_fireball"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "blaze_heatnix_fireball",

        frames: [
            { key: "blaze_fireball_1" },
            { key: "blaze_fireball_2" },
            { key: "blaze_fireball_3" },
            { key: "blaze_fireball_4" }
        ],

        frameRate: 26,
        repeat: -1

    });

}