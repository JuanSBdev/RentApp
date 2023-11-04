const createUserController = require('../../controllers/Users/createUserController')
const createUserHandler = async (req, res) => {
    const {mail, isAdmin} = req.body
    try {
        let result = createUserController(mail, isAdmin)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = createUserHandler;