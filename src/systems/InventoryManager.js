export default class InventoryManager {

    constructor(
        gameData
    ) {

        this.data =
            gameData;

    }

    getInventory(
        character
    ) {

        return this.data
            .inventory[
                character
            ];

    }

    getItemAmount(
        character,
        itemName
    ) {

        return this
            .getInventory(
                character
            )
            .items[
                itemName
            ] ?? 0;

    }

    hasAbility(
        character,
        abilityName
    ) {

        return !!this
            .getInventory(
                character
            )
            .abilities[
                abilityName
            ];

    }

    hasArmor(
        character,
        armorName
    ) {

        return !!this
            .getInventory(
                character
            )
            .armors[
                armorName
            ];

    }

    isOwned(
        character,
        upgrade
    ) {

        if (
            upgrade.max_amount
        ) {

            return this.getItemAmount(

                character,
                upgrade.name

            ) >= upgrade.max_amount;

        }

        return (

            this.hasAbility(
                character,
                upgrade.name
            )

            ||

            this.hasArmor(
                character,
                upgrade.name
            )

        );

    }

    canBuy(
        character,
        upgrade
    ) {

        return (

            !this.isOwned(
                character,
                upgrade
            )

            &&

            this.data
                .nightmareScrap

            >=

            upgrade.cost

        );

    }

    addItem(
        character,
        itemName
    ) {

        const inventory =

            this.getInventory(
                character
            );

        inventory.items[
            itemName
        ] =

            this.getItemAmount(

                character,
                itemName

            ) + 1;

    }

    addAbility(
        character,
        abilityName
    ) {

        this.getInventory(
            character
        ).abilities[
            abilityName
        ] = true;

    }

    addArmor(
        character,
        armorName
    ) {

        this.getInventory(
            character
        ).armors[
            armorName
        ] = true;

    }

}