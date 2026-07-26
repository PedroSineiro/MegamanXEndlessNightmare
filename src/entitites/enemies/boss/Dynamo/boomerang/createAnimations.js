export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "dynamo_boomerang"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "dynamo_boomerang",

        frames: [
            { key: "dynamo_boomerang_1" },
            { key: "dynamo_boomerang_2" },
            { key: "dynamo_boomerang_3" },
            { key: "dynamo_boomerang_4" }
        ],

        frameRate: 60,
        repeat: -1

    });

}