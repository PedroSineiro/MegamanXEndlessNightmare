export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "flying_enemy_3_idle"
        )
    ) {
        return;
    }

    const frames = [];

    for (let i = 1; i <= 5; i++) {

        frames.push({
            key: `flying_enemy_3_${i}`
        });

    }

    scene.anims.create({
        key: "flying_enemy_3_idle",
        frames,
        frameRate: 40,
        repeat: -1
    });

}