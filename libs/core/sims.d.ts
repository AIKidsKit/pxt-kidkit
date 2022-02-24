// Auto-generated from simulator. Do not edit.
    /**
     * A ghost on the screen.
     */
    //%
    declare class ZSprite {
        /**
         * The X-coordiante
         */
        //%
        //% shim=.x
        public x: number;

        /**
         * The Y-coordiante
         */
        //%
        //% shim=.y
        public y: number;

        /**
         * Move the thing forward
         */
        //%
        //% shim=.forwardAsync promise
        public forward(steps: number): void;

    }
    //%
    declare class Image {
        //%
        //% shim=.name
        public name: string;

    }
declare namespace webcam {
    //% blockId=webcam_grab block="Grab camera frame"
    //% shim=webcam::grab
    function grab(body: (frame: Image) => void): void;

    //% blockId=webcam_grab_into block="frame from camera" 
    //% blockSetVariable
    //% shim=webcam::grabinto
    function grabinto(): Image;

}
declare namespace ai {
    //% blockId=lobe_ai block="Get category for $image from Lobe.AI" 
    //% blockSetVariable
    //% shim=ai::lobe
    function lobe(image: Image): string;

    //% blockId=face_api block="Get emotions from $image" 
    //% blockSetVariable
    //% shim=ai::emotionApi
    function emotionApi(image: Image): Emotion;

}
declare namespace robot {
    /**
     * Express different emotions with robotic image
     * @param Emotion to express
     */
    //% blockId=rbt_express block="Express $emotion emotion"
    //% shim=robot::express
    function express(emotion: Emotion): void;

    //% blockId=rbt_express_str block="Express emotion $emotion"
    //% text.shadowOptions.toString=true
    //% shim=robot::express_str
    function express_str(emotion: string): void;

    /**
     * Say something with Speech API
     * @param Text to say
     */
    //% blockId=rbt_say block="Speak $text"
    //% shim=robot::speechsay
    function speechsay(text: string): void;

}
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
declare namespace sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    //% shim=sprites::createSprite
    function createSprite(): ZSprite;

}

// Auto-generated. Do not edit. Really.
