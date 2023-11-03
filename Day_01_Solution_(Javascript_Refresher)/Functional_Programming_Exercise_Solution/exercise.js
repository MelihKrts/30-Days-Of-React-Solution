// Functional Programming Exercise Solution

// Exercise 1.1
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

products.forEach((item) => {
    const { product, price } = item;
    if (typeof price === "number" && !isNaN(price)) {
        console.log(`${product}: ${price}`);
    }
    else {
        console.log(`${product} : ----`)
    }
})

// Exercise 1.2

products.forEach((item) => {
    const { product, price } = item;
    if (typeof price === "number" && !isNaN(price)) {
        console.log(`The price of ${product} is ${price} euros.`)
    }
    else {
        console.log(`The price of ${product} is unknown`)
    }
})

// Exercise 1.3

let sum = 0;
products.forEach((total) => {
    const { price } = total;
    if (typeof price === "number" && !isNaN(price)) {
        sum += price;
    }
})
console.log(`${sum}`);

// Exercise 1.4

const productsMap = [

    { product: "banana", price: 5, },
    { product: "apple", price: 2 },
    { product: "avocado", price: 4 }
]
const prices = productsMap.map(product => product.price);
console.log(prices);

// Exercise 1.5

const priceFilter = products.filter(product => !isNaN(product.price) && product.price !== '');
console.log(priceFilter);

// Exercise 1.6

const totalPrice =
    products.filter(product => !isNaN(product.price) && product.price !== '')
products.map(product => parseFloat(product.price))
products.reduce((sum, price) => sum + price, 0);

console.log(totalPrice);

// Exercise 1.7

const totalReduce = products.reduce((sum, product) => {
    const price = parseFloat(product.price);
    return !isNaN(price) ? sum + price : sum;
}, 0)
console.log(totalReduce);

// Exercise 1.8

const find = products.find((product) => isNaN(parseFloat(product.price)) || product.price === '');
console.log(find);

// Exercise 1.9

const findIndex = products.findIndex((product) => isNaN(parseFloat(product.price)) || product.price === "");
console.log(findIndex)

// Exercise 1.10

const some = products.some((products) => isNaN(parseFloat(products.price)) || products.price);
console.log(some);

// Exercise 1.11

const every = products.every((products) => !isNaN(products.price) && products.price !== '');
console.log(every);

// Exercise 1.12


// forEach: only used in arrays takes parameter 
// map: Like forEach, it is only used in an array. The difference with forEach is that it takes no parameters.
// filter: performs filtering according to criteria. 
// reduce: returns a single value

// Exercise 1.13

// filter : performs filtering according to criteria. 
// find: Returns the first value of a given property. This is the difference between the map and filter functions.
// findIndex : Returns the first index value of a given property.

// Exercise 1.14

// some: Returns a bool value if one or more of the given properties is true or false.
// every: The difference between the every function and the some function is that every item must be satisfied. It can be compared to Some or Every and.