var reversedText = function (text) {
    return text.split('').reverse().join('');
};
console.log(reversedText("Ebubekir"));
function getProduct(id) {
    return {
        id: id,
        name: 'Product #' + id,
        price: 172
    };
}
function showProductInfo(name, price) {
    return "Product = ".concat(name, " Price = ").concat(price);
}
var product = getProduct(1);
console.log(showProductInfo(product.name, product.price));
