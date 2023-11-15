let getPlacesByDateController = require("../../controllers/getPlaces/getPlacesByDateController")
const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController")
const getPlaceByIdController = require("../../controllers/getPlaces/getPlaceByIdController")
const getAvailabilityController = require("../../controllers/availability/getAvailabilityController")

let getAvailabilityHandler = async (req, res)=>{
    let {id, dateInit, dateEnd, guests, location} = req.body
    try {
      
        let result = await getAvailabilityController(id, dateInit, dateEnd, guests)
        if( result.length === 0){

            res.status(200).json("No tiene disponibilidad para estas fechas o esta cantidad de personas")
        }
        else{

            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = getAvailabilityHandler;