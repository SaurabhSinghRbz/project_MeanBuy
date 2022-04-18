var productData = [
  {
    image: "../Watchesimg/1.jpg",
    title: "Mens Luxury Mechanical Watch",
    rating: "4.9/5",
    price: "₹8,999",
    off: "UP TO 40% OFF",
  },
  {
    image: "../Watchesimg/2.jpg",
    title: "Mens Quartz Wheel Watch",
    rating: "4.5/5",
    price: "₹7,499",
    off: "UP TO 50% OFF",
  },
  {
    image: "../Watchesimg/3.jpg",
    title: "Mens Waterproof Wheel Watch",
    rating: "3.6/5",
    price: "₹8,999",
    off: "UP TO 40% OFF",
  },
  {
    image: "../Watchesimg/4.jpg",
    title: "Mens Sport Car Wheel Watch",
    rating: "4.6/5",
    price: "₹6,999",
    off: "UP TO 46% OFF",
  },
  {
    image: "../Watchesimg/5.jpg",
    title: "Mens Waterproof Quartz Watch",
    rating: "4.3/5",
    price: "₹8,499",
    off: "UP TO 43% OFF",
  },
  {
    image: "../Watchesimg/6.jpg",
    title: "Mens Steering Wheel Watch",
    rating: "4.9/5",
    price: "₹9,999",
    off: "UP TO 41% OFF",
  },
  {
    image: "../Watchesimg/7.jpg",
    title: "Mens Steel Wheel Watch",
    rating: "4.0/5",
    price: "₹8,499",
    off: "UP TO 43% OFF",
  },
  {
    image: "../Watchesimg/8.jpg",
    title: "Mens Luminuos Quartz Watch",
    rating: "4.0/5",
    price: "₹8,999",
    off: "UP TO 50% OFF",
  },
  {
    image: "../Watchesimg/9.jpg",
    title: "Mens Stainless Steel Wristwatch",
    rating: "3.9/5",
    price: "₹4,499",
    off: "UP TO 36% OFF",
  },
  {
    image: "../Watchesimg/10.jpg",
    title: "Mens Analog-Digital Watch",
    rating: "4.6/5",
    price: "₹1,699",
    off: "UP TO 26% OFF",
  },
  {
    image: "../Watchesimg/11.jpg",
    title: "Mens Leather Water-Resistant Quartz Watch",
    rating: "3.9/5",
    price: "₹1,499",
    off: "UP TO 40% OFF",
  },
  {
    image: "../Watchesimg/12.jpg",
    title: "Mens Alloy Quartz Watch",
    rating: "4.6/5",
    price: "₹1,099",
    off: "UP TO 27% OFF",
  },
  {
    image: "../Watchesimg/13.jpg",
    title: "Silicone Steel Sports Watch",
    rating: "4.5/5",
    price: "₹1,999",
    off: "UP TO 33% OFF",
  },
  {
    image: "../Watchesimg/14.jpg",
    title: "Mens Luxury Steel Watch",
    rating: "4.8/5",
    price: "2,499₹",
    off: "UP TO 38% OFF",
  },
  {
    image: "../Watchesimg/15.jpg",
    title: "Quartz Leater Wrist Watch",
    rating: "4.7/5",
    price: "₹1,999",
    off: "UP TO 33% OFF",
  },
  {
    image: "../Watchesimg/16.jpg",
    title: "Mens Leather Quartz Watch",
    rating: "4.7/5",
    price: "₹1,699",
    off: "UP TO 26% OFF",
  },
  {
    image: "../Watchesimg/17.jpg",
    title: "Mens Buisness Wristwatch",
    rating: "4.8/5",
    price: "₹1,499",
    off: "UP TO 25% OFF",
  },
  {
    image: "../Watchesimg/18.jpg",
    title: "Mens Luxury Quartz Watch",
    rating: "4.8/5",
    price: "₹2,399",
    off: "UP TO 25% OFF",
  },
  {
    image: "../Watchesimg/19.jpg",
    title: "Mens Automatic Wrist Watch",
    rating: "4.8/5",
    price: "3,199₹",
    off: "UP TO 36% OFF",
  },
  {
    image: "../Watchesimg/20.jpg",
    title: "Classic Mechanical Watch",
    rating: "4.6/5",
    price: "2,399₹",
    off: "UP TO 25% OFF",
  },
  {
    image: "../Watchesimg/21.jpg",
    title: "Mens Mechanical Watch",
    rating: "4.5/5",
    price: "2,599₹",
    off: "UP TO 24% OFF",
  },
  {
    image: "../Watchesimg/22.jpg",
    title: "Sports LEather Wristwatch",
    rating: "4.5/5",
    price: "₹2,299",
    off: "UP TO 23% OFF",
  },
  {
    image: "../Watchesimg/23.jpg",
    title: "Ultra Thin Waterproof Watch",
    rating: "4.7/5",
    price: "₹1,999",
    off: "UP TO 26% OFF",
  },
  {
    image: "../Watchesimg/24.jpg",
    title: "Smart Wrist Band 4",
    rating: "4.4/5",
    price: "₹2,699",
    off: "UP TO 25% OFF",
  },
  {
    image: "../Watchesimg/25.jpg",
    title: "Fitness Smart Watch",
    rating: "4.5/5",
    price: "₹2,999",
    off: "UP TO 19% OFF",
  },
  {
    image: "../Watchesimg/26.jpg",
    title: "Dragon Sculpture Watch",
    rating: "4.6/5",
    price: "₹2,099",
    off: "UP TO 22% OFF",
  },
  {
    image: "../Watchesimg/27.jpg",
    title: "Buisness Casual Watch",
    rating: "4.7/5",
    price: "₹1,999",
    off: "UP TO 20% OFF",
  },
  {
    image: "../Watchesimg/28.jpg",
    title: "Automatic Mechanical Watch",
    rating: "4.8/5",
    price: "₹2,299",
    off: "UP TO 21% OFF",
  },

];

function displayAllProducts(product) {
  var allProductsDiv = document.getElementById("allProducts");
  // allProductsDiv.innerHTML = null;
  product.forEach(function (ele) {
    var mainDiv = document.createElement("div");
    mainDiv.id = "productLayout";
    let div1 = document.createElement("div");
    div1.id = "imageBox";
    let div1img = document.createElement("img");
    div1img.src = ele.image;
    div1.appendChild(div1img);

    let div2 = document.createElement("div");
    div2.id = "titleBox";
    let div2title = document.createElement("p");
    div2title.innerHTML = ele.title;
    div2.appendChild(div2title);
    let div2rating = document.createElement("div");
    div2rating.id = "ratingBox";
    let div2point = document.createElement("span");
    div2point.innerHTML = ele.rating;
    let div2star = document.createElement("span");
    div2star.className = "fa fa-star checked";
    // div2star.innerHTML = &ensp;
    div2rating.appendChild(div2point);
    div2rating.appendChild(div2star);
    div2.appendChild(div2rating);
    // div2.appendChild(div2star);

    let div3 = document.createElement("div");
    div3.id = "priceBox";
    let div3price = document.createElement("p");
    div3price.innerHTML = ele.price;
    let div3off = document.createElement("p");
    div3off.innerHTML = ele.off;
    div3.appendChild(div3price);
    div3.appendChild(div3off);

    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    mainDiv.appendChild(div3);
    allProductsDiv.appendChild(mainDiv);
  });
}
displayAllProducts(productData);
