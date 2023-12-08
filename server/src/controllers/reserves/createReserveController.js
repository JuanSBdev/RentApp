const { User, Reserve, Place } = require('../../db');
const getPrice = require('../../handlers/availability/getPrice');
const getDatesArray = require('./getDatesArray');
const createReserveController = async ( dateInit, dateEnd, userId, placeId )=>{
    // console.log(dateInit, dateEnd, userId + 'datos controller ')
    const userFound = await User.findByPk(userId)
    const placeFound = await Place.findByPk(placeId)

    const unavailableDates = placeFound.unavailable_dates || [];
   
    
const datesToCheck = getDatesArray( dateInit, dateEnd);

    if (datesToCheck.some(date => unavailableDates.includes(date))) {
        throw new Error('Las fechas seleccionadas están dentro del rango de fechas no disponibles.');
    }

    let total = await getPrice(placeFound, dateInit, dateEnd )
    
    let newReserve = await Reserve.create({dateInit, dateEnd, total})
    await newReserve.setUser(userFound);
    await newReserve.setPlace(placeFound);

    
     const datesToAdd = getDatesArray(dateInit, dateEnd);
     const updatedUnavailableDates = [...unavailableDates, ...datesToAdd];
 
     // Actualizar el modelo Place con las nuevas fechas no disponibles
     await placeFound.update({ unavailable_dates: updatedUnavailableDates })

    return newReserve;
}
module.exports = createReserveController;8