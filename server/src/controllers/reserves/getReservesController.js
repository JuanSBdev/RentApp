let { Reserve } = require ('../../db')
const {Op} = require('sequelize')
let getReservesController = async (userId)=>{
    let reserveFound = await Reserve.findAll({
        where:{
            userId: userId
        } 
    })
    return reserveFound
}
module.exports = getReservesController;