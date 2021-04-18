
const DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017`;

const mongoose = require('mongoose');

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});


    const connectDB = async () => {
        if(!mongoose.connection.readyState)
            await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        return mongoose;
    };

    module.exports = connectDB;
