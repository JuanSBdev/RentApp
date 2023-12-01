const {User, Reserve}= require('../../db')
let getUser =  async (req, res) => {
    let { id } = req.params
    try {
        const user = await User.findByPk(id, {
            include: Reserve,
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({errorUser: error.message})
    }
};

module.exports = getUser;