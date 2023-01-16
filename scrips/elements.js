const page = document.querySelector('.body')

const buttonTheme = document.querySelector('.theme')

const themeImage = document.querySelector('.themeImage')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.moreTime')
const buttonLessTime = document.querySelector('.lessTime')

const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffe = document.querySelector('.coffe')
const buttonSoundFire = document.querySelector('.fire')

const spanMinutes = document.querySelector('.minutes')
const spanSeconds = document.querySelector('.seconds')

const volumeSoundForest = document.querySelector('.rangeForest')
const volumeSoundRain = document.querySelector('.rangeRain')
const volumeSoundCoffe = document.querySelector('.rangeCoffe')
const volumeSoundFire = document.querySelector('.rangeFire')

let buttonSoundPressedControl = null //Guarda o nome do botão pressionado. Null é quando nenhum está ativo. 

function buttonSoundPressed(nameButtonPressed){

  resetButtonsSounds()

  switch (nameButtonPressed){
    case buttonSoundPressedControl:
      buttonSoundPressedControl = null
      break
    case 'forest':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundForest.classList.add('pressed')
      break
    case 'rain':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundRain.classList.add('pressed')
      break
    case 'coffe':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundCoffe.classList.add('pressed')
      break
    case 'fire':
      buttonSoundPressedControl = nameButtonPressed
      buttonSoundFire.classList.add('pressed')
      break
    default:
      break
  }

  enableButtonSoundRange(buttonSoundPressedControl)
}

function resetButtonsSounds(){
  buttonSoundForest.classList.remove('pressed')
  buttonSoundRain.classList.remove('pressed')
  buttonSoundCoffe.classList.remove('pressed')
  buttonSoundFire.classList.remove('pressed')
}

function themeDarkMode(){
  page.classList.toggle('darkMode')

  if (page.classList.contains('darkMode'))
    themeImage.setAttribute('src', './assets/darkMode.svg')
  else
    themeImage.setAttribute('src', './assets/whiteMode.svg')
}

function getVolumeSoundForest(){
  return volumeSoundForest
}

function getVolumeSoundRain(){
  return volumeSoundRain
}

function getVolumeSoundCoffe(){
  return volumeSoundCoffe
}

function getVolumeSoundFire(){
  return volumeSoundFire
}

function enableButtonSoundRange(nameButtonPressed){
  resetRangeVolumes()
  switch (nameButtonPressed){
    case 'forest':
      volumeSoundForest.classList.add('selected')
      volumeSoundForest.disabled = false
      volumeSoundForest.value = 50
      break
    case 'rain':
      volumeSoundRain.classList.add('selected')
      volumeSoundRain.disabled = false
      volumeSoundRain.value = 50
      break
    case 'coffe':
      volumeSoundCoffe.classList.add('selected')
      volumeSoundCoffe.disabled = false
      volumeSoundCoffe.value = 50
      break
    case 'fire':
      volumeSoundFire.classList.add('selected')
      volumeSoundFire.disabled = false
      volumeSoundFire.value = 50
      break
    default:
      break
  }
}

function resetRangeVolumes(){
  volumeSoundForest.value = 0
  volumeSoundRain.value = 0
  volumeSoundCoffe.value = 0
  volumeSoundFire.value = 0
  
  volumeSoundForest.disabled = true
  volumeSoundRain.disabled = true
  volumeSoundCoffe.disabled = true
  volumeSoundFire.disabled = true

  volumeSoundForest.classList.remove('selected')
  volumeSoundRain.classList.remove('selected')
  volumeSoundCoffe.classList.remove('selected')
  volumeSoundFire.classList.remove('selected')
}

export {
    buttonPlay,
    buttonStop,
    buttonMoreTime,
    buttonLessTime,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffe,
    buttonSoundFire,
    spanMinutes,
    spanSeconds,
    buttonSoundPressed,
    resetButtonsSounds,
    buttonTheme,
    themeDarkMode,
    volumeSoundForest,
    volumeSoundRain,
    volumeSoundCoffe,
    volumeSoundFire,
    getVolumeSoundForest,
    getVolumeSoundRain,
    getVolumeSoundCoffe,
    getVolumeSoundFire,
    resetRangeVolumes
}
