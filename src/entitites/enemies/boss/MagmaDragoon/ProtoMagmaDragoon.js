import MagmaDragoon from "../MagmaDragoon/MagmaDragoon.js";

export default class
ProtoMagmaDragoon
extends MagmaDragoon {

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

        this.maxHp = 266;

        this.hp = this.maxHp;

        this.attackDamage = 30;

        this.gigaAttackDamage = 28;

    }

    async destroy() {
        await this.destroyProto();
    }

}