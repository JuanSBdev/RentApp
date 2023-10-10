const getPlaceByIdController = require('../../controllers/getPlaces/getPLaceByIdController')
const getPLaceByIdHandler = async (req, res)=>{
    let { id } = req.params
 try {
    let result = getPlaceByIdController(id)
    res.status(200).json(result)
 } catch (error) {
    res.status(400).json({ error: error.message });
 }
}

module.exports= getPLaceByIdHandler;