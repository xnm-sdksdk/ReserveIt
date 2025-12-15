const mongoose = require('mongoose');

let dbConnection;

module.exports = {
    getDBConnection: async function () {
        if (!dbConnection) {
            const mongoUrl = process.env.USER_MONGO_URL;
            dbConnection = await mongoose.connect(mongoUrl, {
                maxPoolSize: 10,
            });
            console.log('User MongoDB connected');
        }
        return dbConnection;
    },

    closeConnection: async function () {
        if (dbConnection && dbConnection.readyState === 1) {
            await mongoose.connection.close();
            dbConnection = null;
        }
    },
};
