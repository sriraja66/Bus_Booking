import Booking from '../models/Booking.js';

// SAVE NEW BOOKING TO MONGODB
export const createBooking = async (req, res) => {
  try {
    const { userId, busId, selectedSeats, from, to } = req.body;

    const newBooking = new Booking({
      userId, // For now, this can be empty / placeholder from frontend
      busId,
      selectedSeats,
      from,
      to
    });

    const savedBooking = await newBooking.save();

    res.status(201).json({
      message: 'Booking successfully confirmed!',
      booking: savedBooking
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create booking', error: error.message });
  }
};
