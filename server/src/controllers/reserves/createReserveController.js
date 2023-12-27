const { User, Reserve, Place } = require('../../db');
const {Op} = require('sequelize')
const getPrice = require('../../handlers/availability/getPrice');
const getDatesArray = require('./getDatesArray');
const createReserveController = async ( dateInit, dateEnd, userId, placeId )=>{

    const adjustedDateInit = new Date(`${dateInit}T12:00:00`);
    const adjustedDateEnd = new Date(`${dateEnd}T10:00:00`);

     const userFound = await User.findByPk(userId)
     if (!userFound) {
        throw new Error('User not found.');
    }
console.log(dateInit)
    const placeFound = await Place.findByPk(placeId)
    const existingReservations = await Reserve.findAll({
        where: {
            placeId: placeId,
            [Op.or]: [
                {
                    dateInit: {
                        [Op.lt]: adjustedDateEnd,
                    },
                    dateEnd: {
                        [Op.gt]: adjustedDateInit,
                    },
                },
            ],
        },
        
    });
    if (existingReservations.length > 0 || dateInit === dateEnd) {
        throw new Error('Ya existe una reserva para las fechas seleccionadas.');
    }

 

   
    let total = await getPrice(placeFound, dateInit, dateEnd );
    
    let newReserve = await Reserve.create(
        { dateInit: adjustedDateInit,
          dateEnd: adjustedDateEnd,
          total })
    await newReserve.setUser(userFound);
    await newReserve.setPlace(placeFound);

 
    return newReserve;
}
module.exports = createReserveController;