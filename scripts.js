let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
let searchBtn = document.querySelector(".bx-search")


console.log(btn)
console.log(sidebar)
console.log(searchBtn)

btn.onclick = function(){
  sidebar.classList.toggle('active')

}

searchBtn.onclick = function(){
  sidebar.classList.toggle('active')

}
