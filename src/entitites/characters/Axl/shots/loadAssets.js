export default function loadAssets(scene) {

    scene.load.image(

        "axl_shot_1",

        "assets/sprites/characters/axl/axl/shot/shot_1.png"

    );

    scene.load.image(

        "axl_shot_2",

        "assets/sprites/characters/axl/axl/shot/shot_2.png"

    );

    scene.load.image(

        "axl_bazooka_1",

        "assets/sprites/characters/axl/axl/bazooka_shot/bazooka_shot_1.png"

    );

    scene.load.image(

        "axl_bazooka_2",

        "assets/sprites/characters/axl/axl/bazooka_shot/bazooka_shot_2.png"

    );

    for(let i = 1; i<=12; i++) {
        scene.load.image(

            `axl_shock_${i}`,

            `assets/sprites/characters/axl/axl/shock/shock_${i}.png`

        );
    }

    scene.load.audio(
        "axl_bazooka_shot",

        "assets/sounds/Axl/bazooka.wav"
    )

    scene.load.audio(
        "axl_shock_gun",

        "assets/sounds/Axl/shock_gun.wav"
    )

    scene.load.audio(
        "axl_shot",

        "assets/sounds/Axl/shot.wav"
    )

}