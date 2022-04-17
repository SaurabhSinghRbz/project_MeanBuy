var productData = [
    {
      image: "./Gamingimg/1.jpg",
      title: "Two-Seater PS4 Charging Base",
      rating: "4.2/5",
      price: "₹1,499",
      off: "UP TO 50% OFF",
    },
    {
      image: "./Gamingimg/2.jpg",
      title: "PS4 Slime Pro Charging Base",
      rating: "5.0/5",
      price: "₹2,999",
      off: "UP TO 40% OFF",
    },
    {
      image: "./Gamingimg/3.jpg",
      title: "Wired Joystick for PC",
      rating: "4.8/5",
      price: "₹1,499",
      off: "UP TO 40% OFF",
    },
    {
      image: "./Gamingimg/4.jpg",
      title: "Wireless Gaming Controller",
      rating: "4.6/5",
      price: "₹1,999",
      off: "UP TO 33% OFF",
    },
    {
      image: "./Gamingimg/5.jpg",
      title: "PG-9098 Wireless Joystick",
      rating: "4.9/5",
      price: "₹2,499",
      off: "UP TO 38% OFF",
    },
    {
      image: "./Gamingimg/6.jpg",
      title: "Wireless Joystick for Nintendo",
      rating: "4.3/5",
      price: "₹2,999",
      off: "UP TO 40% OFF",
    },
    {
      image: "./Gamingimg/7.jpg",
      title: "Wireless Gaming Joypad",
      rating: "4.7/5",
      price: "₹1,799",
      off: "UP TO 40% OFF",
    },
    {
      image: "./Gamingimg/8.jpg",
      title: "Six Finger Mobile Gamepad",
      rating: "4.8/5",
      price: "₹1,499",
      off: "UP TO 40% OFF",
    },
    {
      image: "./Gamingimg/9.jpg",
      title: "PS4 Wireless Vibration Joystick",
      rating: "5.0/5",
      price: "₹2,499",
      off: "UP TO 38% OFF",
    },
    {
      image: "./Gamingimg/10.jpg",
      title: "Wireless Gamepad for Xbox",
      rating: "4.6/5",
      price: "₹2,499",
      off: "UP TO 38% OFF",
    },
    {
      image: "./Gamingimg/11.jpg",
      title: "Multi Controller for PS4/PS3",
      rating: "4.7/5",
      price: "₹1,499",
      off: "UP TO 40% OFF",
    },
    {
      image: "./Gamingimg/12.jpg",
      title: "Switch Controller for Nintendo",
      rating: "4.9/5",
      price: "₹4,499",
      off: "UP TO 39% OFF",
    },
    {
      image: "./Gamingimg/13.jpg",
      title: "PUBG Mobile Gamepad Grip With Joystick Trigger",
      rating: "4.1/5",
      price: "₹899",
      off: "UP TO 33% OFF",
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
  
  