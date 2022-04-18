var container = document.getElementById("contentBox");
if (localStorage.getItem("addToCart") == null) {
    localStorage.setItem("addToCart", JSON.stringify([]));
}
var arr = JSON.parse(localStorage.getItem("productInfo"));
// var data = []
console.log(arr.price);
let div1 = document.createElement("div");
div1.id = "prodImg";
let div1div1 = document.createElement("div");
div1div1.id = "prodImgBox";
let proImg = document.createElement("img");
proImg.src = arr.image;
div1div1.appendChild(proImg);
// title box and all-->
let div1div2 = document.createElement("div");
div1div2.id = "prodTitle";
let nameBox = document.createElement("div");
// 7 div in nameBox -- >
let nameDiv1 = document.createElement("div");
nameDiv1.innerHTML = arr.title;



let nameDiv2 = document.createElement("div");
let nameDiv20 = document.createElement("div");
let nameDiv21 = document.createElement("span");
nameDiv21.innerHTML = (arr.rating + "  ");
let nameDiv22 = document.createElement("span");
nameDiv22.className = "fa fa-star checked";
let nameDiv23 = document.createElement("span");
nameDiv23.innerHTML = "WRITE A REVIEW"
nameDiv20.appendChild(nameDiv21);
nameDiv20.appendChild(nameDiv22);
nameDiv2.appendChild(nameDiv20);
nameDiv2.appendChild(nameDiv23);




let nameDiv3 = document.createElement("div");
nameDiv3.innerHTML = "₹" + arr.price;

let nameDiv4 = document.createElement("div");
nameDiv4.innerHTML = arr.off;

let nameDiv5 = document.createElement("div");
nameDiv5.innerHTML = "CASH ON DELIVERY  available on this product";

let nameDiv6 = document.createElement("div");
let div61 = document.createElement("span");
div61.innerHTML = "₹500 OFF with coupon code "
let div62 = document.createElement("span");
div62.innerHTML = "PREPAID";
nameDiv6.appendChild(div61);
nameDiv6.appendChild(div62);

let nameDiv7 = document.createElement("div");
let div71 = document.createElement("span");
div71.innerHTML = "Availability:"
let div72 = document.createElement("span");
div72.innerHTML = " In Stock"
nameDiv7.appendChild(div71);
nameDiv7.appendChild(div72);


nameBox.appendChild(nameDiv1);
nameBox.appendChild(nameDiv2);
nameBox.appendChild(nameDiv3);
nameBox.appendChild(nameDiv4);
nameBox.appendChild(nameDiv5);
nameBox.appendChild(nameDiv6);
nameBox.appendChild(nameDiv7);

let warntyDiv = document.createElement("div");
warntyDiv.id = "warntyBox";
let warntyDiv1 = document.createElement("div");
warntyDiv1.innerHTML = "Prices Starting at";
let warntyDiv2 = document.createElement("div");
warntyDiv2.innerHTML = "₹" + arr.price;
let warntyDiv3 = document.createElement("div");
let warntyDiv31 = document.createElement("div");
let warntyDiv311 = document.createElement("div");
let warntyDiv3110 = document.createElement("img")
warntyDiv3110.src = "../Icons/Delivery Icon.png";
warntyDiv311.appendChild(warntyDiv3110);
let warntyDiv312 = document.createElement("p");
warntyDiv312.innerHTML = "Guaranteed Delivery in 24 days T&C Apply";
warntyDiv31.appendChild(warntyDiv311);
warntyDiv31.appendChild(warntyDiv312);

let warntyDiv32 = document.createElement("div");
let warntyDiv321 = document.createElement("div");
let warntyDiv3210 = document.createElement("img")
warntyDiv3210.src = "../Icons/rupees icon.png";
warntyDiv321.appendChild(warntyDiv3210);
let warntyDiv322 = document.createElement("p");
warntyDiv322.innerHTML = "COD Available";
warntyDiv32.appendChild(warntyDiv321);
warntyDiv32.appendChild(warntyDiv322);

let warntyDiv33 = document.createElement("div");
let warntyDiv331 = document.createElement("div");
let warntyDiv3310 = document.createElement("img")
warntyDiv3310.src = "../Icons/10days.png";
warntyDiv331.appendChild(warntyDiv3310);
let warntyDiv332 = document.createElement("p");
warntyDiv332.innerHTML = "10 Days Replacement"
warntyDiv33.appendChild(warntyDiv331);
warntyDiv33.appendChild(warntyDiv332);

