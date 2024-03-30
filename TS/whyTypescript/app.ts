
const reversedText = (text:string) =>{
    return text.split('').reverse().join('')
}

console.log(
    reversedText("Ebubekir")
)


interface Product {
    id:number,
    name: string,
    price: number
}

function getProduct(id:number): Product {
    return{
        id,
        name:'Product #' + id,
        price:172
    }
}

function showProductInfo(name:string, price: number) {
    return `Product = ${name} Price = ${price}`
}

const product = getProduct(1)

console.log(
    showProductInfo(product.name, product.price)
)
