
import { describe } from 'mocha';
import { it } from 'mocha';
import { expect } from 'chai';
import budaAPI from '../externalServices/budaAPI/index.js';
import e from 'express';
import compareMarketSpread from '../useCases/marketSpread/compare-market-spread.js';

describe('getMarketSpread', () => {
    it('should raise an error is marketId does not match', async () => {
        const budaApi = new budaAPI();
        const req = {
            body: { marketId: 'btc-eth', budaApi: budaApi }
        };
        try {
            await compareMarketSpread(req.body.marketId, req.body.budaApi);
        } catch (error) {
            expect(error).to.instanceOf(Error);
        }
    });
});
