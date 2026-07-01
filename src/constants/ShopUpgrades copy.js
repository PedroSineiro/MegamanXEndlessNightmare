export const SHOP_UPGRADES = {
    "x": {
        items: [
            {
                name: "heart_tank",
                cost: 100,
                max_amount: 8,
                description: "Raises the max HP by 50. Can be purchased 8 times." 
            },
            {
                name: "energy_tank",
                cost: 100,
                max_amount: 1,
                description: "Refills the HP completley once in battle." 
            }
        ],
        habilities: [
             {
                name:"extra_offensive_action",
                cost: 100,
                description: "Gains an Extra Action to use offensively." 
            }
        ],
        armors: [
            {
                name: "x",
                cost: 0,
                base_evasion: 15,
                base_reduction: 0,
                giga_attack_type: "None",
                description: "",
                preview_sprite: "x_empty_armor"
            },
            {
                name: "fourth",
                cost: 400,
                base_evasion: 30,
                base_reduction: 30,
                giga_attack_type: "Row",
                description: "Charged shoot does more damage.",
                preview_sprite: "fourth_empty_armor"
            }
        ]
    },

    "zero": {
        items: [
            {
                name: "heart_tank",
                cost: 100,
                max_amount: 8,
                description: "Raises the max HP by 50. Can be purchased 8 times." 
            },
            {
                name: "energy_tank",
                cost: 100,
                max_amount: 1,
                description: "Refills the HP completley once in battle." 
            }
        ],
        habilities: [
             {
                name:"extra_offensive_action",
                cost: 100,
                description: "Gains an Extra Action to use offensively." 
            }
        ],
        armors: [
            {
                name: "zero",
                cost: 0,
                base_evasion: 15,
                base_reduction: 15,
                giga_attack_type: "Area",
                description: "",
                preview_sprite: "zero_empty_armor"
            },
            {
                name: "black_zero",
                cost: 600,
                base_evasion: 30,
                base_reduction: 30,
                giga_attack_type: "Area",
                description: "All attacks do more damage.",
                preview_sprite: "black_zero_empty_armor"
            }
        ]
    }
}