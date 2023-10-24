const {Place}= require('../../db')
const {Op} = require('sequelize')

const getPlacesByDateController = (guests)=>{
    let result = Place.findAll({
        where:{
            unavailable_dates:{
                [Op.overlap]:[initDate, finishDate]
            }
        }
    })
    return result;
}
module.exports= getPlacesByDateController