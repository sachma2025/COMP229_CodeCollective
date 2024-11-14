import express from 'express'
import config from './config/config.js' 
import app from './server/express.js'
import mongoose from 'mongoose'
import apartmentsRoutes from './server/routes/apartments.routes.js'
import usersRoutes from './server/routes/user.routes.js'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { 
    useNewUrlParser: true,
//useCreateIndex: true, 
useUnifiedTopology: true
 } )

.then(() => {
    console.log("Connected to the database!");
    })
    
mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database: ${config.mongoUri}`) 
})
app.get("/", (req, res) => {
    res.json(
        { 
            message: "Welcome to User application (server.js)", 
            note: "If you see this message, you may need to build your client to 'dist' folder by running command 'cd client', 'yarn build'" 
        }
    );
});
app.use('/apartments', apartmentsRoutes);
app.use('/users', usersRoutes);
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})