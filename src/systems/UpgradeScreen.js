import { SHOP_UPGRADES } from "../constants/ShopUpgrades.js";

export default class UpgradeScreen {

    constructor(
        scene
    ) {

        this.scene =
            scene;

        this.ui =
            [];

        this.items = [];

        this.data =
            this.scene
                .GameData;

        this.inventory =
            this.scene
                .inventoryManager;
        
        this.backgroundDepth = 9999;

        this.selectedUpgrade =
            null;
        
        this.selectedUpgradeButton =
            null;

    }

    show(
        character
    ) {

        this.clear();

        this.character =
            character;

        this.createHeader();

        this.createUpgradeCategories();

        this.createViewer();

    }

    clear() {

        this.backgroundBox
            ?.destroy();

        this.previewBox
            ?.destroy();

        this.previewSprite
            ?.destroy();

        this.gigaAttackText
            ?.destroy();

        this.evasionText
            ?.destroy();

        this.reductionText
            ?.destroy();

        this.descriptionBox
            ?.destroy();

        this.descriptionText
            ?.destroy();

        this.buyButton
            ?.destroy();

        this.equipButton
            ?.destroy();

        this.hpText
            ?.destroy();

        this.items.forEach(

            item => {

                item?.destroy?.();

            }

        );

        this.items = [];

        this.ui.forEach(

            element => {

                element?.destroy?.();

            }

        );

        this.ui = [];

        this.selectedUpgrade =
            null;

        this.selectedUpgradeButton = 
            null;

    }

    createHeader() {

        const hp =

            this.character === "x"

            ? this.data.x.maxHp

            : this.data.zero.maxHp;

        const armor =

            this.character === "x"

            ? this.data.currentArmors[0]

            : this.data.currentArmors[1];

        this.hpText =

            this.scene
                .add
                .text(

                    50,

                    40,

                `HP: ${hp}
Armor: ${armor.replaceAll("_", " ")}
Nightmare Scrap: ${this.data.nightmareScrap}
Stages Completed: ${this.data.amountCompletedStages}`,

                    {
                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px"
                    }

                ).setDepth(
                    this.backgroundDepth + 10
                );

    }

    createUpgradeCategories() {

        this.createCategoryTitle(
                "Items (cost)",
                50, 120
            );

        this.createCategoryTitle(
            "Abilities (cost)",
            50,
            335
        );

        this.createCategoryTitle(
            "Armors (cost)",
            350,
            120
        );

        this.showUpgrades();


    }

