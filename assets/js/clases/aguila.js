import Animal from "./animal.js";

export default class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  chillar() {
    const audioTag = document.querySelector('#player')

    audioTag.innerHTML = ''

    const audioAnimalSelectedTag = `<source src='${this.sonido}' type='audio/mpeg'>`

    audioTag.innerHTML = audioAnimalSelectedTag

    audioTag.load()

    audioTag.play()
  }
}