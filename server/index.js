const app = require('./src/app')
const port = 0
const server = app.listen(port, ()=>{
    console.log('listening on port '+ server.address().port)
})

