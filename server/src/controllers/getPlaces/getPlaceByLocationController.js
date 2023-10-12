const {Place} = require('../../db')
const getPlaceByLocationController = async (location)=>{
 const placeFound = Place.findAll({
    where:{
    location: location
 },
}
 )
}
module.exports = getPlaceByLocationController;