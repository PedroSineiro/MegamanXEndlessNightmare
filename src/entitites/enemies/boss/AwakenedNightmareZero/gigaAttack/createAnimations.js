export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "night_zero_giga_attack_slash"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "night_zero_giga_attack_slash",

        frames: [
            { key: "night_zero_giga_attack_slash" }
        ],

        frameRate: 1,
        repeat: 0

    });

}