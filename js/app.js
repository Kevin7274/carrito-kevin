// variables para referenciar a los objetos del documento
const carrito = document.querySelector('#carrito'); 
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#vaciar-carrito');
const variarCarrito = document.querySelector('#vaciar-carrito');

let listadoCarrito = [];

const agregarCurso = (e) => {
    e.preventDefault();
    //e.target.class.list.contains('agregar-carrito')
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
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
    //console.log("Curso a agregar");
    //console.log(curso.id)
    //console.log("listado de cursos")
    //listadoCarrito.forEach(CURSO => console.log(CURSO.id));
    let carrito = listadoCarrito.map(cursoInCarrito=>{
        if(cursoInCarrito.id === curso.id){
            cursoInCarrito.cantidad++;
            return cursoInCarrito;
        } else {
            return cursoInCarrito;
        }})
    
        listadoCarrito = [...carrito, curso]
    console.log(listadoCarrito);
    generaHTML();
}
const generaHTML = () => {
    vaciarCarrito();
    listadoCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const cursoHTML = `
        <td>
           <img src="${curso.imagen}"width=100>
        </td> 
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>

        `;
        row.innerHTML = cursoHTML;
        contenedorCarrito.appendChild(row);
    });

}
const vaciarCarrito = () => {

}
const cargarEventListener = () => {
    //agregar funcion de carga de cursod al carrito
    listaCursos.addEventListener('click', agregarCurso);
} 

cargarEventListener();