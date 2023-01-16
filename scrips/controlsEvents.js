import { buttonSoundPressed, resetButtonsSounds, themeDarkMode, getVolumeSoundForest, getVolumeSoundRain, getVolumeSoundCoffe, getVolumeSoundFire,resetRangeVolumes} from "./elements.js"
import { updateMoreTimer, updateLessTimer, playTimer, stopTimer, controleVariableButtonPlayPressed} from "./timer.js"

import Sounds from "./sounds.js"

const sounds = new Sounds()
let volume


export default function controlsEvents (){

    function playPressed(){
        if(controleVariableButtonPlayPressed == false)
            playTimer(sounds, resetButtonsSounds, resetRangeVolumes)
    }

    function stopPressed(){
        stopTimer(sounds, resetButtonsSounds, resetRangeVolumes)
    }

    function moreTimePressed(){
        updateMoreTimer()
    }

    function lessTimePressed(){
        updateLessTimer()
    }

    function soundForestPressed(){        
        buttonSoundPressed('forest')
        sounds.audioExecute('forest')
    }

    function soundRainPressed(){
        buttonSoundPressed('rain')
        sounds.audioExecute('rain')
    }

    function soundCoffePressed(){
        buttonSoundPressed('coffe')
        sounds.audioExecute('coffe')
    }

    function soundFirePressed(){
        buttonSoundPressed('fire')
        sounds.audioExecute('fire')
    }

    function darkMode(){
        themeDarkMode()
    }

    function controlVolumeSodundForest(){
        sounds.controlVolume(getVolumeSoundForest().value)
    }

    function controlVolumeSodundRain(){
        sounds.controlVolume(getVolumeSoundRain().value)
    }

    function controlVolumeSodundCoffe(){
        sounds.controlVolume(getVolumeSoundCoffe().value)
    }

    function controlVolumeSodundFire(){
        sounds.controlVolume(getVolumeSoundFire().value)
    }


    return{
        playPressed,
        stopPressed,
        moreTimePressed,
        lessTimePressed,
        soundForestPressed,
        soundRainPressed,
        soundCoffePressed,
        soundFirePressed,
        darkMode,
        controlVolumeSodundForest,
        controlVolumeSodundRain,
        controlVolumeSodundCoffe,
        controlVolumeSodundFire
    }
}