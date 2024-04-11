const findHighestBid = (bids) => {
    let highestBid;
    bids.forEach(bid => {
        if (bid[0] > highestBid || !highestBid) {
            highestBid = bid[0];
        }
    });
    return highestBid;
}

module.exports = findHighestBid;
