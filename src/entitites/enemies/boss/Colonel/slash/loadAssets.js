export default function
loadAssets(scene) {
    for(let i = 1; i<=3 ;i++){
        scene.load.image(
            `colonel_slash_${i}`,
            `assets/sprites/bosses/colonel/slash/slash_${i}.png`
        );
    }

}