const getPlaceByNameController = require("../../controllers/getPlaces/getPlaceByNameController");

const getPlaceByNameHandler = async (req, res)=>{
    let { name } = req.params;

    try {
        const result = getPlaceByNameController()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = getPlaceByNameHandler;