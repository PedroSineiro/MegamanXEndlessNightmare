export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "nightmare_idle"
        )
    ) {
        return;
    }

    let frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `nightmare_idle_${i}`
        });

    }

    scene.anims.create({
        key: "nightmare_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    for (let i = 2; i <= 4; i++) {

        frames.push({
            key: `nightmare_attack_${i}`
        });

    }

    scene.anims.create({
        key: "nightmare_attack",
        frames,
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    frames.push({
        key: "nightmare_stark_attack"
    });

    scene.anims.create({
        key: "nightmare_inter_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

}