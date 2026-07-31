export default function
loadAssets(scene) {

    for(let i = 1;i<=3;i++){
        scene.load.image(
        `night_zero_ring_${i}`,
        `assets/sprites/bosses/nightmare_zero/ring/ring_${i}.png`
    );
    }

}