    createCategoryTitle(
        text,
        x,
        y
    ) {

        const title =

            this.scene
                .add
                .text(

                    x,

                    y,

                    text,

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px",

                        color:
                            "#d9ff00",

                        padding: {

                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5

                        }

                    }

                ).setDepth(
                    this.backgroundDepth + 10
                );

        
            this.ui.push(
                title
            );

    }

    selectUpgradeButton(
        selectedButton
    ) {

        this.selectedUpgradeButton = selectedButton;

        this.items.forEach(

            button => {

                if (
                    !button
                ) {
                    return;
                }

                button.setStyle({

                    backgroundColor:
                        "#000"

                });

            }

        );

        selectedButton.setStyle({

            backgroundColor:
                "#444"

        });


    }

    showUpgrades(){
        const items =

            SHOP_UPGRADES[
                this.character
            ].items;

        this.showUpgradeColumn(items, "item", 30, 147);

        const abilities =

            SHOP_UPGRADES[
                this.character
            ].habilities;

        this.showUpgradeColumn(abilities, "ability", 30, 360);

        const armors =

            SHOP_UPGRADES[
                this.character
            ].armors;

        this.showUpgradeColumn(armors,"armor", 360, 147);
    }

    showUpgradeColumn(upgrades, type, x, z) {

        upgrades.forEach(

            (
                upgrade,
                index
            ) => {

                const owned =

                    this.inventory
                        .isOwned(

                            this.character,
                            upgrade

                        );

                const color =

                    owned

                    ? "#00ff00"

                    : "#ffffff";

                const button =

                    this.scene
                        .add
                        .text(

                            x,

                            z +
                            index * 30,

                            upgrade.name.replaceAll(
                                "_",
                                " "
                            )

                            +

                            (owned?" (owned)": ` (${upgrade.cost})`),

                            {

                                fontFamily:
                                    "MegaManX",

                                fontSize:
                                    "10px",
                                backgroundColor:
                                    "#00000",

                                padding: {

                                    left: 10,
                                    right: 10,
                                    top: 5,
                                    bottom: 5

                                },

                                color

                            }

                        ).setInteractive({
                            useHandCursor:
                                true
                        })
                        .setDepth(
                            this.backgroundDepth + 10
                        )

                        .on(

                            "pointerdown",

                            () => {

                                this.scene.sfx.play(
                                    "choosing_menu",
                                    {
                                        volume: 0.2
                                    }
                                );

                                this.selectUpgrade(

                                    {

                                        ...upgrade,

                                        type:
                                            type

                                    }

                                );

                                this.selectUpgradeButton(button);

                                this.updateButtons();

                            }

                        );


                this.items.push(
                    button
                );

            }

        );

    }

    createViewer() {

        const backgroundColor =

            this.character === "x"

            ? 0x0000ff

            : 0xff0000;


        this.backgroundBox =

            this.scene
                .add
                .rectangle(

                    0,
                    0,

                    2000,
                    1600,

                    backgroundColor,
                    0.6

                ).setDepth(
                    this.backgroundDepth
                );

        this.previewBox =

            this.scene
                .add
                .rectangle(

                    700,
                    180,

                    100,
                    100,

                    0x000000,
                    0.8

                ).setDepth(
                    this.backgroundDepth + 10
                );

        this.previewSprite =

            this.scene
                .add
                .sprite(

                    705,
                    180,

                    "empty"

                ).setDepth(
                    this.backgroundDepth + 40
                ).setScale(1.5)
                .setVisible(false);

        this.gigaAttackText = this.scene
                .add
                .text(

                    755,
                    150,

                    "",

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px",

                        wordWrap: {
                            width: 250
                        }

                    }

                ).setDepth(
                    this.backgroundDepth + 20
                ).setVisible(true);

        this.evasionText = this.scene
                .add
                .text(

                    755,
                    180,

                    "",

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px",

                        wordWrap: {
                            width: 250
                        }

                    }

                ).setDepth(
                    this.backgroundDepth + 20
                ).setVisible(true);

        this.reductionText = this.scene
                .add
                .text(

                    755,
                    210,

                    "",

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px",

                        wordWrap: {
                            width: 250
                        }

                    }

                ).setDepth(
                    this.backgroundDepth + 20
                ).setVisible(true);

        this.descriptionBox =

            this.scene
                .add
                .rectangle(

                    800,
                    450,

                    350,
                    250,

                    0x000000,
                    0.8

                ).setDepth(
                    this.backgroundDepth + 10
                );

        this.descriptionText =

            this.scene
                .add
                .text(

                    680,
                    350,

                    "",

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px",

                        wordWrap: {
                            width: 250
                        }

                    }

                ).setDepth(
                    this.backgroundDepth + 20
                );

        this.buyButton =
            this.addButton("Buy",50, 500, ()=> {this.buyUpgrade();});

        this.equipButton =
            this.addButton("Equip",150, 500, ()=> {this.equipUpgrade();});

    }

    selectUpgrade(
        upgrade
    ) {

        this.selectedUpgrade =
            upgrade;

        this.descriptionText
            .setText(

                upgrade.description

            );

        //
        // preview
        //

        if (
            upgrade.preview_sprite
        ) {
            this.previewSprite
                .setTexture(

                    upgrade.preview_sprite

                )

                .setVisible(
                    true
                );

        }

        else {

            this.previewSprite
                .setVisible(
                    false
                );

        }


        this.updateArmorStats(
            upgrade
        );

    }

    updateButtons() {

        const upgrade =
            this.selectedUpgrade;

        const owned =

            this.inventory
                .isOwned(

                    this.character,
                    upgrade

                );

        const bounds =

            this.selectedUpgradeButton
                .getBounds();

        const buttonX =
            bounds.right + 15;

        const buttonY =
            bounds.y;

        this.buyButton
            .setPosition(
                buttonX,
                buttonY
            );

        this.equipButton
            .setPosition(
                buttonX,
                buttonY
            );

        this.buyButton
            .setVisible(

                !owned &&

                upgrade.cost <=

                this.data
                    .nightmareScrap

            );

        if (

            upgrade.type ===
            "armor"

        ) {

            const armor =

                this.character === "x"

                ? this.data.currentArmors[0]

                : this.data.currentArmors[1];

            this.equipButton
                .setVisible(

                    owned &&

                    upgrade.name !== armor

                );

        }

        else {

            this.equipButton
                .setVisible(
                    false
                );

        }

    }

    updateArmorStats(upgrade){

        if(upgrade.type!=="armor"){
            this.gigaAttackText.setText("");
            this.evasionText.setText("");
            this.reductionText.setText("");
        } else {
            this.gigaAttackText.setText(`giga attack type: ${upgrade.giga_attack_type}`);
            this.evasionText.setText(`evasion: ${upgrade.base_evasion}%`);
            this.reductionText.setText(`reduction: ${upgrade.base_reduction}%`);
        }
    }

    addButton(
        text,
        x,
        y,
        callback
    ) {

        const button =

            this.scene
                .add
                .text(

                    x,

                    y,

                    text,

                    {

                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px",

                        backgroundColor:
                            "#000",

                        padding: {

                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5

                        }

                    }

                )

                .setInteractive({
                    useHandCursor:
                        true
                })
                .setDepth(
                    99999
                )

                .on(
                    "pointerdown",
                    callback
                ).setVisible(
                    false
                );

        return button;

    }

    buyUpgrade(){
        this.scene.sfx.play("buying_upgrade", {volume: 0.15});

        const upgrade = this.selectedUpgrade;

        this.data
        .nightmareScrap -= upgrade.cost;

        switch (upgrade.type){
            case "armor":
                this.inventory.addArmor(this.character, upgrade.name);
                break;

            case "item":
                this.inventory.addItem(this.character, upgrade.name);
                break;

            case "ability":
                this.inventory.addAbility(this.character, upgrade.name);
                break;
        }

        this.updateSelectedButton();

        this.updateButtons();

        this.recalculateMaxHp();
        
        this.updateHeader();

    }

    equipUpgrade(){
        this.scene.sfx.play("equiping_armor", {volume: 0.15});

        this.data.currentArmors[this.character === "x"? 0:1] = this.selectedUpgrade.name;

        this.updateButtons();

        this.updateHeader();
    }

    updateHeader() {

        const hp =

            this.character === "x"

            ? this.data.x.maxHp

            : this.data.zero.maxHp;

        const armor =

            this.character === "x"

            ? this.data.currentArmors[0]

            : this.data.currentArmors[1];

        this.hpText.setText(

                `HP: ${hp}
Armor: ${armor.replaceAll("_", " ")}
Nightmare Scrap: ${this.data.nightmareScrap}`,

                    {
                        fontFamily:
                            "MegaManX",

                        fontSize:
                            "10px"
                    }

                );

    }

    updateSelectedButton(){

        const upgrade = this.selectedUpgrade;


        const owned =

            this.inventory
                .isOwned(

                    this.character,
                    upgrade

                );


        const color =

            owned

            ? "#00ff00"

            : "#ffffff";

        this.selectedUpgradeButton.setText(upgrade.name.replaceAll(
            "_",
            " "
        )

        +(owned?" (owned)": ` (${upgrade.cost})`));

        this.selectedUpgradeButton.setColor(color);
    }

    recalculateMaxHp() {

        const characterData =
            this.data[this.character];

        const heartTanks =

            this.inventory
                .getItemAmount(

                    this.character,
                    "heart_tank"

                ) ?? 0;

        characterData.maxHp =

            characterData.baseHp +

            heartTanks * 50;

    }

}