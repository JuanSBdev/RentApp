const createReserveController = require("../../controllers/reserves/createReserveController");

const createReserveHandler = async (req, res)=>{
    let { dateInit, dateEnd, userId, placeId } =req.body
    try {
        const result = await createReserveController(dateInit, dateEnd, userId, placeId)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}
module.exports= createReserveHandler;