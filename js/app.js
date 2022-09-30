// variables para referenciar a los objetos del documento
const carrito = document.querySelector('#carrito'); 
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#vaciar-carrito');
const variarCarrito = document.querySelector('#vaciar-carrito');

const agregarCurso = (e) => {
    e.preventDefault();
    //e.target.class.list.contains('agregar-carrito')
    if(e.target.classList.contains('agregar-carrito')){
        console.log("Presionaste el botón bro xD")
    }
   
}

const cargarEventListener = () => {
    //agregar funcion de carga de cursod al carrito
    listaCursos.addEventListener('click', agregarCurso);
} 

cargarEventListener();