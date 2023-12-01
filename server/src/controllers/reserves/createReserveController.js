const { User, Reserve } = require('../../db');
const createReserveController = async ( dateInit, dateEnd, userId )=>{
    console.log(dateInit, dateEnd, userId + 'datos controller ')
    const userFound = await User.findByPk(userId)
    console.log(userFound + 'userfound')
    let newReserve = await Reserve.create({dateInit, dateEnd})
    
    await newReserve.setUser(userFound);

    return newReserve;
}
module.exports = createReserveController;