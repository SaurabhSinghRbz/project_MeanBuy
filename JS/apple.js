var productData = [
    {
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTQ0XC9TaWx2ZXJfbl8xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      title: "Pitaka Magnetic Charger",
      rating: "3.6/5",
      price: "₹4,699",
      off: "UP TO 33% OFF",
      category: "CURREN",
    },
    {
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTQ1XC9XaGl0ZV9uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Pitaka Qi Magnetic Charger",
      rating: "3.5/5",
      price: "₹4,699",
      off: "UP TO 33% OFF",
      category:"BOBOBIRD",
    },
    {
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTQ2XC9CbGFja19uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Pitaka Portable Charger",
      rating: "4.1/5",
      price: "₹5,399",
      off: "UP TO 33% OFF",
      category:"BOBOBIRD",
    },
    {
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTQ3XC9CbGFja19uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Pitaka 6-in-1 Charger",
      rating: "5.0/5",
      price: "₹13,999",
      off: "UP TO 39% OFF",
      category:"PD",
    },
    {
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTQ4XC9HcmF5X25fMV8xLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      title: "Pitaka Wireless Charger",
      rating: "4.9/5",
      price: "₹4,399",
      off: "UP TO 40% OFF",
      category:"MB",
    },
    {
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTQ5XC9CbGFja19uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Pitaka 2-in-1 Charger",
      rating: "4.0/5",
      price: "₹13,999",
      off: "UP TO 39% OFF",
      category: "CURREN",
    },
    {
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTUwXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Wireless Dock Charger",
      rating: "3.6/5",
      price: "₹12,799",
      off: "UP TO 36% OFF",
      category:"BOBOBIRD",
    }
    
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
  
  function BOBO()
     {
        let filter =  productdata.filter((prod)=>{
             return prod.category === "BOBOBIRD"
         })
         updatedom(filter)
     }
     function CURR()
     {
        let filter =  productdata.filter((prod)=>{
             return prod.category === "CURREN"
         })
         updatedom(filter)
     }
     
     var count = document.getElementById("count")
     updatecount(JSON.parse(localStorage.getItem("addto")))
   function updatecount(a)
    {
        count.textContent = a.length
    }