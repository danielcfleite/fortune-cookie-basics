const page1 = document.querySelector(".pg1")
const page2 = document.querySelector(".pg2")
const cookies = document.querySelectorAll('.cookie')
const luck = document.querySelector('#luck')
let click = 1
console.log(page1)
console.log(page2)

page2.classList.remove('container')

cookies.forEach((cookie) => {
    cookie.addEventListener("click", () => {
        page1.classList.toggle('hidden')
        page1.classList.toggle('container')
        page2.classList.toggle('container')
        page2.classList.toggle('hidden')
        luck.classList.toggle('animated')
    });
  });