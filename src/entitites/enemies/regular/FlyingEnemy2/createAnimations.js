export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "flying_enemy_2_idle"
        )
    ) {
        return;
    }

    const frames = [];

    for (let i = 1; i <= 4; i++) {

        frames.push({
            key: `flying_enemy_2_${i}`
        });

    }

    scene.anims.create({
        key: "flying_enemy_2_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });

}