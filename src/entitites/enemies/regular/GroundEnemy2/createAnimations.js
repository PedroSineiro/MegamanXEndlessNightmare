export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "ground_enemy_2_idle"
        )
    ) {
        return;
    }

    let frames = [];

    for (let i = 1; i <= 6; i++) {

        frames.push({
            key: `ground_enemy_2_idle_${i}`
        });

    }

    scene.anims.create({
        key: "ground_enemy_2_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });

    frames = [];

    for (let i = 1; i <= 2; i++) {

        frames.push({
            key: `ground_enemy_2_attack_${i}`
        });

    }

    scene.anims.create({
        key: "ground_enemy_2_start_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });

    frames = [];

    for (let i = 5; i >= 1; i--) {

        frames.push({
            key: `ground_enemy_2_attack_${i}`
        });

    }

    scene.anims.create({
        key: "ground_enemy_2_stop_attack",
        frames,
        frameRate: 8,
        repeat: 0
    });


}