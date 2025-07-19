
import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

const app = express(); //initialize express app
await connectDB(); //conected database

app.use(cors()); //middelware
app.use(express.json());

app.get('/', (req, res) => res.send("Server is Running...!"));
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is runing on PORT :: ${PORT}`)
})