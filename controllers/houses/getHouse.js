module.exports = (req, res) =>{
    const neededHouse = req.house;
    const id = req.id;

    res.render('house', {city:` ${neededHouse.city}`, meters: `${neededHouse.meters}`, price: `${neededHouse.price}`, street:`${neededHouse.street}`, id:`${id}`});
};