const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;