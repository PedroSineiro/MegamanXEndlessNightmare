export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "big_enemy_4_idle"
        )
    ) {
        return;
    }

    let frames = [];

    frames.push({
        key: "big_enemy_4_1"
    });

    scene.anims.create({
        key: "big_enemy_4_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    frames.push({
            key: "big_enemy_4_attack_3"
        });

    scene.anims.create({
        key: "big_enemy_4_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

    frames = [];

    for (let i = 1; i <= 2; i++) {

        frames.push({
            key: `big_enemy_4_attack_${i}`
        });

    }

    scene.anims.create({
        key: "big_enemy_4_start_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

    frames = [];

    for (let i = 2; i >= 1; i--) {

        frames.push({
            key: `big_enemy_4_attack_${i}`
        });

    }

    scene.anims.create({
        key: "big_enemy_4_stop_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

}