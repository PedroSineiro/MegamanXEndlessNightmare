export default function loadAssets(scene) {

    scene.load.image(
        "magma_dragoon_arriving_1",
        "assets/sprites/bosses/magma_dragoon/falling/falling_1.png"
    );

    scene.load.image(
        "magma_dragoon_dying_1",
        "assets/sprites/bosses/magma_dragoon/dying/dying_1.png"
    );

    scene.load.image(
        "magma_dragoon_idle_1",
        "assets/sprites/bosses/magma_dragoon/idle/idle_1.png"
    );

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `magma_dragoon_giga_${i}`,
            `assets/sprites/bosses/magma_dragoon/giga_attack/giga_attack_${i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `magma_dragoon_hadoken_up_${i}`,
            `assets/sprites/bosses/magma_dragoon/hadoken_up/hadoken_up_${i}.png`
        );

    }

    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `magma_dragoon_hadoken_down_${i}`,
            `assets/sprites/bosses/magma_dragoon/hadoken_down/hadoken_down_${i}.png`
        );

    }
    
    scene.load.audio(
        "magma_dragoon_landing",
        "assets/sounds/magma_dragoon/landing.wav"
    );

    scene.load.audio(
        "hadoken",
        "assets/sounds/magma_dragoon/hadoken.wav"
    );

    scene.load.audio(
        "magma_dragoon_flame",
        "assets/sounds/magma_dragoon/giga_attack.wav"
    );

}