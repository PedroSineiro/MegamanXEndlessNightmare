export default function loadAssets(scene) {

    const armors = [

        {
            key: "x",
            chargedFolder: "base_x",
            chargedFrames: 7
        },

        {
            key: "fourth",
            chargedFolder: "fourth",
            chargedFrames: 8
        },

        {
            key: "falcon",
            chargedFolder: "falcon",
            chargedFrames: 8
        },

        {
            key: "gaea",
            chargedFolder: "gaea",
            chargedFrames: 8
        },

        {
            key: "blade",
            chargedFolder: "blade",
            chargedFrames: 5
        },

        {
            key: "shadow",
            chargedFolder: "shadow",
            chargedFrames: 4
        }


    ];

    //
    // basic shot
    //

    for (const armor of armors) {

        for (

            let i = 1;

            i <= (armor.key=="shadow"? 16:8);

            i++

        ) {

            const baseFolder = (armor.key == "shadow" || armor.key == "gaea")? armor.key: "base_x"

            scene.load.image(

                `${armor.key}_basic_shot_${i}`,

                `assets/sprites/characters/x/${baseFolder}/basic_shot/basic_shot_${i}.png`

            );

        }

    }

    //
    // medium shot
    //

    for (const armor of armors) {

        if(armor.key != "shadow" && armor.key != "gaea") {

            for (

                let i = 1;

                i <= 7;

                i++

            ) {

                scene.load.image(

                    `${armor.key}_medium_shot_${i}`,

                    `assets/sprites/characters/x/base_x/medium_shot/medium_shot_${i}.png`

                );

            }

        }

    }

    //
    // charged shot
    //

    for (const armor of armors) {

        for (

            let i = 1;

            i <= armor.chargedFrames;

            i++

        ) {

            scene.load.image(

                `${armor.key}_charged_shot_${i}`,

                `assets/sprites/characters/x/${armor.chargedFolder}/charged_shot/charged_shot_${i}.png`

            );

        }

    }

    scene.load.image(
        "blade_giga_shot_1",
        "assets/sprites/characters/x/blade/giga_attack/giga_attack_1.png"
    );
    scene.load.image(
        "blade_giga_shot_2",
        "assets/sprites/characters/x/blade/giga_attack/giga_attack_2.png"
    );


    for(let i = 1; i<=5; i++){
        scene.load.image(
            `shadow_giga_attack_${i}`,
            `assets/sprites/characters/x/shadow/giga_attack/giga_attack_${i}.png`
        );
    }

    for(let i = 0; i<=4; i++){
        scene.load.image(
            `gaea_giga_attack_sphere_${i}`,
            `assets/sprites/characters/x/gaea/giga_attack_sphere/giga_attack_sphere_${i}.png`
        );
    }

    for(let i = 1; i<=3; i++){
        scene.load.image(
            `x_giga_shot_moving_${i}`,
            `assets/sprites/characters/x/base_x/hadouken_shot/hadouken_shot_${i}.png`
        );
    }

}