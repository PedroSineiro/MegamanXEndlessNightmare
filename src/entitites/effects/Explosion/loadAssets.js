export default function
loadAssets(scene) {

    for (let i = 1; i <= 18; i++) {
        scene.load.image(
            `explosion_${i}`,
            `assets/sprites/explosion/explosion_${i}.png`
        );
    }

    scene.load.audio(
        "explosion",
        "assets/sounds/general/destroying_sound.wav"
    );

    scene.load.audio(
        "enemy_taking_damage",
        "assets/sounds/general/enemy_taking_damage.wav"
    );
}