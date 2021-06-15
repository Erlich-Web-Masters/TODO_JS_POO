class Productos {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Interfaz {

    agregarElemento (producto){
        const $listaDeElementos = document.getElementById('lista_de_elementos');
        const elemento = document.createElement('div');

        elemento.innerHTML = `
           <div class="card text-center mb-4">
                <div class="card-body">
                <strong>Producto </strong>: ${producto.nombre}
                <strong>Precio </strong>: ${producto.precio}
                <a href="#" name="delete" class="btn btn-danger btn-sm ml-1">X</a>
                </div>
           </div>
        `;

        $listaDeElementos.appendChild(elemento);
        this.resetear();
    }

    resetear(){
         document.getElementById('lista-formulario').reset();
    }

    eliminarElemento (elemento){
        if(elemento.name === 'delete'){
            elemento.parentElement.parentElement.parentElement.remove();
            console.log(elemento.parentElement.parentElement.parentElement);
        }
    }

    mostrarElemento (){

    }
}

//DOM

const $LISTA_FORMULARIO = document.getElementById('lista-formulario');
const $LISTA_DE_ElEMENTOS = document.getElementById('lista_de_elementos');

$LISTA_FORMULARIO.addEventListener('submit', e => {
   e.preventDefault();
    const $NOMBRE = document.getElementById('nombre').value;
    const $PRECIO = document.getElementById('precio').value;

    console.log($NOMBRE,$PRECIO);

    const estante = new Productos($NOMBRE,$PRECIO);

    console.log(estante);

    const ui = new Interfaz();
    console.log(ui);

    ui.agregarElemento(estante);


});

$LISTA_DE_ElEMENTOS.addEventListener('click', e => {
   const ui = new Interfaz();
   ui.eliminarElemento(e.target);
});