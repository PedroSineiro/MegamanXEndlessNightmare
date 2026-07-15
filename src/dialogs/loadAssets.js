export default function
loadAssets(scene) {

    scene.load.audio(
        "text_beep",
        "assets/sounds/dialog/dialog.wav"
    );

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_x_idle_${i}`,
            `assets/sprites/mugshot/x/base_x/idle/idle_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_x_speaking_${i}`,
            `assets/sprites/mugshot/x/base_x/speaking/speaking_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_fourth_idle_${i}`,
            `assets/sprites/mugshot/x/fourth/idle/idle_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_fourth_speaking_${i}`,
            `assets/sprites/mugshot/x/fourth/speaking/speaking_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_ultimate_idle_${i}`,
            `assets/sprites/mugshot/x/ultimate/idle/idle_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_ultimate_speaking_${i}`,
            `assets/sprites/mugshot/x/ultimate/speaking/speaking_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_zero_idle_${i}`,
            `assets/sprites/mugshot/zero/zero/idle/idle_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_zero_speaking_${i}`,
            `assets/sprites/mugshot/zero/zero/speaking/speaking_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_black_zero_idle_${i}`,
            `assets/sprites/mugshot/zero/black_zero/idle/idle_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_black_zero_speaking_${i}`,
            `assets/sprites/mugshot/zero/black_zero/speaking/speaking_${i}.png`
        );
    }


    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_alia_idle_${i}`,
            `assets/sprites/mugshot/alia/idle/idle_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_alia_speaking_${i}`,
            `assets/sprites/mugshot/alia/speaking/speaking_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_nightmare_zero_idle_${i}`,
            `assets/sprites/mugshot/nightmare_zero/idle/idle_${i}.png`
        );
    }

    for (let i = 1; i <= 3; i++) {
        scene.load.image(
            `dialog_nightmare_zero_speaking_${i}`,
            `assets/sprites/mugshot/nightmare_zero/speaking/speaking_${i}.png`
        );
    }
}