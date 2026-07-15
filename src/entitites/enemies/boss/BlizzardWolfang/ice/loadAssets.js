export default function
loadAssets(scene) {

    for (let i = 1; i <= 5; i++) {

        scene.load.image(
            `blizzard_wolfang_ice_${i}`,
            `assets/sprites/bosses/blizzard_wolfang/ice/ice_${i}.png`
        );

    }

}