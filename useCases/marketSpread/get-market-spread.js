const findLowestAsk = require("./utils/find-lowest-ask.js");
const findHighestBid = require("./utils/find-highest-bid.js");

const getMarketSpread = async (marketId, budaApi) => {
    const market = await budaApi.getOrderBookByMarketId(marketId);

    if (!market) {
        throw new Error('Market ID does not exist');
    }
    const {asks, bids} = market;

    const lowestAsk = findLowestAsk(asks);
    const highestBid = findHighestBid(bids);

    const spread = lowestAsk - highestBid;

    return spread;
}

module.exports = async (marketId, budaApi) => {
    const spread = await getMarketSpread(marketId, budaApi);
    return spread;
}