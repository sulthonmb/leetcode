/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = null;
    let indexBuy = null;
    let sell = 0;
    let profit = 0

    for (let i=0; prices.length>i; i++) {
        if (buy == null || buy > prices[i]) {
            indexBuy = i
            buy = prices[i]
        }

        if (prices[i] >= buy && indexBuy < i) {
            indexSell = i
            sell = prices[i]

            if (sell-buy > profit) {
                profit = sell-buy
            }
        }
    }

    return profit
};