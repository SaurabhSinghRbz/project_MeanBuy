

let get = JSON.parse(localStorage.getItem("LoginDetails"))

document.getElementById("email").innerText = get[0].email


function change() {
  let get = document.getElementById("box1")
  if (get.style.backgroundColor === "orange") {
    get.style.backgroundColor = "white"
  }
  else {
    get.style.backgroundColor = "orange";
  }

}
function change2() {
  let get = document.getElementById("box2")
  if (get.style.backgroundColor === "orange") {
    get.style.backgroundColor = "white"
  }
  else {
    get.style.backgroundColor = "orange";
  }
}
function change3() {
  let get = document.getElementById("box3")
  if (get.style.backgroundColor === "orange") {
    get.style.backgroundColor = "white"
  }
  else {
    get.style.backgroundColor = "orange";
  }
}

function selectCod() {

  let get = document.getElementById("one")
  get.style.backgroundColor = "orange";

}
function selectCard() {

  let get = document.getElementById("two")
  get.style.backgroundColor = "orange";

}
function selectNetBanking() {
  let get = document.getElementById("three")
  get.style.backgroundColor = "orange";
}
function SelectEmi() {
  let get = document.getElementById("four")
  get.style.backgroundColor = "orange";
}
function SelectUpi() {
  let get = document.getElementById("five")
  get.style.backgroundColor = "orange";
}

// subtotal and product name

let product = JSON.parse(localStorage.getItem("addToCart"))

product.forEach(ele => {


  let box = document.getElementById("addingitem")
  let storeall = document.createElement("div")
  storeall.setAttribute("id", "storeall")

  // let div1=document.createElement("div")
  // div1.innerText=ele.name
  let divs = document.createElement("div")
  divs.setAttribute("id", "divs")
  let div2 = document.createElement("div")
  div2.innerText = ele.title
  let div3 = document.createElement("div")
  div3.innerText = ele.price
  divs.append(div2, div3)

  storeall.append(divs)
  box.append(storeall)
})
var x = JSON.parse(localStorage.getItem("cartsum"))
console.log(x)
document.getElementById("total").innerText = "Total :" + " " + JSON.parse(localStorage.getItem("cartsum"))
document.getElementById("subtotal").innerText = "subTotal :" + " " + JSON.parse(localStorage.getItem("cartsum"))

function thankyou() {
  window.location.href = "../HTML/checkout.html"
}
  // get.setAttribute("id","boxx")
  // get.style.backgroundColor="orange"

