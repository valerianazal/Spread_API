const findLowestAsk = (asks) => {
    let lowestAsk;
    asks.forEach(ask => {
        if (ask[0] < lowestAsk || !lowestAsk) {
            lowestAsk = ask[0];
        }
    });
    return lowestAsk;
}

module.exports = findLowestAsk;

