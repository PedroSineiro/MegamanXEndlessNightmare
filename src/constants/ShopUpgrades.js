export const SHOP_UPGRADES = {
    "x": {
        items: [
            {
                name: "heart_tank",
                cost: 300,
                max_amount: 8,
                description: "Raises the max HP by 50. Can be purchased 8 times." 
            },
            {
                name: "energy_tank",
                cost: 800,
                max_amount: 1,
                description: "Refills the HP completley once in battle." 
            }
        ],
        habilities: [
             {
                name:"extra_offensive_action",
                cost: 400,
                description: "Gains an Extra Action to use offensively." 
            },
            {
                name:"quick_charge",
                cost: 500,
                description: "Medium and Charged shots take 1 less action." 
            },
            {
                name:"buster_plus",
                cost: 500,
                description: "X-Buster does more damage." 
            },
            {
                name:"saber_plus",
                cost: 500,
                description: "Z-saber attacks do more damage(only for Blade or Shadow armor)." 
            },
            {
                name:"giga_attack_recover",
                cost: 800,
                description: "Reduces the giga attack recharge time by 3 turns." 
            },
            {
                name:"life_recover",
                cost: 800,
                description: "Heals 10 HP at the start of the turn." 
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
                cost: 1500,
                base_evasion: 20,
                base_reduction: 50,
                giga_attack_type: "Row",
                description: "Charged shot does more damage.",
                preview_sprite: "fourth_empty_armor"
            },
            {
                name: "falcon",
                cost: 1500,
                base_evasion: 20,
                base_reduction: 50,
                giga_attack_type: "Area",
                description: "Charged shot pierces through enemies.",
                preview_sprite: "falcon_empty_armor"
            },
            {
                name: "gaea",
                cost: 1500,
                base_evasion: 5,
                base_reduction: 70,
                giga_attack_type: "Target",
                description: "Has quick charge, basic and charged shot does more damage.",
                preview_sprite: "gaea_empty_armor"
            },
            {
                name: "blade",
                cost: 1500,
                base_evasion: 20,
                base_reduction: 50,
                giga_attack_type: "Row",
                description: "Has a saber attack.",
                preview_sprite: "blade_empty_armor"
            },
            {
                name: "shadow",
                cost: 1500,
                base_evasion: 30,
                base_reduction: 50,
                giga_attack_type: "Column",
                description: "Has no medium shot. Has a saber attack.",
                preview_sprite: "shadow_empty_armor"
            },
            {
                name: "ultimate",
                cost: 2400,
                base_evasion: 30,
                base_reduction: 50,
                giga_attack_type: "Row",
                description: "Charged shot does more damage. Has unlimited Giga Attack.",
                preview_sprite: "ultimate_empty_armor"
            }
        ]
    },

    "zero": {
        items: [
            {
                name: "heart_tank",
                cost: 300,
                max_amount: 8,
                description: "Raises the max HP by 50. Can be purchased 8 times." 
            },
            {
                name: "energy_tank",
                cost: 800,
                max_amount: 1,
                description: "Refills the HP completley once in battle." 
            }
        ],
        habilities: [
             {
                name:"extra_offensive_action",
                cost: 400,
                description: "Gains an Extra Action to use offensively." 
            },
            {
                name:"quick_piercing_slash",
                cost: 400,
                description: "Piercing Slash takes 1 less action." 
            },
            {
                name:"saber_plus",
                cost: 500,
                description: "Z-saber attacks do more damage." 
            },
            {
                name:"giga_attack_recover",
                cost: 800,
                description: "Reduces the giga attack recharge time by 3 turns." 
            },
            {
                name:"life_recover",
                cost: 800,
                description: "Heals 10 HP at the start of the turn." 
            }
        ],
        armors: [
            {
                name: "zero",
                cost: 0,
                base_evasion: 15,
                base_reduction: 0,
                giga_attack_type: "Area",
                description: "",
                preview_sprite: "zero_empty_armor"
            },
            {
                name: "black_zero",
                cost: 1800,
                base_evasion: 20,
                base_reduction: 50,
                giga_attack_type: "Area",
                description: "All attacks do more damage.",
                preview_sprite: "black_zero_empty_armor"
            }
        ]
    }
}