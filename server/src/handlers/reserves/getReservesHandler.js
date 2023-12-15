const axios = require('axios')
const getReservesController = require('../../controllers/reserves/getReservesController')
let getReservesHandler = async (req, res)=>{
    let {userId} = req.params    
    try {
        let result = await getReservesController(userId)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({errorDate: error.message})
    }
}
module.exports = getReservesHandler;