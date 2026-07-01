export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "burn_dinorex_fireball"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "burn_dinorex_fireball",

        frames: [
            { key: "fireball_1" },
            { key: "fireball_2" },
            { key: "fireball_3" },
            { key: "fireball_4" }
        ],

        frameRate: 26,
        repeat: -1

    });

}