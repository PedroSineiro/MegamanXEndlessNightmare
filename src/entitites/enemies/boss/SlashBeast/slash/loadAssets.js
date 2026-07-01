export default function
loadAssets(scene) {


    for (let i = 1; i <= 2; i++) {

        scene.load.image(
            `slash_beast_slash_${i}`,
            `assets/sprites/bosses/slash_beast/slash/slash_${i}.png`
        );

    }

}