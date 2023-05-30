const app = require('./app')
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`el server está funcionando en el puerto: ${port}`)
})