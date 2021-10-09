import Animal from "./animal.js";

export default class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }
  gruñir() {
    const audioTag = document.querySelector('#player')

    audioTag.innerHTML = ''

    const audioAnimalSelectedTag = `<source src='${this.sonido}' type='audio/mpeg'>`

    audioTag.innerHTML = audioAnimalSelectedTag

    audioTag.load()

    audioTag.play()
  }
}