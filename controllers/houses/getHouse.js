module.exports = (req, res) =>{
    const {city, meters, price, street, house_id} = req.house;

    res.render('house', {city:` ${city}`, meters: `${meters}`, price: `${price}`, street:`${street}`, id:`${house_id}`});
};