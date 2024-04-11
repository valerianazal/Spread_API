const BudaAPI = require("../../externalServices/budaAPI/index.js");
const findLowestAsk = require("./utils/find-lowest-ask.js");
const findHighestBid = require("./utils/find-highest-bid.js");

const getMarketSpread = async (marketId) => {
    const budaAPI = new BudaAPI();
    const market = await budaAPI.getOrderBookByMarketId(marketId);
    const {asks, bids} = market;

    const lowestAsk = findLowestAsk(asks);
    const highestBid = findHighestBid(bids);

    const spread = highestBid - lowestAsk;

    return spread;
}

module.exports = async (marketId) => {
    const spread = await getMarketSpread(marketId);
    return spread;
}