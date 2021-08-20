/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
  let maxProft = 0;
​
  for (const price of prices) {
    const currentProfit = price - minPrice;
    minPrice = Math.min(minPrice, price);
    maxProft = Math.max(maxProft, price - minPrice);
  }
​
  return maxProft;
};
