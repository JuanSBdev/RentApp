const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController")

const getPlaceByGuestsHandler = async (guests)=>{
    try {
        getPlacesByGuestsController()
    } catch (error) {
        res.status(400).json({errorGuest: error.message})
    }
}