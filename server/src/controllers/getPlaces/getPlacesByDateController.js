const {Place}= require('../../db')
const {Op} = require('sequelize')

const getPlacesByDateController = async (dateInit, dateFinish)=>{
    
    let overlap = await Place.findAll({
        where:{
            unavailable_dates:{
                [Op.overlap]:[dateInit, dateFinish]
            }
        }
    })
    let all = await Place.findAll()
    let notOverlap = all.filter(place => {
        return !overlap.some(o => o.id === place.id)
    })
    return notOverlap;

}
module.exports= getPlacesByDateController;