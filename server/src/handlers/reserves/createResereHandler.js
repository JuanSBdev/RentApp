const createReserveController = require("../../controllers/reserves/createReserveController");

const createReserveHandler = async (req, res)=>{
    let { dateInit, dateEnd } =req.body
    try {
        let result = await createReserveController()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}
module.exports= createReserveHandler;