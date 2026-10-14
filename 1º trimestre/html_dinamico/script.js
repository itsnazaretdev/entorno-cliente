const filtro = document.createElement("button");
filtro.textContent = "Móvil";

const contenedor = document.querySelector(".contenedor");
contenedor.classList.add("contenedor");

let productos = [
  {
    id: 1,
    nombre: "Peluche oso",
    categoria: "Juguetes",
    disponible: true,
    precio: 10,
  },
  {
    id: 2,
    nombre: "MacBook",
    categoria: "Ordenadores",
    disponible: true,
    precio: 600,
  },
  {
    id: 3,
    nombre: "Samsung TV",
    categoria: "Televisores",
    disponible: false,
    precio: 250,
  },
  {
    id: 4,
    nombre: "La selva negra",
    categoria: "Libros",
    disponible: true,
    precio: 37,
  },
  {
    id: 5,
    nombre: "Pantalla HP",
    categoria: "Monitores",
    disponible: false,
    precio: 300,
  },
];
contenedor.appendChild(filtro);

productos.forEach(({ id, nombre, categoria, precio, disponible }) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  let precioIva = (precio * 1.21).toFixed(2);

  const contenido = `
    <h2>${nombre}</h2>
    <p>${categoria}</p>
    <p>${precio}</p>
    ${disponible ? "<button>Añadir al carrito</button>" : "<p>No disponible</p>"}
    <p class="precioIva">${precioIva}</p>
`;
  tarjeta.innerHTML = contenido;
  contenedor.appendChild(tarjeta);
});

//-------------------filtro-----------------------
filtro.addEventListener("click", () => {
  contenedor.innerHTML = "";

  const productosFiltrados = productos.filter(producto => producto.categoria === "Libros");

  productosFiltrados.forEach(({ nombre, categoria, precio, disponible }) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    let precioIva = (precio * 1.21).toFixed(2);

    const contenido = `
      <h2>${nombre}</h2>
      <p>${categoria}</p>
      <p>${precio}</p>
      ${disponible ? "<button>Añadir al carrito</button>" : "<p>No disponible</p>"}
      <p class="precioIva">${precioIva}</p>
    `;
    tarjeta.innerHTML = contenido;
    contenedor.appendChild(tarjeta);
  });
});

//const filtrados = productos.filter(producto => producto.disponible === true)

const numeros = [1, 2, 3, 4, 5, 6, 7];

//No modifica el array
//numeros.forEach(numero => console.log(numero))

//Modifica el array
const suma = numeros.map((numero) => numero * 2);
//console.log(suma)

const objProductos = [
  { nombre: "Mac", precio: 900 },
  { nombre: "iPhone", precio: 850 },
  { nombre: "pelota", precio: 4 },
];
const objProdPrecio = objProductos.map(({ precio }) => precio * 2);
//console.log(objProdPrecio)

//const filtrado = objProductos.filter(producto => producto.precio < 20)
const filtrado = objProductos.filter(({ precio }) => precio < 20);
//console.log(filtrado)

//------------------------------------------------------
const casas = [
  { tipo: "casa", precio: 800 },
  { tipo: "piso", precio: 500 },
  { tipo: "atico", precio: 600 },
];
//Filtrar por casas
const casaFiltro = casas.filter((hogar) => hogar.tipo === "casa");
//console.log(casaFiltro)

const precioX3 = casaFiltro.map((casa) => casa.precio * 3);
//console.log(precioX3);

const casaFind = casas.find((hogar) => hogar.tipo === "piso");
//console.log(casaFind);

//-----------------------------------------------------
const categorias = [
  { id: 1, marca: "apple", producto: "iphone" },
  { id: 2, marca: "android", producto: "xiaomi" },
  { id: 3, marca: "hp", producto: "pantalla 20'" },
  { id: 4, marca: "samsung", producto: "tv samsung" },
];

categorias.forEach((categoria) =>
  console.log(categoria.marca.toLowerCase().includes("hp")),
);

//----------------DOM---------------------------
const sumar = document.querySelector(".btn-sum");
const restar = document.querySelector(".btn-res");
const resultado = document.querySelector(".num");
const div = document.querySelector(".contenedorDiv");
const p = document.createElement("p");

let contador = 0;

sumar.addEventListener("click", () => {
  contador++;
  renderizar();
  if (contador > 0) {
    p.innerHTML = "";
  }
});

restar.addEventListener("click", () => {
  contador--;
  if (contador < 0) {
    p.innerHTML = "No puede bajar de 0";
    div.appendChild(p);
    contador = 0;
  }
  renderizar();
});

function renderizar() {
  resultado.textContent = contador;
}

//------------------------------------
const numeros2 = [5, 10, 15, 35, 40];
const datos = [
  { nombre: "mario", precio: 4 },
  { nombre: "paco", precio: 5 },
  { nombre: "mangel", precio: 15 },
  { nombre: "mangel", precio: 25 },

];

const filtro2 = numeros2.filter(numero => numero > 10)
console.log(filtro2)

const filtroPrecio = datos.filter(({precio}) => precio > 10)
filtroPrecio.forEach(objeto => console.log(objeto))
