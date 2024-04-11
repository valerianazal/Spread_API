const upsertSpreadFile = require('../../externalServices/dataStorage/upsert.js');
const getMarketSpread = require('./get-market-spread');

const upsertMarketSpread = async (marketId, budaApi) => {
    const spread = await getMarketSpread(marketId, budaApi);
    const content = JSON.stringify({marketId, spread});
    upsertSpreadFile(content);
}

module.exports = async (marketId, budaApi) => {
    await upsertMarketSpread(marketId, budaApi);
}