const getMarketSpread = require("./get-market-spread.js");
const findLowestAsk = require("./utils/find-lowest-ask.js");
const findHighestBid = require("./utils/find-highest-bid.js");

const getAllMarketsSpread = async (budaApi) => {
    const markets = await budaApi.getMarkets();
    const spreadPromises = markets.map( market => {
        return getMarketSpread(market.id, budaApi);
    });
    const spreads = await Promise.all(spreadPromises);

    return spreads;
}

module.exports = async (budaApi) => {
    const spreads = await getAllMarketsSpread(budaApi);
    return spreads;
}