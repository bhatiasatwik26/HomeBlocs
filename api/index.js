import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

//connection to DB
mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log('Database connected successfully!\n--------------------------------');
    })
    .catch((err)=>{
        console.log(err);
    })

//initialising the app
const app = express();
app.use(express.json());
app.listen(3000, ()=>{
    console.log('Listening on 3000...');
});

//mounting the routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

//error handler middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        sucess:false,
        statusCode,
        message
    })
})
