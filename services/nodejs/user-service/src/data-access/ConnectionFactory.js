import mongoose from 'mongoose';

let dbConnection;

export async function getDBConnection() {
    if (!dbConnection) {
        const mongoUrl = process.env.USER_MONGO_URL;
        dbConnection = await mongoose.connect(mongoUrl, {
            maxPoolSize: 10,
        });
        console.log('User MongoDB connected');
    }
    return dbConnection;
}

export async function closeConnection() {
    if (dbConnection && dbConnection.readyState === 1) {
        await mongoose.connection.close();
        dbConnection = null;
    }
}
