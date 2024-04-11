class BudaAPI {
  constructor() {
    this.url = 'https://www.buda.com/api/v2';
  }

  async getMarkets() {
    const response = await fetch(`${this.url}/markets`);
    const data = await response.json();
    return data.markets;
  }

  async getOrderBookByMarketId(marketId) {

    const response = await fetch(`${this.url}/markets/${marketId}/order_book`);
    const data = await response.json();
    return data.order_book;
  }
}

module.exports = BudaAPI;