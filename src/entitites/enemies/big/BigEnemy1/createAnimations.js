export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "big_enemy_1_idle"
        )
    ) {
        return;
    }

    let frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `big_enemy_1_${i}`
        });

    }

    scene.anims.create({
        key: "big_enemy_1_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: "big_enemy_1_dash",
        frames: [{ key: "big_enemy_1_3", duration: 60 }],
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `big_enemy_1_attack_${i}`
        });

    }

    scene.anims.create({
        key: "big_enemy_1_start_attack",
        frames,
        frameRate: 12,
        repeat: 0
    });

    frames = [];

    for (let i = 5; i <= 6; i++) {

        frames.push({
            key: `big_enemy_1_attack_${i}`
        });

    }

    scene.anims.create({
        key: "big_enemy_1_attack",
        frames,
        frameRate: 12,
        repeat: 0
    });

}