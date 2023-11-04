const {User} = require ('../../db')
const createUserController = async (mail, isAdmin) => {
    let newUserData = {
       mail,
       isAdmin 
    }
   let newUser = await User.findOrCreate(
    {where:{mail: mail},
    defaults: newUserData}
   );
   return newUser;
}

module.exports = createUserController;