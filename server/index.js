const {conn }= require('./src/db')
const app = require('./src/app')
const port = 63076
const getPlaces = require('./src/handlers/getPlaces/getPlaces')



conn.sync({force: true})
.then(
    ()=>{
        getPlaces()

        const server = app.listen(port, ()=>{
            console.log('listening on port '+ server.address().port)
        })
    }
)

