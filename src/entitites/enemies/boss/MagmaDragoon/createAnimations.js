export default function
createAnimations(scene) {

    scene.anims.create({
        key: "magma_dragoon_arriving",
        frames: [{
            key: "magma_dragoon_arriving_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "magma_dragoon_dying",
        frames: [{
            key: "magma_dragoon_dying_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "magma_dragoon_idle",
        frames: [{
            key: "magma_dragoon_idle_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: "magma_dragoon_start_giga_attack",
        frames: [{
            key: "magma_dragoon_giga_1"
        }],
        frameRate: 8,
        repeat: 0
    });

    

    let frames = [];

    for (let i = 2; i <= 3; i++) {

        frames.push({
            key: `magma_dragoon_giga_${i}`
        });

    }

    scene.anims.create({
        key: "magma_dragoon_giga_attack",
        frames,
        frameRate: 16,
        repeat: -1
    });

    scene.anims.create({
        key: "magma_dragoon_start_hadoken_up",
        frames: [{key: "magma_dragoon_hadoken_up_1", duration: 300}],
        frameRate: 6,
        repeat: 0
    });


    scene.anims.create({
        key: "magma_dragoon_hadoken_up",
        frames: [{key: "magma_dragoon_hadoken_up_2", duration: 300}],
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: "magma_dragoon_start_hadoken_down",
        frames: [{key: "magma_dragoon_hadoken_down_1", duration: 300}],
        frameRate: 6,
        repeat: 0
    });


    scene.anims.create({
        key: "magma_dragoon_hadoken_down",
        frames: [{key: "magma_dragoon_hadoken_down_2", duration: 300}],
        frameRate: 6,
        repeat: 0
    });

    


}