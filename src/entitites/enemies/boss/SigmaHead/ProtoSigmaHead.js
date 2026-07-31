import SigmaHead from "./SigmaHead.js";

export default class
ProtoSigmaHead
extends SigmaHead {

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

        this.maxHp = 300;

        this.hp = this.maxHp;

        this.attackDamage = 30;

        this.gigaAttackDamage = 12;

    }

    async destroy() {
        await this.destroyProto();
    }

}