const findLowestAsk = require("./utils/find-lowest-ask.js");
const findHighestBid = require("./utils/find-highest-bid.js");
const getMarketSpread = require("./get-market-spread.js");
const getSpreadFile = require("../../externalServices/dataStorage/get.js");

const compareMarketSpread = async (marketId, budaApi) => {
    const spread = await getMarketSpread(marketId, budaApi);
    const spreadFileContent = await getSpreadFile();

    const savedMarketId = spreadFileContent.marketId;

    if (marketId !== savedMarketId) {
        throw new Error('Market ID does not match the saved Market ID');
    }

    const savedSpread = spreadFileContent.spread;

    return spread === savedSpread
}

module.exports = async (marketId, budaApi) => {
    const comparison = await compareMarketSpread(marketId, budaApi);
    return comparison;
}