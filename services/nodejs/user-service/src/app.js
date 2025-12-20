const express = require("express");
const { getDBConnection } = require("./data-access/ConnectionFactory");
const app = express();
const PORT = 3002;

getDBConnection().catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
});

app.get('/health', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.status(200).send('OK');
    } else {
        res.status(500).send('MongoDB not connected');
    }
});


app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));