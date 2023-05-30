const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log('Conectaste a la red musical')
    } catch {
        console.log('no se pudo conectar')
        
    }
}


module.exports = {connect}

