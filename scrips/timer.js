import { spanMinutes, spanSeconds } from "./elements.js";

let seconds
let controlSetTimeOut
let controleVariableButtonPlayPressed = false /*false, primeira vez que o play foi pressionado. True, o cronômetro está em execução */



function playTimer(sounds, resetButtonsSounds, resetRangeVolumes){
    controleVariableButtonPlayPressed = true
    if (Number(spanSeconds.innerText) == 0){
        seconds = 60
        spanMinutes.innerText = String(Number(spanMinutes.innerText)-1).padStart(2, '0')
    }
    spanSeconds.innerText = String(--seconds).padStart(2, '0')
    
    if (spanMinutes.innerText == '00' && spanSeconds.innerText == '00'){
        controleVariableButtonPlayPressed = false
        sounds.chronometerAlarm()
        stopTimer(sounds, resetButtonsSounds, resetRangeVolumes)
        return
    }
    controlSetTimeOut = setTimeout(playTimer, 1000, sounds, resetButtonsSounds)
}

function stopTimer(sounds, resetButtonsSounds, resetRangeVolumes){
    clearTimeout(controlSetTimeOut)
    spanMinutes.innerText = '25'
    spanSeconds.innerText = '00'
    sounds.stopAll()
    resetButtonsSounds()
    resetRangeVolumes()
    controleVariableButtonPlayPressed = false
}

function updateMoreTimer(){
    spanMinutes.innerText = String(Number(spanMinutes.innerText)+5).padStart(2, '0')
}
    
function updateLessTimer(){
    if (Number(spanMinutes.innerText) > 4)
        spanMinutes.innerText = String(Number(spanMinutes.innerText)-5).padStart(2, '0')
}

export{
    updateMoreTimer,
    updateLessTimer,
    playTimer,
    stopTimer,
    controleVariableButtonPlayPressed
}