const router = require('express').Router();
const marketEndpoint = require('../endpoints/markets');

router.use('/markets', marketEndpoint);

router.get('/', (request, response) => {
    response.status(200).json({
        message: 'Welcome to the Spread API'
    });
});

module.exports = router;