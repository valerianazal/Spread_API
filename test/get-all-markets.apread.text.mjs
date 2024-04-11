
import { describe } from 'mocha';
import { it } from 'mocha';
import { expect } from 'chai';
import getMarketSpread from '../useCases/marketSpread/get-market-spread.js';
import budaAPI from '../externalServices/budaAPI/index.js';
import e from 'express';
import getAllMarketsSpread from '../useCases/marketSpread/get-all-markets-spread.js';

describe('getAllMarketsSpread', () => {
    it('should show all markets spread array', async () => {
        const budaApi = new budaAPI();
        const req = {
            body: { budaApi: budaApi }
    };

    const spread = await getAllMarketsSpread(req.body.budaApi);

    expect(spread).to.be.a('array');
    });
});
