module.exports = (req, res) =>{
    const {city, meters, price, street} = req.house;

    res.render('house', {city:` ${city}`, meters: `${meters}`, price: `${price}`, street:`${street}`});
};