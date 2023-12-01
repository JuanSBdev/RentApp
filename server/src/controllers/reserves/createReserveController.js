const { Order, User, Reserve } = require('../../db.js');
const createReserveController = async ( dateInit, dateEnd, userId )=>{
    const userFound = await User.findByPk(userId)
    let newReserve = await Reserve.create(dateInit, dateEnd)
}
module.exports = createReserveController;