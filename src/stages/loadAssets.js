export default function loadStageAssets(scene) {

    scene.load.image(
        "destroyed_base_stage",
        "assets/backgrounds/destroyed_base_stage.png"
    );

    scene.load.image(
        "cave_stage",
        "assets/backgrounds/cave.png"
    );

    scene.load.image(
        "volcano_stage",
        "assets/backgrounds/volcano.png"
    );

    scene.load.image(
        "new_base_stage",
        "assets/backgrounds/new_base_stage.png"
    );

    scene.load.audio(
        "introduction_stage",
        "assets/music/introduction.mp3"
    );

    scene.load.audio(
        "new_base_stage",
        "assets/music/base.mp3"
    );

    scene.load.audio(
        "cave_stage",
        "assets/music/cave_theme.mp3"
    );

    scene.load.audio(
        "volcano_stage",
        "assets/music/volcano_theme.mp3"
    );

}