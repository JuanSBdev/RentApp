const getPlaceByLocationController = require("../../controllers/getPlaces/getPlaceByLocationController");
const getPlacesByDateController = require("../../controllers/getPlaces/getPlacesByDateController");
const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController");

 let getPlaceForm = async  (req, res)=>{
    let { location, dateInit, dateFinish, guests } = req.params
    try {
        let resultLocation = await getPlaceByLocationController(location)
        let resultDate = await getPlacesByDateController(dateInit, dateFinish)
        let resultGuests = await getPlacesByGuestsController(guests)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = getPlaceForm;