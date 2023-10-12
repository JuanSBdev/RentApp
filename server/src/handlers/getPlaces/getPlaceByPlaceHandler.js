const getPlaceByPlaceController = require("../../controllers/getPlaces/getPlaceByNameController");

const getPlaceByPlaceHandler = async (req, res)=>{
    let { location } = req.params;

    try {
        const result = await getPlaceByPlaceController(location)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = getPlaceByPlaceHandler;