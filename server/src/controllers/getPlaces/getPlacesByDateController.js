const {Place}= require('../../db')
const {Op} = require('sequelize')

const getPlacesByDateController = async (dateInit, dateFinish)=>{
    
    // const excludedDates = [dateInit, dateFinish];
    let result = await Place.findAll({
        where:{
            unavailable_dates:{
                [Op.includes]: dateInit
            }
        }
    })
    return result.map(res=>res.name);
}
module.exports= getPlacesByDateController;