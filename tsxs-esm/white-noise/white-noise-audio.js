System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            // 生成白噪音并写到 arr 上
            function generateWhiteNoise(arr, volume = 1) {
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = (Math.random() * 2 - 1) * volume;
                }
                return arr;
            }
            let instance = null;
            class WhiteNoiseAudio {
                inited = false;
                audioContext = new AudioContext();
                audioSource = this.audioContext.createBufferSource();
                playing = false;
                static shared = () => {
                    if (instance)
                        return instance;
                    instance = new WhiteNoiseAudio();
                    return instance;
                };
                constructor() { this.init(); }
                play = () => {
                    this.init();
                    if (this.playing) {
                        this.audioSource.disconnect(this.audioContext.destination);
                        this.playing = false;
                    }
                    else {
                        this.audioSource.connect(this.audioContext.destination);
                        this.playing = true;
                    }
                };
                stop = () => {
                    if (this.playing)
                        this.play();
                };
                init = () => {
                    if (this.inited)
                        return;
                    this.inited = true;
                    const bufferSize = 2 * this.audioContext.sampleRate;
                    const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
                    const output = noiseBuffer.getChannelData(0);
                    generateWhiteNoise(output, 0.1);
                    this.audioSource.buffer = noiseBuffer;
                    this.audioSource.loop = true;
                    this.audioSource.start();
                };
            } exports('WhiteNoiseAudio', WhiteNoiseAudio);

        })
    };
}));
