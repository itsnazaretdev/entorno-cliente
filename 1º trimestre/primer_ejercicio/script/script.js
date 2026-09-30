let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let navList = nav.querySelector("ul");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});


// const articles = ["article1", "article2", "article3", "article4", "article5", "article6"]
// const buttons = ["button1", "button2", "button3", "button4", "button5", "button6"]
// const colors = ["#ffbcf1", "#ffaeae", "#ffddb6", "#fff6a6", "#e0ffb8", "#c0edff"];



//  buttons.forEach((button, index) => {
//   let index = buttons[index]
//   button.addEventListener('click', () => {
//     if (index) {
//       articles[index].toggle(colors[index])
//     }
//   })
//  });

const article1 = document.querySelector(".article1")
const button1 = document.querySelector(".button1")

const article2 = document.querySelector(".article2")
const button2 = document.querySelector(".button2")

const article3 = document.querySelector(".article3")
const button3 = document.querySelector(".button3")

const article4 = document.querySelector(".article4")
const button4 = document.querySelector(".button4")

const article5 = document.querySelector(".article5")
const button5 = document.querySelector(".button5")

const article6 = document.querySelector(".article6")
const button6 = document.querySelector(".button6")

button1.addEventListener("click", () => {
   article1.classList.toggle("color1")
})

button2.addEventListener("click", () => {
   article2.classList.toggle("color2")
})

button3.addEventListener("click", () => {
   article3.classList.toggle("color3")
})

button4.addEventListener("click", () => {
   article4.classList.toggle("color4")
})

button5.addEventListener("click", () => {
   article5.classList.toggle("color5")
})

button6.addEventListener("click", () => {
   article6.classList.toggle("color6")
})

