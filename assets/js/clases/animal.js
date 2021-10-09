export default class Animal {
  constructor(nombre, edad, comentarios, img, sonido) {

    const _nombre = nombre
    const _edad = edad
    const _comentarios = comentarios
    const _img = img
    const _sonido = sonido

    this.getNombre = () => {
      return _nombre
    }
    this.getEdad = () => {
      return _edad
    }
    this.getComentarios = () => {
      return _comentarios
    }
    this.getImg = () => {
      return _img
    }
    this.getSonido = () => {
      return _sonido
    }
  }

  get nombre() {
    return this.getNombre()
  }
  get edad() {
    return this.getEdad()
  }
  get comentarios() {
    return this.getComentarios()
  }
  get img() {
    return this.getImg()
  }
  get sonido() {
    return this.getSonido()
  }

}