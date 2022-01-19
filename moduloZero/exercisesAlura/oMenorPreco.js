const { products } = require('./products.json');

// Encontrar o produto com o menor preço

const lowerPrice = () => {
  const lowerProductPrice = products.reduce((lowerPrice, currentPrice) => {
    if (Number(currentPrice.price) < Number(lowerPrice.price)) {
      return currentPrice;
    }
    return lowerPrice;
  });
  console.log(`O produto: ${lowerProductPrice.name} é o que possui menor preço: ${lowerProductPrice.price}.`);
  return {
    productName: lowerProductPrice.name,
    productPrice: lowerProductPrice.price,
  }
}
console.log(lowerPrice());