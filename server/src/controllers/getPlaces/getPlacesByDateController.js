const {Place}= require('../../db')
const {Op} = require('sequelize')

const getPlacesByDateController = async (dateInit, dateFinish)=>{
    let result = await Place.findAll({
        where:{
            unavailable_dates:{
                [Op.overlap]:[dateInit, dateFinish]
            }
        }
    })
    return result;
}
module.exports= getPlacesByDateController