export default function createStage(scene, stage_name) {

    scene.add.image(
        500,
        300,
        stage_name
    ).setDisplaySize(
        1000,
        600
    ).setDepth(-1000);

}