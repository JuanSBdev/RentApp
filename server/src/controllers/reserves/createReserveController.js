const { User, Reserve, Place } = require('../../db');
const {Op} = require('sequelize')
const getPrice = require('../../handlers/availability/getPrice');
const getDatesArray = require('./getDatesArray');
const createReserveController = async ( dateInit, dateEnd, userId, placeId )=>{
    // console.log(dateInit, dateEnd, userId + 'datos controller ')
    const userFound = await User.findByPk(userId)
    const placeFound = await Place.findByPk(placeId)
    const existingReservations = await Reserve.findAll({
        where: {
            placeId: placeId,
            [Op.or]: [
                {
                    dateInit: {
                        [Op.between]: [dateInit, dateEnd],
                    },
                },
                {
                    dateEnd: {
                        [Op.between]: [dateInit, dateEnd],
                    },
                },
            ],
        },
    });

    if (existingReservations.length > 0) {
        throw new Error('Ya existe una reserva para las fechas seleccionadas.');
    }

   
    const adjustedDateInit = new Date(`${dateInit}T12:00:00`);
    const adjustedDateEnd = new Date(`${dateEnd}T10:00:00`);
    

   
 
    let total = await getPrice(placeFound, dateInit, dateEnd );
    
    let newReserve = await Reserve.create({ dateInit: adjustedDateInit, dateEnd: adjustedDateEnd, total })
    await newReserve.setUser(userFound);
    await newReserve.setPlace(placeFound);

    
     const datesToAdd = getDatesArray(dateInit, dateEnd);
     const updatedUnavailableDates = [...unavailableDates, ...datesToAdd];
 
     // Actualizar el modelo Place con las nuevas fechas no disponibles
     await placeFound.update({ unavailable_dates: updatedUnavailableDates })

    return newReserve;
}
module.exports = createReserveController;8