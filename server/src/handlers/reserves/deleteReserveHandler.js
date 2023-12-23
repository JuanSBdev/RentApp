const deleteReserveController = require("../../controllers/reserves/deleteReserveController")
let {Reserve}= require('../../db')
let deleteReserveHandler = async (req, res)=>{
    let {idReserve} = req.body
try {
    
    let reserveFound = await Reserve.findOne({
        where:{
            id: idReserve
        }
    })


    if(!reserveFound){
        res.status(400).json('Reserve not found');
        return; 
    }

  await  deleteReserveController(idReserve)
   res.status(200).json('reserve deleted')
} catch (error) {
    res.status(400).json('error deleting reserve')
    
}
}
module.exports = deleteReserveHandler;