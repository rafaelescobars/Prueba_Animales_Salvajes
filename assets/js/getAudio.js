import getAnimalesJson from './getAnimalesJson.js'
// import getImagen from './getImagen.js'

const selector = document.querySelector('#animal')



selector.addEventListener('change', async () => {

  const {
    animales
  } = await getAnimalesJson.getData()

  const animalSelected = selector.value

  const sonidoAnimalSelected = animales.find((element) => {
    return element.name == animalSelected
  }).sonido

  const audioAnimalSelectedTag = `<source id='sonidoPreview' src='/assets/sounds/${sonidoAnimalSelected}' type='audio/mpeg'>`

  const audioTag = document.querySelector('#player')

  audioTag.innerHTML = audioAnimalSelectedTag

})