const {Place}= require('../../db')
const {Op} = require('sequelize')

const getPlacesByDateController = async (guests)=>{
    let result = await Place.findAll({
        where:{
            unavailable_dates:{
                [Op.overlap]:[initDate, finishDate]
            }
        }
    })
    return result;
}
module.exports= getPlacesByDateController