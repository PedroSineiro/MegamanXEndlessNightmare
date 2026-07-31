import HighMax from "./Highmax.js";

export default class
ProtoHighMax
extends HighMax {

    constructor(
        scene,
        x,
        offsetX,
        y,
        offsetY,
    ) {

        super(
            scene,
            x,
            offsetX,
            y,
            offsetY,
        );

        this.maxHp = 290;

        this.hp = this.maxHp;

        this.attackDamage = 15;

        this.gigaAttackDamage = 58;

    }

    async destroy() {
        await this.destroyProto();
    }


}