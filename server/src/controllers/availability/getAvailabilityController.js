const { Op } = require('sequelize');
let {Place} = require('../../db')
let getAvailabilityController = async (placeId, dateInit, dateEnd, guests)=>{
    let result = await Place.findAll({
        where:{
            id: placeId,
            number_of_rooms: {
                [Op.gt]: 1
            },
            max_occupancy_per_room:{
                [Op.gte]: Number(guests)
            },
            [Op.not]:{
                unavailable_dates:{
                    [Op.overlap]:[dateInit, dateEnd]
                }

            }
        }
    })
    console.log(dateInit, dateEnd)
    return result
}
module.exports = getAvailabilityController;