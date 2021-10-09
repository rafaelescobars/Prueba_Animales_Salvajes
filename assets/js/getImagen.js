import getAnimalesJson from './getAnimalesJson.js'

const selector = document.querySelector('#animal')

selector.addEventListener('change', async () => {

  const {
    animales
  } = await getAnimalesJson.getData()

  const animalSelected = selector.value

  const imagenAnimalSelected = animales.find(p => p.name == animalSelected).imagen

  const imagenAnimalSelectedTag = `<img id='imagenPreview' class='mh-100 mw-100 position-absolute top-50 start-50 translate-middle' src='/assets/imgs/${imagenAnimalSelected}'>`

  const preview = document.querySelector('#preview')
  preview.innerHTML = imagenAnimalSelectedTag

  preview.style.backgroundImage = `url()`

})