import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import busRoutes from './routes/busRoutes.js';
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;




app.use(cors());

app.use(express.json()); 



const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    
    process.exit(1);
  }
};





app.use('/api/buses', busRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);


app.get('/', (req, res) => {
  res.send('Bus Booking Backend API is running! ');
});


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});