let {Reserve} = require ('../../db')
let deleteReserveController = async  (idReserve)=>{
    await Reserve.destroy({
        where:{
            id: idReserve
        }
    })
}
module.exports = deleteReserveController;