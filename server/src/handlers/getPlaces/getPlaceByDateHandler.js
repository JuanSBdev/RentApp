const getPlacesByDateController = require("../../controllers/getPlaces/getPlacesByDateController");

const getPlaceByDateHandler = async (req, res)=>{
    let { dateInit } = req.query;
    try {
        let resultDate = await getPlacesByDateController(dateInit)
        res.status(200).json(resultDate)
    } catch (error) {
        res.status(400).json({errorDate: error.message})
    }
}
module.exports = getPlaceByDateHandler;