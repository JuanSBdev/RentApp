 const {Place} = require('../../db')
const getPlaceByIdController = async (id)=>{
    let placeFound = await Place.findByPk()
}
module.exports= getPlaceByIdController;
