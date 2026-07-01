export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "magma_dragoon_fireball"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "magma_dragoon_fireball",

        frames: [
            { key: "magma_dragoon_fireball_1" },
            { key: "magma_dragoon_fireball_2" },
            { key: "magma_dragoon_fireball_3" },
            { key: "magma_dragoon_fireball_4" },
            { key: "magma_dragoon_fireball_5" },
        ],

        frameRate: 26,
        repeat: -1

    });

}