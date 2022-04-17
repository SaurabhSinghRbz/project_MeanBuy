var cartedProducts = JSON.parse(localStorage.getItem('addToCart')) || [];

function displayCart(cartedProducts){
    document.querySelector('.productsTable').innerHTML == '';
    
    cartedProducts.forEach(product => {
        var row = document.createElement('tr');

        var content = document.createElement('td');

        var pushData = document.createElement('div');
        pushData.class= 'product';
        pushData.style.hover='border: none;box-shadow: 2px 2px 4px rgba(0,0,0,0.2);transform: scale(1.01);'
        pushData.style='display: flex;width: auto;height: 200px;overflow: hidden;border: 1px solid silver;margin-bottom: 20px;border-radius:7px;'

            var image = document.createElement('img');
            image.src= product.image;
            image.style='padding: 3%;width: 300px;height: 200px;object-fit: cover;'
            image.hover='transform: scale(1.04);'


            var box = document.createElement('div');
            box.class = 'product-info';
            box.style='padding: 20px;width: 100%;position: relative;'

                var r1 = document.createElement('h3');
                r1.class = 'product-name';
                r1.innerText = product.title;
                r1.style='margin-bottom: 20px;'

                var r2 = document.createElement('h4');
                r2.class = 'product-price';
                r2.innerText = product.price;
                r2.style='margin-bottom: 20px;'

                var r3 = document.createElement('h4');
                r3.class = 'product-offer';
                r3.innerText = product.off;
                r3.style='margin-bottom: 20px;'

                var r4 = document.createElement('p');
                r4.class = 'product-quantity';
                r4.style='width: 40px;padding: 5px;text-align: center;'
                r4.innerText = 'QTY: ';

                    var ip = document.createElement('input');
                    ip.value = '1';
                    ip.style='width: 40px;padding: 5px;text-align: center;'
                    r4.append(ip);

                var r5 = document.createElement('button');
                r5.class = 'product-remove';
                r5.innerText = 'Remove';
                r5.style='position: absolute;bottom: 20px;right: 20px;padding: 10px 25px;background-color: green;color: white;cursor: pointer;border-radius: 5px'
                r5.style.hover='background-color: white;color: green;font-weight: 600;border: 1px solid green;'
                r5.onclick = 'removeFn()'

                box.append(r1,r2,r3,r4,r5);

            pushData.append(image,box);

            content.append(pushData)

        row.append(content);

        document.querySelector('.productsTable').append(row);
    });
}

function removeFn(){

}
window.addEventListener('load',function(){
    displayCart(cartedProducts);
});
