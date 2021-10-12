let carts = document.querySelectorAll('.add-cart');


let products = [

    {
        name: "Boca 90 grama",
        tag: "4",
        price: 37,
        inCart: 0,
    },
    {
        name: "Boca 60 ml",
        tag: "5",
        price: 18,
        inCart: 0,
    },
    {
        name: "Boca 90 ml",
        tag: "6",
        price: 21,
        inCart: 0,
    },
    {
        name: "Boca 125 ml",
        tag: "7",
        price: 34,
        inCart: 0,
    },
    {
        name: "Boca 100 ml",
        tag: "8",
        price: 23,
        inCart: 0,
    },
    {
        name: "Boca 90 ml za aceton",
        tag: "9",
        price: 21,
        inCart: 0,
    },
    {
        name: "Boca 200 ml",
        tag: "11",
        price: 18,
        inCart: 0,
    },
    {
        name: "Kutija sa poklopcem 200ml ",
        tag: "12",
        price: 28,
        inCart: 0,
    },

];





let productsInCart = document.getElementById('products-in-cart')

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}
function onLoadInCart() {

    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {

        productsInCart.textContent = productNumbers;

    }


}


function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');



    productNumbers = parseInt(productNumbers);

    if (productNumbers) {


        localStorage.setItem('cartNumbers', productNumbers + 1)
        productsInCart.textContent = productNumbers + 1;

    }
    else {


        localStorage.setItem('cartNumbers', 1)
        productsInCart.textContent = 1;


    }


    setItem(product);
}


function setItem(product) {
    let cartItems = localStorage.getItem('itemInCart');


    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (
            cartItems[product.tag] == undefined




        ) {
            cartItems = {
                ...cartItems,
                [product.tag]: product



            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;


        cartItems = {
            [product.tag]: product
        }
    }









    localStorage.setItem('itemInCart', JSON.stringify(cartItems));


}






function totalCost(product) {


    let cartCost = localStorage.getItem('totalCost')

    if (cartCost != null) {


        cartCost = parseInt(cartCost);


        localStorage.setItem('totalCost', cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }





}

function displeyCart(){

let cartItems=localStorage.getItem('itemInCart');
cartItems=JSON.parse(cartItems);
let productContainer=document.getElementById('products')

let totalCost=localStorage.getItem('totalCost')
totalCost=parseInt(totalCost)
if( cartItems && productContainer){

    productContainer.innerHTML = '';

Object.values(cartItems).map(item=>{

    productContainer.innerHTML += 
    `<div class="product" data-producttag="${item.tag}"><ion-icon name="close-circle" class="delete"></ion-icon><img src="./images/${item.tag}.jpg" />
        <span class="sm-hide">${item.name}</span>
    </div>
    <div class="price sm-hide">$${item.price},00</div>
    <div class="quantity" data-producttag="${item.tag}">
        <ion-icon class="decrease "  name="arrow-dropleft-circle"></ion-icon>
            <span>${item.inCart}</span>
        <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
    </div>
    <div class="total">$${item.inCart * item.price},00</div>`;
});
productContainer.innerHTML += `
<div class="basketTotalContainer">
    <h4 class="basketTotalTitle">Basket Total</h4>
    <h4 class="basketTotal">$${totalCost},00</h4>
</div>`

}


deleteButtons();
decreaseProducts();
increaseProducts();

}






function decreaseProducts(){

let decrease=document.querySelectorAll('.quantity .decrease');
let cartItems=localStorage.getItem('itemInCart');
let productNumbers = localStorage.getItem('cartNumbers');

let cartCost = localStorage.getItem("totalCost");
cartItems=JSON.parse(cartItems);

for(i=0;i<decrease.length;i++){
    //let currentQuantity = decrease[i].parentElement.querySelector('span').textContent;
    let currentProduct=decrease[i].parentElement .dataset.producttag;


    decrease[i].addEventListener('click',()=>{
        if( cartItems[currentProduct].inCart > 1 ){
            cartItems[currentProduct].inCart-=1;
localStorage.setItem('cartNumbers', productNumbers -1);
onLoadInCart();

localStorage.setItem('totalCost', cartCost-cartItems[currentProduct].price );

localStorage.setItem('itemInCart', JSON.stringify(cartItems));


displeyCart();
            
        }

       
       })
}






}

function increaseProducts(){
    let decrease=document.querySelectorAll('.quantity .decrease');
    let increase=document.querySelectorAll('.increase');
    let cartItems=localStorage.getItem('itemInCart');
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers)
    

    
    let cartCost = localStorage.getItem("totalCost");
    cartCost=parseInt(cartCost)
    cartItems=JSON.parse(cartItems);

    for(i=0;i<increase.length;i++){


        let currentProduct=increase[i].previousElementSibling.parentElement.dataset.producttag;
    
       increase[i].addEventListener('click',()=>{
    
    cartItems[currentProduct].inCart+=1;
    localStorage.setItem('cartNumbers',( productNumbers + 1) );
    onLoadInCart();
    
    localStorage.setItem('totalCost', cartCost + cartItems[currentProduct].price );
    
    localStorage.setItem('itemInCart', JSON.stringify(cartItems));
    
    
    displeyCart();
           
           
           
           
           })
    }
}
        
        function deleteButtons() {
            let deleteButtons = document.querySelectorAll('.product ion-icon');
            let productNumbers = localStorage.getItem('cartNumbers');
            let cartCost = localStorage.getItem("totalCost");
            let cartItems = localStorage.getItem('itemInCart');
            cartItems = JSON.parse(cartItems);
            let productName;
        
            for(let i=0; i < deleteButtons.length; i++) {
                deleteButtons[i].addEventListener('click', () => {
                    productName = deleteButtons[i].parentElement.dataset.producttag;
                   
                    localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
                    localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));
        
                    delete cartItems[productName];
                    localStorage.setItem('itemInCart', JSON.stringify(cartItems));

                    
                    displeyCart();
                    onLoadInCart();
                })
            }
        }

        
onLoadInCart();
displeyCart();


