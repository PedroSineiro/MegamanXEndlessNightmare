export default class
SoundManager {

    constructor(scene) {

        this.scene = scene;

    }

    play(key, config = {}) {

        this.scene.sound.play(
            key,
            config
        );

    }

}