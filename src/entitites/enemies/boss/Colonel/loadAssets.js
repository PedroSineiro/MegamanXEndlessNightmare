export default function loadAssets(scene) {

    scene.load.image(
        "colonel_dying_1",
        "assets/sprites/bosses/colonel/dying/dying_1.png"
    );

    scene.load.image(
        "colonel_start_teleport",
        "assets/sprites/bosses/colonel/start_teleport/start_teleport_1.png"
    );

    for (let i = 1; i <= 3; i++) {

        scene.load.image(
            `colonel_idle_${i}`,
            `assets/sprites/bosses/colonel/idle/idle_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `colonel_teleport_${i}`,
            `assets/sprites/bosses/colonel/teleport/teleport_${i}.png`
        );

    }

    for (let i = 1; i <= 6; i++) {

        scene.load.image(
            `colonel_slash_a_${i}`,
            `assets/sprites/bosses/colonel/slash_a/slash_a_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `colonel_slash_b_${i}`,
            `assets/sprites/bosses/colonel/slash_b/slash_b_${i}.png`
        );

    }

    scene.load.audio(
        "colonel_slash_a",
        "assets/sounds/colonel/slash_a.wav"
    );
    
    scene.load.audio(
        "colonel_slash_b",
        "assets/sounds/colonel/slash_b.wav"
    );

    scene.load.audio(
        "colonel_teleport",
        "assets/sounds/colonel/teleport.wav"
    );


}