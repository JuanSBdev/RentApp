const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController")

const getPlaceByGuestsHandler = async (guests)=>{
    try {
        let result = getPlacesByGuestsController(guests)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({errorGuest: error.message})
    }
}
module.exports = getPlaceByGuestsHandler;