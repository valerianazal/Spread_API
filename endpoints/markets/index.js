const getMarketSpread = require('../../useCases/marketSpread/get-market-spread');
const budaAPI = require('../../externalServices/budaAPI/index');

const router = require('express').Router();
const budaApi = new budaAPI();

router.get('/:marketId/spread', async (request, response) => {
    const marketId = request.params.marketId;
    const spread = await getMarketSpread(marketId, budaApi);

    response.status(200).json({
        'Market Spread' : spread
    });
});

module.exports = router;