export default function
createAnimations(scene) {

    if (
        scene.anims.exists(
            "icicle_spear_left"
        )
    ) {
        return;
    }

    scene.anims.create({

        key: "icicle_spear_left",

        frames: [
            { key: "icicle_spear_left" }
        ],

        frameRate: 26,
        repeat: -1

    });

    scene.anims.create({

        key: "icicle_spear_right",

        frames: [
            { key: "icicle_spear_right" }
        ],

        frameRate: 26,
        repeat: -1

    });

    scene.anims.create({

        key: "icicle_spear_attack",

        frames: [
            { key: "icicle_spear_attack" }
        ],

        frameRate: 26,
        repeat: -1

    });

    scene.anims.create({

        key: "icicle_spear_giga",

        frames: [
            { key: "icicle_spear_giga" }
        ],

        frameRate: 26,
        repeat: -1

    });

    scene.anims.create({

        key: "icicle_spear_attack_break",

        frames: [
            { key: "icicle_spear_attack_break_1" },
            { key: "icicle_spear_attack_break_2" },
            { key: "icicle_spear_attack_break_3" },
            { key: "icicle_spear_attack_break_4" },
        ],

        frameRate: 14,
        repeat: 0

    });

    scene.anims.create({

        key: "icicle_spear_giga_break",

        frames: [
            { key: "icicle_spear_giga_break_1" },
            { key: "icicle_spear_giga_break_2" },
            { key: "icicle_spear_giga_break_3" },
            { key: "icicle_spear_giga_break_4" },
        ],

        frameRate: 14,
        repeat: 0

    });

}