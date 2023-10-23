const {Place} = require('../../db')
const {Op} = require ('sequelize')

 const getPlacesByGuestsController = async (guests) => {
    const placeFound = await Place.findAll({
        where:{
            max_occupancy_per_room:{
                [Op.gte]: guests
            }
        }
    });
    return placeFound;
}

module.exports = getPlacesByGuestsController;