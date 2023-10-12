const getPlaceByLocationController = require("../../controllers/getPlaces/getPlaceByLocationController");

const getPlaceByLocationHandler = async (req, res)=>{
    let { location } = req.params;

    try {
        const result = await getPlaceByLocationController(location)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = getPlaceByLocationHandler;