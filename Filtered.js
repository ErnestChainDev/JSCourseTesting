const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 699 },
    { name: 'Tablet', price: 499 },
    { name: 'Headphones', price: 199 },
    { name: 'Smartwatch', price: 299 },
    { name: 'Camera', price: 899 },
    { name: 'Speaker', price: 149 },
    { name: 'Monitor', price: 249 },
    { name: 'Keyboard', price: 79 },
    { name: 'Mouse', price: 49 }
];

function filteredProductsByPriceRange(products, minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}

const minPrice = 50; // Minimum price for filtering
const maxPrice = 1000; // Maximum price for filtering

const filteredProducts = filteredProductsByPriceRange(products, minPrice, maxPrice);

filteredProducts.forEach(product => {
    console.log(`Product: ${product.name} is of $${product.price}`);
});