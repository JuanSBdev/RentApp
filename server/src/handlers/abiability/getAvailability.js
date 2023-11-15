let getPlacesByDateController = require("../../controllers/getPlaces/getPlacesByDateController")
const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController")
const getPlaceByIdController = require("../../controllers/getPlaces/getPlaceByIdController")

let getAvailability = async (req, res)=>{
    let {id, dateInit, dateFinish, guests, location} = req.body
    try {
        let resultDate = getPlacesByDateController(dateInit, dateFinish)
        let resultGuests = getPlacesByGuestsController(location, guests)
        let resultId = getPlaceByIdController(id)
    } catch (error) {
        res.status(400).json(error)
    }
}