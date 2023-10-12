const {Place} = require('../../db')
const getPlaceByLocationController = async (location)=>{
 const placeFound = Place.findAll({
    where:{
    location: location
 },
}
 )
 
 return placeFound;
}
module.exports = getPlaceByLocationController;