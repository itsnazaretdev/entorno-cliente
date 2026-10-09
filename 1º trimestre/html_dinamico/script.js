const filtro = document.createElement("button")
filtro.textContent = "Móvil"

const contenedor = document.querySelector('.contenedor')
contenedor.classList.add('contenedor')

let productos = [
    {id: 1, nombre: "Peluche oso", categoria: "Juguetes", disponible: true, precio: 10},
    {id: 2, nombre: "MacBook", categoria: "Ordenadores", disponible: true, precio: 600},
    {id: 3, nombre: "Samsung TV", categoria: "Televisores", disponible: false, precio: 250},
    {id: 4, nombre: "La selva negra", categoria: "Libros", disponible: true, precio: 37},
    {id: 5, nombre: "Pantalla HP", categoria: "Monitores", disponible: false, precio: 300},
]
contenedor.appendChild(filtro)

productos.forEach(({id, nombre, categoria, precio, disponible}) => {
    const tarjeta = document.createElement("div")
    tarjeta.classList.add('tarjeta')
    let precioIva = (precio * 1.21).toFixed(2)
    
    const contenido = `
    <h2>${nombre}</h2>
    <p>${categoria}</p>
    <p>${precio}</p>
    ${disponible ? "<button>Añadir al carrito</button>" : "<p>No disponible</p>"}
    <p class="precioIva">${precioIva}</p>
`
    tarjeta.innerHTML = contenido
       contenedor.appendChild(tarjeta)
})

//const filtrados = productos.filter(producto => producto.disponible === true)
