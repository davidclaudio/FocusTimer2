export default function Sounds(){
    const audioForest = new Audio('./sounds/Floresta.wav')
    const audioRain = new Audio('./sounds/Chuva.wav')
    const audioCoffe = new Audio('./sounds/Cafeteria.wav')
    const audioFire = new Audio('./sounds/Lareira.wav')
    const alarm = new Audio('./sounds/alarm.mp3')

    let audioRunning = null// Guarda a música em execução ou null para nenhuma.

    function audioExecute(nameMusic){
        stopAll()
        switch(nameMusic){
            case audioRunning:
                audioRunning = null
                break
            case 'forest':
                audioForest.play()
                audioForest.loop = true
                audioRunning = nameMusic
                break
            case 'rain':
                audioRain.play()
                audioRain.loop = true
                audioRunning = nameMusic
                break
            case 'coffe':
                audioCoffe.play()
                audioCoffe.loop = true
                audioRunning = nameMusic
                break
            case 'fire':
                audioFire.play()
                audioFire.loop = true
                audioRunning = nameMusic
                break
            default:
                break;
        }
        controlVolume(50)
    }

    function stopAll(){
        audioForest.pause()
        audioRain.pause()
        audioCoffe.pause()
        audioFire.pause()
    }

    function chronometerAlarm(){
        alarm.play()
    }

    function controlVolume(volume){
        switch(audioRunning){
            case 'forest':
                audioForest.volume = volume/100
                break;
            case 'rain':
                audioRain.volume = volume/100
                break;
            case 'coffe':
                audioCoffe.volume = volume/100
                break;
            case 'fire':
                audioFire.volume = volume/100
                break;
            default:
                break;                
        }  
    }

    function getAudioRunning(){
        return audioRunning
    }

    return{
        audioExecute,
        stopAll,
        chronometerAlarm,
        controlVolume,
        getAudioRunning
    }
}