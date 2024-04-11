const getMarketSpread = require('../../useCases/marketSpread/get-market-spread');
const budaAPI = require('../../externalServices/budaAPI/index');
const getAllMarketsSpread = require('../../useCases/marketSpread/get-all-markets-spread');
const upsertMarketSpread = require('../../useCases/marketSpread/upsert-market-spread');
const compareMarketSpread = require('../../useCases/marketSpread/compare-market-spread');

const router = require('express').Router();
const budaApi = new budaAPI();

router.get('/:marketId/spread', async (request, response) => {
    const marketId = request.params.marketId;
    const spread = await getMarketSpread(marketId, budaApi);

    response.status(200).json({
        'Market Spread' : spread
    });
});

router.get('/spread', async (request, response) => {
    const spreads = await getAllMarketsSpread(budaApi);

    response.status(200).json({
        'All Markets Spread' : spreads
    });
});

router.post('/:marketId/spread', async (request, response) => {
    const marketId = request.params.marketId;
    await upsertMarketSpread(marketId, budaApi);

    response.status(200).json({
        'Status' : 'File Updated'
    });
});

router.get('/:marketId/polling', async (request, response) => {
    const marketId = request.params.marketId;
    const areEqual = await compareMarketSpread(marketId, budaApi);

    if (!areEqual) {
        response.status(400).json({
            '[ALERT]' : 'Spread does not match'
        });
    }

    response.status(200);
});

module.exports = router;
