export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "big_enemy_2_idle"
        )
    ) {
        return;
    }

    let frames = [];

    frames.push({
        key: "big_enemy_2_1"
    });

    scene.anims.create({
        key: "big_enemy_2_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 2; i++) {

        frames.push({
            key: `big_enemy_2_attack_${i}`
        });

    }

    scene.anims.create({
        key: "big_enemy_2_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

    frames = [];

    for (let i = 2; i >= 1; i--) {

        frames.push({
            key: `big_enemy_2_attack_${i}`
        });

    }

    scene.anims.create({
        key: "big_enemy_2_stop_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

}