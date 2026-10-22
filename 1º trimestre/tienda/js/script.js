
const productos = [
    {id: 1, nombre: "Yumi", descripcion: "Agenda de diseño delicado, ideal para organizar tus tareas, citas y planes diarios.", categoria: "Agenda", precio: 20, img: "imgs/yumi.jpg"},
    {id: 2, nombre: "Versa Color, burgundy", descripcion: "Tinta de color burdeos intenso, perfecta para estampar sellos y decorar tus proyectos creativos.", categoria: "Tinta", precio: 22, img: "imgs/burgundy.jpg"},
    {id: 3, nombre: "Versa Color, peony", descripcion: "Tinta en un bonito tono rosa peonía, ideal para dar un toque delicado a tus manualidades.", categoria: "Tinta", precio: 22, img: "imgs/peony.jpg"},
    {id: 4, nombre: "Shikiori, sailor", descripcion: "Tinta de escritura de estilo japonés, perfecta para aportar personalidad a tus notas y escritos.", categoria: "Tinta", precio: 25, img: "imgs/shikiori.jpg"},
    {id: 5, nombre: "Hobonichi techo", descripcion: "Agenda compacta para planificar tu día a día, registrar recuerdos y organizar tus ideas.", categoria: "Agenda", precio: 30, img: "imgs/techo.jpg"},
    {id: 6, nombre: "LePen", descripcion: "Rotulador de punta fina, ideal para escribir, dibujar y añadir detalles a tus apuntes.", categoria: "Bolígrafo", precio: 14, img: "imgs/lepen.jpg"},
    {id: 7, nombre: "Kaweco pearl", descripcion: "Pluma estilográfica de acabado perlado, elegante y cómoda para disfrutar de la escritura.", categoria: "Pluma", precio: 24, img: "imgs/kaweco-pearl.jpg"},
    {id: 8, nombre: "Kaweco", descripcion: "Pluma estilográfica de diseño clásico y compacto, perfecta para llevar contigo a todas partes.", categoria: "Pluma", precio: 19, img: "imgs/kaweco.jpg"},
    {id: 9, nombre: "Double line", descripcion: "Rotulador de doble línea para crear trazos decorativos y dar originalidad a tus composiciones.", categoria: "Rotulador", precio: 12, img: "imgs/double-line.jpg"},
    {id: 10, nombre: "Terracota", descripcion: "Agenda en tonos cálidos inspirados en la terracota, ideal para organizar tus proyectos.", categoria: "Agenda", precio: 15, img: "imgs/terracota.jpg"},
    {id: 11, nombre: "Techo day-free", descripcion: "Agenda sin planificación horaria, perfecta para organizar tus días con total libertad.", categoria: "Agenda", precio: 35, img: "imgs/techo-dayfree.jpg"},
    {id: 12, nombre: "Agenda lila", descripcion: "Agenda de color lila para organizar tus actividades, citas y objetivos con estilo.", categoria: "Agenda", precio: 12, img: "imgs/agenda-lila.jpg"},
    {id: 13, nombre: "Agenda flor", descripcion: "Agenda con diseño floral, perfecta para quienes disfrutan de la papelería bonita y la organización.", categoria: "Agenda", precio: 12, img: "imgs/agenda-flor.jpg"},
    {id: 14, nombre: "Kaweco ink", descripcion: "Tinta para pluma estilográfica, ideal para conseguir una escritura fluida y personalizar tus escritos.", categoria: "Tinta", precio: 25, img: "imgs/kaweco-ink.jpg"},
    {id: 15, nombre: "Pluma mo", descripcion: "Pluma de escritura con un diseño sencillo, ideal para tomar notas y escribir a diario.", categoria: "Pluma", precio: 15, img: "imgs/pluma-mo.jpg"},
    {id: 16, nombre: "Pluma MD", descripcion: "Pluma pensada para disfrutar de una escritura cómoda y cuidar cada detalle de tus anotaciones.", categoria: "Pluma", precio: 18, img: "imgs/pluma-md.jpg"}
];

const sectionBotones = document.createElement("section")
sectionBotones.classList.add("sectionBotones")
const botones = [
  { id: 1, nombre: "Pluma", visible: true },
  { id: 2, nombre: "Agenda", visible: true },
  { id: 3, nombre: "Tinta", visible: true },
  { id: 4, nombre: "Rotulador", visible: true },
  { id: 5, nombre: "Bolígrafo", visible: true }
]


const input = document.createElement("input")
const select = document.createElement("select")
const option = document.createElement("option")
const option2 = document.createElement("option")

const sectionTarjetas = document.createElement("section")
sectionTarjetas.classList.add("sectionTarjetas")

const h1 = document.createElement("h1")
const main = document.createElement("main")

const root = document.querySelector(".root")

root.appendChild(main)
main.appendChild(h1)
h1.textContent = "Papelería bonita"

botones.forEach(botonNombre => {
    const boton = document.createElement("button")
    boton.classList.add("botonFiltro")
    boton.textContent = botonNombre.nombre
    sectionBotones.appendChild(boton)
})

input.placeholder = "Buscar productos..."
sectionBotones.appendChild(input)

option.textContent = "Menor a mayor"
option2.textContent = "Mayor a menor"
select.appendChild(option)
select.appendChild(option2)
sectionBotones.appendChild(select)

main.appendChild(sectionBotones)

function renderizar(productos) {
    sectionTarjetas.innerHTML = ""
    productos.forEach(producto => {
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta")
    
        tarjeta.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.img}">
            <p>${producto.descripcion}</p>
            <p>${producto.precio} €</p>
        `
        sectionTarjetas.appendChild(tarjeta)
    
    })

}
renderizar(productos)

main.appendChild(sectionTarjetas)

const agendas = productos.filter(producto => producto.categoria.toLowerCase() === "agenda")
const boligrafos = productos.filter(producto => producto.categoria.toLowerCase() === "bolígrafo")
const tintas = productos.filter(producto => producto.categoria.toLowerCase() === "tinta")
const plumas = productos.filter(producto => producto.categoria.toLowerCase() === "pluma")
const rotuladores = productos.filter(producto => producto.categoria.toLowerCase() === "rotulador")

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        renderizar(productos)

    })
});