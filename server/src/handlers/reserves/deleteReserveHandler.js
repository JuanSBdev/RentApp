const deleteReserveController = require("../../controllers/reserves/deleteReserveController")

let deleteReserveHandler = async (req, res)=>{
    let {idReserve} = req.body
try {
  await  deleteReserveController(idReserve)
   res.status(200).json('reserve deleted')
} catch (error) {
    res.status(400).json('error deleting reserve')
    
}
}
module.exports = deleteReserveHandler;