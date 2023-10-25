const {Place}= require('../../db')
const {Op} = require('sequelize')

const getPlacesByDateController = async (dateInit, dateFinish)=>{
    
    // const excludedDates = [dateInit, dateFinish];
    let result = await Place.findAll({
        where:{
            unavailable_dates:{
                [Op.contains]:[dateInit, dateFinish]
            }
        }
    })
    return result;
}
module.exports= getPlacesByDateController;