const { User, Reserve, Place } = require('../../db');
const getPrice = require('../../handlers/availability/getPrice');
const createReserveController = async ( dateInit, dateEnd, userId, placeId )=>{
    // console.log(dateInit, dateEnd, userId + 'datos controller ')
    const userFound = await User.findByPk(userId)
    const placeFound = await Place.findByPk(placeId)
    let total = await getPrice(placeFound, dateInit, dateEnd )
    
    let newReserve = await Reserve.create({dateInit, dateEnd, total})
    await newReserve.setUser(userFound);
    await newReserve.setPlace(placeFound);

    return newReserve;
}
module.exports = createReserveController;8