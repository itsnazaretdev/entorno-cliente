const botonColor = document.querySelectorAll(".boton-color")
const p = document.querySelector(".parrafo")

botonColor.forEach(boton => boton.addEventListener("click", (e) => {
    // if (boton.textContent === "Rosa") {
    //     p.textContent = "Hizo click en el botón 'rosa'"
    // } else {
    //     p.textContent = "Hizo click en el botón 'azul'"
    // }
    p.textContent = `Click en el botón ${e.target.textContent.toLowerCase()}`

    if (e.target.textContent === "Rosa") {
        p.style.color = "#b408b4"
    } else {
        p.style.color = "#0868e6"
    }

}));

//clic al cambiar tarjeta cambia color, al corazón rellenarlo, en botón se añade al carrito

const tarjetas = document.querySelectorAll(".card")

tarjetas.forEach(tarjeta => tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("fondoTarjeta") 
    
    const corazonLinea = document.querySelector(".bi-suit-heart")

    const corazonLleno = document.querySelector(".bi-suit-heart-fill")

    corazonLleno.classList.toggle("d-none")
    corazonLinea.classList.toggle("d-done")
}))

 
    
   
