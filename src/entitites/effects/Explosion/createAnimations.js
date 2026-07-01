export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "explosion"
        )
    ) {
        return;
    }

    const frames = [];

    for (
        let i = 1;
        i <= 18;
        i++
    ) {

        frames.push({

            key:
                `explosion_${i}`

        });

    }

    scene.anims.create({

        key:
            "explosion",

        frames,

        frameRate: 18,

        repeat: 0

    });

}