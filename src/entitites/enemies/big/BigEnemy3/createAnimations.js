export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "big_enemy_3_idle"
        )
    ) {
        return;
    }

    const frames = [];

    frames.push({
        key: "big_enemy_3_1"
    });

    scene.anims.create({
        key: "big_enemy_3_idle",
        frames,
        frameRate: 8,
        repeat: -1
    });


}