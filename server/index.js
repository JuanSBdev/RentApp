const {conn }= require('./src/db')
const app = require('./src/app')
const port = 0

conn.sync({force: true})
.then(
    ()=>{

        const server = app.listen(port, ()=>{
            console.log('listening on port '+ server.address().port)
        })
    }
)

