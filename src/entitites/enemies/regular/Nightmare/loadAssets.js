export default function loadAssets(scene) {

    for (let i = 1; i <= 4; i++) {

        scene.load.image(
            `nightmare_idle_${i}`,
            `assets/sprites/enemies/nightmare/idle/idle_${i}.png`
        );

    }

    scene.load.image(
            `nightmare_stark_attack`,
            `assets/sprites/enemies/nightmare/shooting/shooting_1.png`
        );

    scene.load.audio(
            "nightmare_shot",
            `assets/sounds/general/nightmare_shot.wav`
        );


    for (let i = 2; i <= 4; i++) {

        scene.load.image(
            `nightmare_attack_${i}`,
            `assets/sprites/enemies/nightmare/shooting/shooting_${i}.png`
        );

    }

}