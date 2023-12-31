const {Place} = require('../../db')
const {Op} = require ('sequelize')

 const getPlacesByGuestsController = async (location, guests ) => {
     const placeFound = await Place.findAll({
         where:{
            location:
            {
               [Op.iLike]: `%${location}%`
            },
             max_occupancy_per_room:{
                 [Op.gte]: Number(guests)
                }
            }
        });
    return placeFound;
}

module.exports = getPlacesByGuestsController;