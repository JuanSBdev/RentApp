const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController")

const getPlaceByGuestsHandler = async (req, res)=>{
    let {location,  guests } = req.params;
    
    try {
        let result = await getPlacesByGuestsController(location, guests)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({errorGuest: error.message})
    }
}
module.exports = getPlaceByGuestsHandler;