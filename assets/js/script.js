import Animal from "./clases/animal.js";
import Leon from './clases/leon.js'
import Lobo from './clases/lobo.js'
import Oso from './clases/oso.js'
import Serpiente from './clases/serpiente.js'
import Aguila from './clases/aguila.js'

// const audioPlayer = document.querySelector('#player')

let listaAnimales = []

document.querySelector('#btnRegistrar').addEventListener('click', () => {

  let nombre = document.querySelector('#animal').value
  let edad = document.querySelector('#edad').value
  let comentarios = document.querySelector('#comentarios').value

  if (nombre != 'Seleccione un animal' && edad != 'Seleccione un rango de años' && comentarios != '') {

    let img = document.querySelector('#imagenPreview').getAttribute('src')
    // console.log(img);
    let sonido = document.querySelector('#sonidoPreview').getAttribute('src')

    let nuevoAnimal

    switch (nombre) {
      case 'Leon':
        nuevoAnimal = new Leon(nombre, edad, comentarios, img, sonido)
        break
      case 'Lobo':
        nuevoAnimal = new Lobo(nombre, edad, comentarios, img, sonido)
        break
      case 'Oso':
        nuevoAnimal = new Oso(nombre, edad, comentarios, img, sonido)
        break
      case 'Serpiente':
        nuevoAnimal = new Serpiente(nombre, edad, comentarios, img, sonido)
        break
      case 'Aguila':
        nuevoAnimal = new Aguila(nombre, edad, comentarios, img, sonido)
        break
    }

    listaAnimales.push(nuevoAnimal)

    const reloadTable = (() => {

      tableContainer.innerHTML = ''
      listaAnimales.forEach((animal, indice) => {
        tableContainer.innerHTML += `
          <div class='px-3 pb-2 animal' data-animal='${animal.nombre}'>
            <div class="card" style="width: 18rem; background: #404040">
              <img src="${animal.img}" class="card-img-top ${indice}" alt="${animal.nombre}">
              <div class="card-body p-0">
                <button class='playSonido ${animal.nombre} w-100 btn p-0 m-0 bg-secondary'> 
                  <img class='playSonido ${animal.nombre} py-1' height='25' src='/assets/imgs/audio.svg'/>
                </button>
              </div>
            </div>
          </div>
          `
      });
    })()

    nombre = document.querySelector('#animal')
    edad = document.querySelector('#edad')
    comentarios = document.querySelector('#comentarios')
    nombre.selectedIndex = 0
    edad.selectedIndex = 0
    comentarios.value = ''
    const preview = document.querySelector('#preview')
    preview.innerHTML = ''
    preview.style.backgroundImage = `url(/assets/imgs/lion.svg)`

  } else {

    const modalContent = document.querySelector('#exampleModal')
    modalContent.setAttribute('tabindex', '-1')
    modalContent.setAttribute('aria-labelledby', 'exampleModalLabel')
    modalContent.setAttribute('aria-hidden', 'true')
    modalContent.setAttribute('data-bs-backdrop', 'static')


    modalContent.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content text-light" style='background: #404040'>
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Advertencia
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          Debe ingresar todos los datos antes de agregar.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
    `

    let modal = new bootstrap.Modal(document.querySelector('#exampleModal'))

    modal.show()
  }
})

const tableContainer = document.querySelector('#Animales')

let elementoAnimal

tableContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('playSonido')) {

    switch (target.classList.item(1)) {
      case 'Leon':
        elementoAnimal = listaAnimales.find(element => {
          return element.nombre == 'Leon'
        })
        elementoAnimal.rugir()
        break;
      case 'Lobo':
        elementoAnimal = listaAnimales.find(element => {
          return element.nombre == 'Lobo'
        })
        elementoAnimal.aullar()
        break;
      case 'Oso':
        elementoAnimal = listaAnimales.find(element => {
          return element.nombre == 'Oso'
        })
        elementoAnimal.gruñir()
        break;
      case 'Serpiente':
        elementoAnimal = listaAnimales.find(element => {
          return element.nombre == 'Serpiente'
        })
        elementoAnimal.sisear()
        break;
      case 'Aguila':
        elementoAnimal = listaAnimales.find(element => {
          return element.nombre == 'Aguila'
        })
        elementoAnimal.chillar()
        break;
    }
  }
  e.stopPropagation()
});

tableContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('card-img-top')) {

    const modalContent = document.querySelector('#exampleModal')
    modalContent.setAttribute('tabindex', '-1')
    modalContent.setAttribute('aria-labelledby', 'exampleModalLabel')
    modalContent.setAttribute('aria-hidden', 'true')
    modalContent.removeAttribute('data-bs-backdrop')

    modalContent.innerHTML = `
    <div class="modal-dialog w-25">
      <div class="modal-content text-light" style='background: #404040'>
        <div class="modal-body py-0 px-0">
        
          <div class="card px-3 py-2 m-auto" style="width: 18rem;background: #404040">
            
            <img src="${listaAnimales[target.classList.item(1)].img}" class="card-img-top" alt="${listaAnimales[target.classList.item(1)].nombre}">
            
            <div class="card-body text-center">
              <p class="card-text">
                ${listaAnimales[target.classList.item(1)].edad}
              </p>
              <p class="card-text fw-bold">
                Comentarios
              </p>
              <p class="card-text">
                ${listaAnimales[target.classList.item(1)].comentarios}
              </p>    
            </div>
          
          </div>
        
        </div>
      </div>
    </div>
    `

    let modal = new bootstrap.Modal(document.querySelector('#exampleModal'))

    modal.show()

  }
  e.stopPropagation()
});