export default function loadAssets(scene) {

    scene.load.image(
        "sigma_idle_1",
        "assets/sprites/bosses/sigma/preparing/preparing_6.png"
    );

    scene.load.image(
        "sigma_cape",
        "assets/sprites/bosses/sigma/preparing/cape.png"
    );

    for (let i = 0; i <= 6; i++) {

        scene.load.image(
            `sigma_spawning_${i}`,
            `assets/sprites/bosses/sigma/spawning/spawning_${i}.png`
        );

    }

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `sigma_preparing_${i}`,
            `assets/sprites/bosses/sigma/preparing/preparing_${i}.png`
        );

    }

    scene.load.image(
        "sigma_dying_1",
        "assets/sprites/bosses/sigma/dying/dying_1.png"
    );

}