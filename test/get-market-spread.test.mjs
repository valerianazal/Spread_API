
import { describe } from 'mocha';
import { it } from 'mocha';
import { expect } from 'chai';
import getMarketSpread from '../useCases/marketSpread/get-market-spread.js';
import budaAPI from '../externalServices/budaAPI/index.js';
import e from 'express';

describe('getMarketSpread', () => {
    it('should show market spread', async () => {
        const budaApi = new budaAPI();
        const req = {
            body: { marketId: 'btc-clp', budaApi: budaApi }
    };

    const spread = await getMarketSpread(req.body.marketId, req.body.budaApi);

    expect(spread).to.be.a('number' || null);
    });

    it('should raise an error if marketId does not exist', async () => {
        const budaApi = new budaAPI();
        const req = {
            body: { marketId: '', budaApi: budaApi }
        };

    try {
        await getMarketSpread(req.body.marketId, req.body.budaApi);
    } catch (error) {
        expect(error).to.instanceOf(Error);
    }
    });
});
