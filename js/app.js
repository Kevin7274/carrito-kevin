// variables para referenciar a los objetos del documento
const carrito = document.querySelector('#carrito'); 
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#vaciar-carrito');
const variarCarrito = document.querySelector('#vaciar-carrito');

let listadoCarrito = [1];

const agregarCurso = (e) => {
    e.preventDefault();
    //e.target.class.list.contains('agregar-carrito')
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement
        const infocurso = {
            imagen: curso.querySelector('img').src,
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1
        }
        agregarCarrito(infocurso)
    }
   
}

const agregarCarrito = curso => {
    listadoCarrito = [...listadoCarrito, curso]
    console.log(listadoCarrito);
}

const cargarEventListener = () => {
    //agregar funcion de carga de cursod al carrito
    listaCursos.addEventListener('click', agregarCurso);
} 

cargarEventListener();