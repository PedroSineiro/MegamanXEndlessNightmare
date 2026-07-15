export default class
SoundManager {

    constructor(scene) {

        this.scene = scene;

    }

    play(key, config = {volume: 0.15}) {

        this.scene.sound.play(
            key,
            config
        );

    }

}