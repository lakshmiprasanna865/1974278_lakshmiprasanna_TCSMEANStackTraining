var products = [];
var price = [];
function add(x) {
    var mycartsize = document.getElementById('cart_size');
    mycartsize.value = String(Number(mycartsize.value) + 1);
    var myProductName = document.getElementById('name' + x);
    var myProductPrice = document.getElementById('price' + x);
    console.log(myProductName.value);
    products.push(myProductName.value);
    price.push(Number(myProductPrice.value));
    sessionStorage.setItem("s1", JSON.stringify(products));
    sessionStorage.setItem("s2", JSON.stringify(price));
    console.log(products);
    console.log(price);
}
function checkoutTable() {
    var myCheckoutTable = document.getElementById('checkoutTable');
    console.log("Hello");
    console.log(sessionStorage.getItem("s1"));
    var getProducts = JSON.parse(sessionStorage.getItem("s1"));
    var getPrice = JSON.parse(sessionStorage.getItem("s2"));
    console.log(getProducts[0]);
    console.log(getPrice[0]);
}
