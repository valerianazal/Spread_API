const getMarketSpread = require('../../useCases/marketSpread/get-market-spread');

const router = require('express').Router();

router.get('/:marketId/spread', async (request, response) => {
    const marketId = request.params.marketId;
    const spread = await getMarketSpread(marketId);

    response.status(200).json({
        'Market Spread' : spread
    });
});

module.exports = router;
