import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import busRoutes from "./routes/busRoutes.js";


// read .env file
dotenv.config();


// create express app
const app = express();


// set port
const PORT = process.env.PORT || 5000;



// allow frontend requests
app.use(cors());


// allow JSON data
app.use(express.json());



// CONNECT DATABASE
async function connectDB() {

  try {

    const mongoURL = process.env.MONGO_URI || "mongodb://localhost:27017/bus_booking_db";

    await mongoose.connect(mongoURL);

    console.log("MongoDB connected");

  } catch (error) {

    console.log("Database connection error");

    process.exit();

  }

}



// ROUTES
app.use("/api/buses", busRoutes);



// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Bus Booking API running");
});



// START SERVER
connectDB().then(() => {

  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });

});