let warntyDiv34 = document.createElement("div");
let warntyDiv341 = document.createElement("div");
let warntyDiv3410 = document.createElement("img")
warntyDiv3410.src = "../Icons/security.png";
warntyDiv341.appendChild(warntyDiv3410);
let warntyDiv342 = document.createElement("p");
warntyDiv342.innerHTML = "6 months Warranty T&C Apply"
warntyDiv34.appendChild(warntyDiv341);
warntyDiv34.appendChild(warntyDiv342);

warntyDiv3.appendChild(warntyDiv31);
warntyDiv3.appendChild(warntyDiv32);
warntyDiv3.appendChild(warntyDiv33);
warntyDiv3.appendChild(warntyDiv34);

let warntyDiv4 = document.createElement("div");
let warntyDiv41 = document.createElement("span");
let warntyDiv42 = document.createElement("a");
warntyDiv41.innerHTML = "For B2B/Bulk pricing ";
warntyDiv42.innerHTML = "Click Here";
warntyDiv4.appendChild(warntyDiv41);
warntyDiv4.appendChild(warntyDiv42);


warntyDiv.appendChild(warntyDiv1);
warntyDiv.appendChild(warntyDiv2);
warntyDiv.appendChild(warntyDiv3);
warntyDiv.appendChild(warntyDiv4);


let divButt = document.createElement("div");
let anchor = document.createElement("a");
anchor.href = "../HTML/cartPage.html";
// anchor.target = "_blank"
let cartButt = document.createElement("button");
cartButt.innerHTML = "BUY NOW";

let addToButt = document.createElement("button")
addToButt.innerHTML = "ADD TO CART"


// cartButt.onclick = function () {

// };
if (localStorage.getItem('cartsum') == null) {
    localStorage.setItem('cartsum', JSON.stringify([]))
}
addToButt.onclick = function () {
    var cartArr = [];
    cartArr = JSON.parse(localStorage.getItem("addToCart"));
    cartArr.push(arr);
    localStorage.setItem("addToCart", JSON.stringify(cartArr));
    alert("Your item is added to cart.");
    cartButt.innerHTML = "GO TO CART"
    AddSum()
}
let cartsum = 0
function AddSum() {
    cartsum = 0;
    cartArr = JSON.parse(localStorage.getItem("addToCart"));
    for (let i = 0; i < cartArr.length; i++) {
        cartsum += parseInt(cartArr[i].price)
    }
    console.log(cartsum)

    localStorage.setItem("cartsum", JSON.stringify(cartsum));
}
AddSum();

div1div2.appendChild(nameBox);
div1div2.appendChild(warntyDiv);
anchor.appendChild(cartButt);
divButt.appendChild(addToButt)
divButt.appendChild(anchor);
div1div2.appendChild(divButt);

div1.appendChild(div1div1);
div1.appendChild(div1div2);

let div2 = document.createElement("div");
div2.id = "desBox";
let div2Des = document.createElement("div");
div2Des.innerHTML = "Product Description";
let div2DesContent = document.createElement("div");
div2DesContent.innerHTML = arr.des;
div2.appendChild(div2Des);
div2.appendChild(div2DesContent);

let div3 = document.createElement("div");
div3.id = "reviewBox";
let div3p1 = document.createElement("p");
div3p1.innerHTML = "Review & Rating";
let div3p2 = document.createElement("p");
div3p2.innerHTML = "There are no reviews on this product yet";
let div3Button = document.createElement("div");
let div3butt = document.createElement("button");
div3butt.innerHTML = "Rate Product";
div3Button.appendChild(div3butt);
let div3p3 = document.createElement("p");
div3p3.innerHTML = "Login?Signup for Review";
div3.appendChild(div3p1);
div3.appendChild(div3p2);
div3.appendChild(div3Button);
div3.appendChild(div3p3);

let div4 = document.createElement("div");
div4.id = "quesBox";
let div4ques = document.createElement("p");
div4ques.innerHTML = "Questions?";
let div4what = document.createElement("span");
div4what.innerHTML = "Contact us on";
let div4iconBox = document.createElement("span");
let div4icon = document.createElement("img");
div4icon.src = "../Icons/whatsapp.png";
let div4Link = document.createElement("a");
div4Link.href = "https://api.whatsapp.com/send?phone=917093427583";
div4Link.target = "_blank";

div4Link.appendChild(div4icon);
div4iconBox.appendChild(div4Link);
div4what.appendChild(div4iconBox);
div4.appendChild(div4ques);
div4.appendChild(div4what);

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);



var cartCount = document.getElementById("count")
function counts() {
    var a = JSON.parse(localStorage.getItem("addToCart"))

    cartCount.innerText = a.length
}
counts()