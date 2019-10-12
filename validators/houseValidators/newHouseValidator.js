module.exports = houseObject => {
    const { city, meters, price, street } = houseObject;

    if (!city || !meters || !price || !street) {
        throw new Error('Not all the fields was correctly fulfilled');
    }
};