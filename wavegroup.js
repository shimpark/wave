import {
    Wave
} from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 12;

        this.color = ['rgba(252,239,2,0.7','rgba(235,189,2,0.7)' , 'rgba(246,221,121,0.7)'];

        this.waves = [];

        for(let i = 0 ; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for(let i = 0 ; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for(let i = 0; i < this.totalWaves ; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}