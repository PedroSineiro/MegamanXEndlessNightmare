export default function
loadAssets(scene) {

    scene.load.image(
        "icicle_spear_left",
        "assets/sprites/bosses/frost_walrus/icicle_spear/icicle_spear_left.png"
    );

    scene.load.image(
        "icicle_spear_right",
        "assets/sprites/bosses/frost_walrus/icicle_spear/icicle_spear_right.png"
    );

    scene.load.image(
        "icicle_spear_attack",
        "assets/sprites/bosses/frost_walrus/icicle_spear/icicle_spear_attack.png"
    );

    scene.load.image(
        "icicle_spear_giga",
        "assets/sprites/bosses/frost_walrus/icicle_spear/icicle_spear_giga.png"
    );

    for(let i = 1; i<=4; i++){
        scene.load.image(
            `icicle_spear_attack_break_${i}`,
            `assets/sprites/bosses/frost_walrus/icicle_spear_break/icicle_spear_attack_break_${i}.png`
        );

            scene.load.image(
            `icicle_spear_giga_break_${i}`,
            `assets/sprites/bosses/frost_walrus/icicle_spear_break/icicle_spear_giga_break_${i}.png`
        );
    }

    scene.load.audio(
        "ice_break",
        "assets/sounds/frost_walrus/ice_breaking.wav"
    );

}