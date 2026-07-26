export default function loadAssets(scene) {

    for (let i = 1; i <= 11; i++) {

        scene.load.image(
            `dynamo_spawning_${i}`,
            `assets/sprites/bosses/dynamo/arriving/arriving_${i}.png`
        );

    }

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `dynamo_idle_${i}`,
            `assets/sprites/bosses/dynamo/idle/idle_${i}.png`
        );

    }
    
    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `dynamo_attack_${i}`,
            `assets/sprites/bosses/dynamo/attack/attack_${i}.png`
        );

    }

    for (let i = 1; i <= 13; i++) {

        scene.load.image(
            `dynamo_giga_attack_${i}`,
            `assets/sprites/bosses/dynamo/giga_attack/giga_attack_${i}.png`
        );

    }

     scene.load.image(
            "dynamo_giga_attack_7_1",
            "assets/sprites/bosses/dynamo/giga_attack/giga_attack_7_1.png"
        );

    scene.load.image(
        "dynamo_dying_1",
        "assets/sprites/bosses/dynamo/dying/dying_1.png"
    );

    scene.load.audio(
        "dynamo_arriving",
        "assets/sounds/dynamo/dynamo_arriving.wav"
    );

    scene.load.audio(
        "dynamo_boomerang",
        "assets/sounds/dynamo/dynamo_throw.wav"
    );

    scene.load.audio(
        "dynamo_giga_attack",
        "assets/sounds/dynamo/dynamo_giga_attack.wav"
    );

}