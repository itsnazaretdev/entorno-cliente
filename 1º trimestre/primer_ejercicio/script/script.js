let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let navList = nav.querySelector("ul");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});


const articles = ["article1", "article2", "article3", "article4", "article5", "article6"]
const buttons = ["button1", "button2", "button3", "button4", "button5", "button6"]
const colors = ["#ffbcf1", "#ffaeae", "#ffddb6", "#fff6a6", "#e0ffb8", "#c0edff"];



 buttons.forEach((button, index) => {
  let index = buttons[i]
  button.addEventListener('click', () => {
    if (index) {
      articles[index].toggle(colors[index])
    }
  })
 });

