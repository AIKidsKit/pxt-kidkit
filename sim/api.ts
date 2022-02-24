/// <reference path="../libs/core/enums.d.ts"/>


namespace pxsim {
    /**
     * A ghost on the screen.
     */
    //%
    export class ZSprite {
        /**
         * The X-coordiante
         */
        //%
        public x = 100;
         /**
         * The Y-coordiante
         */
        //%
        public y = 100;
        public angle = 90;
        
        constructor() {
        }
        
        private foobar() {}

        /**
         * Move the thing forward
         */
        //%
        public forwardAsync(steps: number) {
            let deg = this.angle / 180 * Math.PI;
            this.x += Math.cos(deg) * steps * 10;
            this.y += Math.sin(deg) * steps * 10;
            board().updateView();

            if (this.x < 0 || this.y < 0)
                board().bus.queue("TURTLE", "BUMP");

            return Promise.delay(400)
        }
    }

    //%
    export class Image {
      //%
      public name : string;
      constructor() {}
    }

}


namespace pxsim.webcam {

    //% blockId=webcam_grab block="Grab camera frame" 
    export function grab(body: (frame: Image) => void): void {
       body(new Image());
    }

    //% blockId=webcam_grab_into block="frame from camera" 
    //% blockSetVariable
    export function grabinto(): Image {
    }


}

namespace pxsim.ai {

    //% blockId=lobe_ai block="Get category for $image from Lobe.AI" 
    //% blockSetVariable
    export function lobe(image: Image): string {
    }

    //% blockId=face_api block="Get emotions from $image" 
    //% blockSetVariable
    export function emotionApi(image: Image) : Emotion {
         return Emotion.Happy;
    }
}

namespace pxsim.robot {
 

   /**
     * Express different emotions with robotic image
     * @param Emotion to express
     */
    //% blockId=rbt_express block="Express $emotion emotion"
    export function express(emotion : Emotion) {
    }

    //% blockId=rbt_express_str block="Express emotion $emotion"
    //% text.shadowOptions.toString=true
    export function express_str(emotion : string) {
    }


    /**
     * Say something with Speech API
     * @param Text to say
     */
    //% blockId=rbt_say block="Speak $text" 
    export function speechsay(text : string) {
    }


}

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}

function logMsg(m:string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg:string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        // board().writeSerial(msg + "\n")
    }
}


namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    export function createSprite(): ZSprite {
        return new ZSprite();
    }
}