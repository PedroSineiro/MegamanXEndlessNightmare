export default function
loadAssets(scene) {


    for(let i = 1;i <= 4; i++){
        scene.load.image(
            `dynamo_boomerang_${i}`,
            `assets/sprites/bosses/dynamo/boomerang/boomerang_${i}.png`
        );
    }

}