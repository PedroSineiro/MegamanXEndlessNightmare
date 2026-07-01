export default function
loadAssets(scene) {

    for (let i = 1; i <= 8; i++) {
        scene.load.image(
            `x_basic_shot_${i}`,
            `assets/sprites/characters/x/base_x/basic_shot/basic_shot_${i}.png`
        );
    }

    for (let i = 1; i <= 7; i++) {
        scene.load.image(
            `x_medium_shot_${i}`,
            `assets/sprites/characters/x/base_x/medium_shot/medium_shot_${i}.png`
        );
    }

    for (let i = 1; i <= 7; i++) {
        scene.load.image(
            `x_charged_shot_${i}`,
            `assets/sprites/characters/x/base_x/charged_shot/charged_shot_${i}.png`
        );
    }

    for (let i = 1; i <= 8; i++) {
        scene.load.image(
            `fourth_basic_shot_${i}`,
            `assets/sprites/characters/x/fourth/basic_shot/basic_shot_${i}.png`
        );
    }

    for (let i = 1; i <= 7; i++) {
        scene.load.image(
            `fourth_medium_shot_${i}`,
            `assets/sprites/characters/x/fourth/medium_shot/medium_shot_${i}.png`
        );
    }

    for (let i = 1; i <= 8; i++) {
        scene.load.image(
            `fourth_charged_shot_${i}`,
            `assets/sprites/characters/x/fourth/charged_shot/charged_shot_${i}.png`
        );
    }
}