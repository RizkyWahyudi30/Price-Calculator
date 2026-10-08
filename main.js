function calculateDiscount(price, discountPercent) {
  return price * discountPercent / 100;
}

function calculateTax(priceAfterDiscount, taxPercent) {
  return priceAfterDiscount * taxPercent / 100;
}

function calculateFinalPrice(price, discountPrice, taxPercent) {
  let priceDiscount = calculateDiscount(price, discountPrice);
  let priceAfterDiscount = price - priceDiscount;
  
  let priceTax = calculateTax(priceAfterDiscount, taxPercent);
  
  return priceAfterDiscount + priceTax;
}

function createPriceSummary(price, discountPercent, taxPercent) {
  let calculatePriceDiscount = calculateDiscount(price, discountPercent);
  let priceAfterDiscount = price - calculatePriceDiscount;
  let priceTax = calculateTax(priceAfterDiscount, taxPercent);
  
  let finalPrice = calculateFinalPrice(price, calculatePriceDiscount, taxPercent);
  
  let objPrice = {
    price: price,
    discount: calculatePriceDiscount,
    tax: priceTax,
    finalPrice: finalPrice
  }

  return objPrice;
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
