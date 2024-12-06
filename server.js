import express from 'express';
import config from './config/config.js';
import app from './server/express.js';
import mongoose from 'mongoose';
import apartmentsRoutes from './server/routes/apartments.routes.js';
import userRoutes from './server/routes/user.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, { 
    //useNewUrlParser: true,
    //useCreateIndex: true, 
    //useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database!");
})
.catch((err) => {
    console.error("Failed to connect to database:", err.message);
});

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

app.use('/api/apartments', apartmentsRoutes);

app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to User application." });
});

app.listen(config.port, (err) => { 
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', config.port);
});
