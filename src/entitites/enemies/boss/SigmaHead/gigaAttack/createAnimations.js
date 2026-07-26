export default function
createAnimations(scene) {

    scene.anims.create({

        key: "sigma_block",

        frames: [
            { key: "sigma_block_1" },
            { key: "sigma_block_2" },
            { key: "sigma_block_3" },
            { key: "sigma_block_4" }
        ],

        frameRate: 26,
        repeat: -1

    });

}