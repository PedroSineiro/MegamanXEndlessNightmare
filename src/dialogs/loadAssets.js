export default function
loadAssets(scene) {

    scene.load.audio(
        "text_beep",
        "assets/sounds/dialog/dialog.wav"
    );

    const CHARACTERS = [

        {
            id: "x",
            baseFolder: "x",
            folderName: "base_x",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "fourth",
            baseFolder: "x",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "ultimate",
            baseFolder: "x",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "falcon",
            baseFolder: "x",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "blade",
            baseFolder: "x",
            idleSprites: 3,
            speakingSprites:3
        },


        {
            id: "zero",
            baseFolder: "zero",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "black_zero",
            baseFolder: "zero",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "alia",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "nightmare_zero",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "dynamo",
            idleSprites: 3,
            speakingSprites:3
        },

        {
            id: "high_max",
            idleSprites: 1,
            speakingSprites:3
        }

    ];

    CHARACTERS.forEach(character => {

        const folderName = character.folderName? character.folderName: character.id;

        for(let i = 1; i<=character.idleSprites;i++){
            scene.load.image(
                `dialog_${character.id}_idle_${i}`,
                character.baseFolder?
                `assets/sprites/mugshot/${character.baseFolder}/${folderName}/idle/idle_${i}.png`:
                `assets/sprites/mugshot/${folderName}/idle/idle_${i}.png`
            );
        }

        for(let i = 1; i<=character.speakingSprites;i++){
            scene.load.image(
                `dialog_${character.id}_speaking_${i}`,
                character.baseFolder?
                `assets/sprites/mugshot/${character.baseFolder}/${folderName}/speaking/speaking_${i}.png`:
                `assets/sprites/mugshot/${folderName}/speaking/speaking_${i}.png`
            );
        }
    });

    scene.load.image(
            "dialog_sigma_idle_1",
            "assets/sprites/mugshot/sigma/idle/idle_1.png"
        );
}