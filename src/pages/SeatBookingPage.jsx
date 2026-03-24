import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BusSeatBooking from '../components/BusSeatBooking';
import './SeatBookingPage.css';

const SeatBookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { bus } = location.state || {};

    // Local state for the bus to handle immediate UI updates
    const [currentBus, setCurrentBus] = useState(bus);

    if (!bus) {
        return (
            <div className="error-container">
                <h2>No bus selected!</h2>
                <button onClick={() => navigate('/buses')}>Go back to Buses</button>
            </div>
        );
    }

    const handleBookingUpdate = (newBookedSeats) => {
        // 1. Get all buses from localStorage
        const allBuses = JSON.parse(localStorage.getItem('buses') || '[]');

        // 2. Update the specific bus with new booked seats
        const updatedBuses = allBuses.map((b) => {
            if (b.id === bus.id) {
                const updatedBookedSeats = [...(b.bookedSeats || []), ...newBookedSeats];
                return { ...b, bookedSeats: updatedBookedSeats };
            }
            return b;
        });

        // 3. Save back to localStorage
        localStorage.setItem('buses', JSON.stringify(updatedBuses));

        // 4. Update local state
        const updatedBus = updatedBuses.find(b => b.id === bus.id);
        setCurrentBus(updatedBus);
        
        alert(`Booking confirmed for seats: ${newBookedSeats.join(', ')}`);
    };

    return (
        <div className="seat-booking-page">
            <div className="booking-header">
                <button className="back-btn" onClick={() => navigate('/buses')}>← Back to List</button>
                <div className="bus-info-card">
                    <h1>{currentBus.busName}</h1>
                    <div className="info-grid">
                        <p><strong>Bus Number:</strong> {currentBus.busNumber}</p>
                        <p><strong>Route:</strong> {currentBus.startingLocation} to {currentBus.destination}</p>
                        <p><strong>Time:</strong> {currentBus.departureTime} - {currentBus.arrivalTime}</p>
                        <p><strong>Price:</strong> ₹{currentBus.ticketPrice}</p>
                    </div>
                </div>
            </div>

            <BusSeatBooking 
                bus={currentBus} 
                onBookingUpdate={handleBookingUpdate} 
            />
        </div>
    );
};

export default SeatBookingPage;
