const {Place} = require('../../db')
const { Op } = require('sequelize')
const getPlaceByLocationController = async (location)=>{
 const placeFound = await  Place.findAll({
    where:{
      location:
      {
         [Op.iLike]: `%${location}%`
      }
 },
}
 )
 return placeFound;
}
module.exports = getPlaceByLocationController;