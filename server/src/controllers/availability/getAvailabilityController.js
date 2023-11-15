const { Op } = require('sequelize');
let {Place} = require('../../db')
let getAvailabilityController = async (placeId, dateInit, dateEnd, guests)=>{
    let result = await Place.findAll({
        where:{
            
            unavailable_dates:{
                [Op.overlap]:[dateInit, dateEnd]
            }
        }
    })
    return result
}
module.exports = getAvailabilityController;