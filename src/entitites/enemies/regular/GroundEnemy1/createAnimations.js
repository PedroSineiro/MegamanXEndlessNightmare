export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "ground_enemy_1_idle"
        )
    ) {
        return;
    }

    const frames = [];

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `ground_enemy_1_${i}`
        });

    }

    scene.anims.create({
        key: "ground_enemy_1_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });

}