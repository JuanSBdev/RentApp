const {Router} = require('express');
const createUserHandler = require('../handlers/Users/createUserHandler');

const userRouter = Router();

userRouter.post('/', createUserHandler)

module.exports = userRouter;