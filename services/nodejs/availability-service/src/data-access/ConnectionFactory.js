import mongoose from 'mongoose';

let dbConnection;

export async function getDBConnection() {
    if (!dbConnection) {
        const mongoUrl = process.env.AVAILABILITY_MONGO_URL;
        dbConnection = await mongoose.connect(mongoUrl, {
            maxPoolSize: 10,
        });
        console.log('Availability MongoDB connected');
    }
    return dbConnection;
}

export async function closeConnection() {
    if (dbConnection && dbConnection.readyState === 1) {
        await mongoose.connection.close();
        dbConnection = null;
    }
}
