const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
var count = document.getElementById("count")
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

     var slide = document.getElementById("slider")
    var btn1 = document.getElementById("btn1")
    var btn2 = document.getElementById("btn2")
    var btn3 = document.getElementById("btn3")
    btn1.onclick = function(){
       slide.style.transform= "translateX(0vw)";
        btn1.classList.add("active");
        btn2.classList.remove("active")
        btn3.classList.remove("active")
    }
    btn2.onclick = function(){
        slide.style.transform= "translateX(-97vw)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")

    }
    btn3.onclick = function(){
        slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active")
        btn1.classList.remove("active")
    }
  
             
           var i =0 
            
             function slider()
             {
                 
                    if(i == 0 ){
                        slide.style.transform= "translateX(0vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
                 setTimeout('slider()',5000);

                 }
                 else if(i==1){
                    slide.style.transform= "translateX(-97vw)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")
                    i++
                 setTimeout('slider()',5000);
                 }
                 else if(i==2){
                    slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                    setTimeout('slider()',5000);
                    

                 }
                 
                
               
                
           }
           function left()
           {
            if(i == 1 ){
                        slide.style.transform= "translateX(-97vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
               

                 }
                 
                 else if(i==0){
                    slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                  
                   
                    

                 }
                 else if(i==2){
                    slide.style.transform= "translateX(0vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                
                    

                 }
           }
           function right()
           {
          
            if(i == 0 ){
                        slide.style.transform= "translateX(0vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
               

                 }
                  else if(i==1){
                    slide.style.transform= "translateX(-97vw)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")
                    i++
              
                 }
                 else if(i==2){
                    slide.style.transform= "translateX(-194vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                    setTimeout('right()',4000);
                   
                    

                 }
           
           }
        
           var proimg = document.querySelectorAll(".product-thumb")
           var protitle = document.querySelectorAll(".product-short-description")
           var proprice = document.querySelectorAll(".price")
            if(localStorage.getItem("addToCart") == null)
            {
                localStorage.setItem("addToCart",JSON.stringify([]))
            }
           console.log(proimg.length)
           function addto(n)
           {
               console.log(proimg[n].src)
               console.log(protitle[n].innerHTML)
               console.log(proprice[n].innerHTML)
               var tem = {
                   image: proimg[n].src,
                   title:protitle[n].innerHTML,
                   price:proprice[n].innerHTML,
               }
             
               var prodInfo = []
               prodInfo = JSON.parse(localStorage.getItem("addToCart"))
              prodInfo.push(tem)
              console.log(tem)
              localStorage.setItem("addToCart",JSON.stringify(prodInfo))
              counts()
           }
           function counts()
           {
               var a = JSON.parse(localStorage.getItem("addToCart"))

               count.innerHTML = a.length
           }
           counts()
       
      