document.querySelector("form").addEventListener("submit", storeData)

function storeData() {
    event.preventDefault()
    let details = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }



    let getData = JSON.parse(localStorage.getItem("LoginDetails"))

    for (i = 0; i < getData.length; i++) {

        if (getData[i].email === details.email && getData[i].password === details.password) {
            alert("login successful")
            window.location.href = "../HTML/home.html"
            return
        }

    }
    if (i === getData.length) {
        alert("Incorrect Details!!")
    }




}
let cartitem = 5
if (cartitem != 0) {
    let totalitems = document.querySelector("#Total");
    totalitems.innerText = cartitem;
}