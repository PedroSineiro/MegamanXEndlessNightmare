export default function
loadAssets(scene) {
    
    scene.load.audio(
        "victory",
        "assets/sounds/beggining_ending_phase/mission_complete.wav"
    );

    scene.load.audio(
        "leaving",
        "assets/sounds/general/leaving_phase.wav"
    );

    scene.load.audio(
        "generic_shot",
        "assets/sounds/general/generic_shot_2.wav"
    );

    scene.load.audio(
        "ready",
        "assets/sounds/beggining_ending_phase/ready.wav"
    );

    scene.load.audio(
        "warning_beep",
        "assets/sounds/beggining_ending_phase/warning.wav"
    );

    scene.load.audio(
        "boss",
        "assets/music/boss.mp3"
    );

    scene.load.audio(
        "stage_clear",
        "assets/music/stage_clear.mp3"
    );

    scene.load.audio(
        "big_explosion",
        "assets/sounds/general/big_final_explosion.wav"
    );

    scene.load.audio(
        "choosing_menu",
        "assets/sounds/menu/choosing_menu_2.wav"
    );

    scene.load.audio(
        "selecting_menu",
        "assets/sounds/menu/selecting_menu.wav"
    );

    scene.load.audio(
        "equiping_armor",
        "assets/sounds/menu/selecting_menu.wav"
    );

    scene.load.image(
            "zero_hud",
            "assets/menu/zero_action_menu.png"
        );

    scene.load.image(
            "x_hud",
            "assets/menu/x_action_menu.png"
        );

    scene.load.image(
            "disabled_hud",
            "assets/menu/enemy_action_menu.png"
        );

    scene.load.image(
        "energy_tank",
        "assets/items/energy_tank.png"
    );

    scene.load.image(
        "x_empty_armor",
        "assets/sprites/characters/x/base_x/empty_armor/empty_armor.png"
    );

    scene.load.image(
        "fourth_empty_armor",
        "assets/sprites/characters/x/fourth/empty_armor/empty_armor.png"
    );

    scene.load.image(
        "ultimate_empty_armor",
        "assets/sprites/characters/x/ultimate/empty_armor/empty_armor.png"
    );

    scene.load.image(
        "zero_empty_armor",
        "assets/sprites/characters/zero/zero/empty_armor/empty_armor.png"
    );

    scene.load.image(
        "black_zero_empty_armor",
        "assets/sprites/characters/zero/black_zero/empty_armor/empty_armor.png"
    );


    for (let i = 1; i <= 11; i++) {
        scene.load.image(
            `ready_${i}`,
            `assets/images/ready/ready_${i}.png`
        );
    }

    scene.load.spritesheet(
    "warning",
    "assets/images/warning.png",
    {
        frameWidth: 300,
        frameHeight: 168
    }
);
}