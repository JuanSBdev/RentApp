const {Place} = require('../../db')
const getPlaceByNameController = async (name)=>{
 const placeFound = Place.findAll({
    where:{
    name: name
 },
}
 )
}
module.exports = getPlaceByNameController;