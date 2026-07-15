export default class
ActionMenu {

    constructor(
        scene
    ) {

        this.scene =
            scene;

        this.AttackButtons =
            [];

        this.DefenseButtons =
            [];


        this.gigaAttackButton = null

        this.currentCharacter =
            null;

        this.uiDepth =
            999999;

        //
        // background
        //


    this.menuBackground =

        this.scene.add.rectangle(

                500,
                700,

                1000,
                200,

                0x000000

            )

        .setDepth(
            this.uiDepth
        )

        .setVisible(
            true
        );

        this.portrait =

            this.scene.add.sprite(

                120,
                680,

                "dialog_x_idle_1"

            ).setDepth(
            this.uiDepth + 10
        );

        this.portrait.setVisible(false);

        this.energyTank =

            this.scene.add.sprite(

                120,
                740,

                "energy_tank"

            ).setDepth(
            this.uiDepth + 10
        );

        this.energyTank.setVisible(false);

        this.menuBackground
            .setFillStyle(
                    0x000000
                );

        this.addCancelButton();

    }

    setBackgroundStyle(
        character
    ) {

        this.menuBackground
            .setVisible(
                true
            );

        //
        // turno inimigo
        //

        if (
            !character ||
            !character.isPlayer
        ) {

            this.menuBackground
                .setFillStyle(
                    0x000000
                );


            return;
        }

        //
        // X
        //

        if (
            character.filename
            === "x"
        ) {

            this.menuBackground
                .setFillStyle(
                    0x173aff
                );

        }

        //
        // Zero
        //

        else {

            this.menuBackground
                .setFillStyle(
                    0xf71e1e
                );

        }

    }

    setPortrait(character){

        this.portrait.setVisible(true);

        this.portrait.setFlipX(true);

        const armor = character.filename === "x"?

            this.scene
                .GameData
                .currentArmors[0]:
            this.scene
                .GameData
                .currentArmors[1];

        this.portrait.play(`dialog_${armor}_idle`);

    }

    characterTurnEnded(character){
        if (

            character
                .turnActions <= 0 && !character.isBusy

        ) {

            this.clear();

            this.scene
                .turnManager
                .endTurn();

            return true;

        }

        return false;
    }

    show(
        character
    ) {

        this.clear();

        if(this.scene.isBossDying || this.scene.isWaveOver || this.scene.isGameOver) return;

        this.menuBackground
            .setVisible(
                true
            );

        this.setBackgroundStyle(
            character
        );

        this.setPortrait(character);

        this.currentCharacter =
            character;

        if(this.characterTurnEnded(character)) return;

        this.updateEnergyTank(character);

        //
        // X
        //

        if (
            character.filename ===
            "x"
        ) {

            if (
                character
                    .turnActions >= 1

            ) {
                this.addAttackButton(
                "Simple Shot",

                () => {

                    this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                character
                                    .turnActions--;

                                await this.scene
                                    .actionRunner
                                    .xShot(

                                        character,

                                        enemy,

                                        0

                                    );

                                if(this.characterTurnEnded(character)) return

                                this.refresh();

                            }

                        );

                    }

                );
            }

           

            if (
                character
                    .turnActions >= character.chargingMediumShotActions

            ) {
                this.addAttackButton(
                "Medium Shot",

                () => {

                    this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                character
                                    .turnActions -= character.chargingMediumShotActions;

                                await this.scene
                                    .actionRunner
                                    .xShot(

                                        character,

                                        enemy,

                                        1

                                    );

                                if(this.characterTurnEnded(character)) return

                                this.refresh();

                            }

                        );

                    }

                );
            }

            if (
                character
                    .turnActions >= character.chargingChargedShotActions

            ) {
                this.addAttackButton(
                "Charged Shot",

                () => {

                    this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                character
                                    .turnActions -= character.chargingChargedShotActions;

                                await this.scene
                                    .actionRunner
                                    .xShot(

                                        character,

                                        enemy,

                                        2

                                    );

                                if(this.characterTurnEnded(character)) return;

                                this.refresh();

                            }

                        );

                    }

                );
            }


            if((character.currentArmor=="fourth" || character.currentArmor=="ultimate") && this.canUseGigaAttack(character)){
                this.addGigaAttackButton(
                    "Giga Attack",

                    async () => {


                        this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                character
                                    .turnActions -= 4;
                                
                                if(character.gigaAttackMustRecharge) character.gigaAttackRechargeTurns = 0;

                                await this.scene
                                    .actionRunner
                                    .xNovaStrike(

                                        character,

                                        enemy

                                    );

                                if(this.characterTurnEnded(character)) return;

                                this.refresh();

                            }

                        );
                    }
                );
            }

        }

        //
        // ZERO
        //

        else {


            if (
                character
                    .turnActions >= 1

            ) {
            this.addAttackButton(
                "Slash A",

                () => {

                    this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                await this.scene
                                    .actionRunner
                                    .zeroCombo(

                                        character,

                                        enemy,

                                        "slashA"

                                    );

                                this.refresh();

                            }

                        );
                    
                    if(this.characterTurnEnded(character)) return;
                    
                }

                );  
            }


            if (
                character
                    .turnActions >= 2

            ) {
                this.addAttackButton(
                "Slash AB",

                () => {

                    this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                await this.scene
                                    .actionRunner
                                    .zeroCombo(

                                        character,

                                        enemy,

                                        "slashAB"

                                    );

                                this.refresh();

                            }

                        );
                    
                    if(this.characterTurnEnded(character)) return;

                }

                );
            }


            if (
                character
                    .turnActions >= 3

            ) {
                this.addAttackButton(
                "Slash ABC",

                () => {

                    this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                await this.scene
                                    .actionRunner
                                    .zeroCombo(

                                        character,

                                        enemy,

                                        "slashABC"

                                    );

                                this.refresh();

                            }

                        );
                    
                    if(this.characterTurnEnded(character)) return;

                }

                );
            }

            if (

                character
                    .turnActions >= character.piercingSlashActions

            ) {
                this.addAttackButton(
                "Piercing Slash",

                () => {

                    this.selectEnemyTarget(

                            character,

                            async enemy => {

                                this.hide();

                                await this.scene
                                    .actionRunner
                                    .zeroCombo(

                                        character,

                                        enemy,

                                        "piercingSlash"

                                    );

                                this.refresh();

                            }

                        );
                    
                    if(this.characterTurnEnded(character)) return;
                }
                );
            }

             if (
                character.turnActions >=4 && this.canUseGigaAttack(character)
            ) {
                this.addGigaAttackButton(
                "Giga Attack",

                async () => {

                    if (
                        character.turnActions < 4
                    ) {
                        return;
                    }

                    this.hide();

                    character.turnActions -= 4;

                    if(character.gigaAttackMustRecharge) character.gigaAttackRechargeTurns = 0;

                    await this.scene
                        .actionRunner
                        .zeroGigaAttack(
                            character
                        );

                    //
                    // acabou turno?
                    //

                    if (
                        this.characterTurnEnded(
                            character
                        )
                    ) {
                        return;
                    }

                    //
                    // volta UI
                    //

                    this.refresh();
                }
                );
            }
        }



        //
        // DEFEND
        //

        for (
            let i = 1;
            i <= 4;
            i++
        ) {

            if(character.defenseTurnActions>=4 || character.turnActions < i) break;
            this.addDefenseButton(

                `Defend +${i}`,

                () => {

                    character
                        .defend(i);

                    //
                    // acabou turno?
                    //

                    if(this.characterTurnEnded(character)) return

                    this.refresh();

                }

            );

        }

    }

    hide() {

        this.AttackButtons.forEach(

            button =>

                button.setVisible(
                    false
                )

        );

        this.DefenseButtons.forEach(

            button =>

                button.setVisible(
                    false
                )

        );

        this.gigaAttackButton?.setVisible(false);

        this.cancelButton.setVisible(false);

        this.portrait.setVisible(false);

        this.energyTank.setVisible(false);

        this.menuBackground
            .setFillStyle(
                    0x000000
                );

    }

    hideButtons() {

        this.AttackButtons.forEach(

            button =>

                button.setVisible(
                    false
                )

        );

        this.DefenseButtons.forEach(

            button =>

                button.setVisible(
                    false
                )

        );

        this.gigaAttackButton
            ?.setVisible(
                false
            );

    }



    showUI() {

        this.AttackButtons.forEach(

            button =>

                button.setVisible(
                    true
                )

        );

        this.DefenseButtons.forEach(

            button =>

                button.setVisible(
                    true
                )

        );

    }

    refresh() {


        this.show(
            this.currentCharacter
        );

    }

    canUseGigaAttack(character) {
        return character.turnActions >= 4 && character.gigaAttackRechargeTurns == character.gigaAttackCooldown;
    }

    addCancelButton() {

        this.cancelButton =

                this.scene
                .add
                .text(

                    800,

                    630,

                    "Cancel",

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

                ).setDepth(
                    this.uiDepth + 10
                )

                .setInteractive(
                    {
                        useHandCursor:
                            true
                    }
                )

        this.cancelButton
            .setVisible(
                false
            );

    }

    addAttackButton(
        text,
        callback
    ) {
        const button =

            this.scene
                .add
                .text(

                    200 + this.AttackButtons.length*200,

                    650,

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

                ).setDepth(
                    this.uiDepth + 10
                )

                .setInteractive(
                    {
                        useHandCursor:
                            true
                    }
                )

                .on(

                    "pointerdown",

                    () => {
                        this.scene.sfx.play(
                            "choosing_menu",
                            {
                                volume: 0.15
                            }
                        );

                        callback?.();
                    }

                );

        this.AttackButtons.push(
            button
        );

    }

    addDefenseButton(
        text,
        callback
    ) {
        const button =

            this.scene
                .add
                .text(

                    200 + this.DefenseButtons.length*200,

                    700,
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

                ).setDepth(
                    this.uiDepth + 10
                )

                .setInteractive(
                    {
                        useHandCursor:
                            true
                    }
                )

                .on(

                    "pointerdown",

                    () => {
                        this.scene.sfx.play(
                            "choosing_menu",
                            {
                                volume: 0.15
                            }
                        );

                        callback?.();
                    }

                );

        this.DefenseButtons.push(
            button
        );

    }

    addGigaAttackButton(
        text,
        callback
    ) {
        const button =

            this.scene
                .add
                .text(

                    400,

                    760,
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

                ).setDepth(
                    this.uiDepth + 10
                )

                .setInteractive(
                    {
                        useHandCursor:
                            true
                    }
                )

                .on(

                    "pointerdown",
                    () => {
                        this.scene.sfx.play(
                            "choosing_menu",
                            {
                                volume: 0.15
                            }
                        );

                        callback?.();
                    }

                );

        this.gigaAttackButton = button;

    }

    updateEnergyTank(character){
        this.energyTank.setVisible(this.canUseEnergyTank(character));

        this.energyTank.removeAllListeners("pointerdown");

        this.energyTank.setInteractive(
            {
                useHandCursor:
                    true
            }
        )

        .on(

            "pointerdown",
            () => {
                this.scene.sfx.play(
                    "selecting_menu",
                    {
                        volume: 0.15
                    }
                );

                character.hasUsedEnergyTank = true;

                character.hp = character.maxHp;

                this.energyTank.setVisible(false);
            }

        );
    }

    canUseEnergyTank(character){
        return (character.hasEnergyTank && !character.hasUsedEnergyTank && (character.hp < character.maxHp));
    }

    async selectEnemyTarget(
        character,
        callback
    ) {

        //
        // boss fight
        //

        if (
            this.scene
                .isBossFight
        ) {

            await callback(
                this.scene.boss
            );

            character.direction =
            1;

            character.sprite
                .setFlipX(
                    false
                );

            return;
        }

        //
        // combate normal
        //

        this.enterTargetSelectionMode(

            () => {

                this.scene
                    .targetSelector
                    .clear();

            }

        );

        this.scene
            .targetSelector
            .startSelection(

                character,

                callback

            );

    }



    clear() {

        this.AttackButtons
            .forEach(

                b =>
                    b.destroy()

            );
        
        this.DefenseButtons
            .forEach(

                b =>
                    b.destroy()

            );

        this.gigaAttackButton?.destroy()

        this.gigaAttackButton = null

        this.AttackButtons =
            [];

        this.DefenseButtons =
            [];

        this.menuBackground
                .setFillStyle(
                    0x000000
                );

        this.portrait.setVisible(false);

        this.energyTank.setVisible(false);
    }

    enterTargetSelectionMode(
        onCancel
    ) {

        //
        // esconde botões
        //

        this.hideButtons();

        //
        // mostra cancelar
        //

        this.cancelButton
            .setVisible(
                true
            );

        //
        // remove listeners antigos
        //

        this.cancelButton
            .removeAllListeners(
                "pointerdown"
            );

        //
        // cancelar
        //

        this.cancelButton.once(

            "pointerdown",

            () => {

                this.scene.sfx.play(
                    "choosing_menu",
                    {
                        volume: 0.15
                    }
                );

                this.exitTargetSelectionMode();

                onCancel?.();

            }

        );

    }

    exitTargetSelectionMode() {

        //
        // esconde cancelar
        //

        this.cancelButton
            .setVisible(
                false
            );

        //
        // restaura
        //

        this.refresh();

    }

}