 const {Place} = require('../../db')
const getPlaceByIdController = async (id)=>{
    let placeFound = await Place.findByPk(id)
    
    return placeFound;
}
module.exports= getPlaceByIdController;
