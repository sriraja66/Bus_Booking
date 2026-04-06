import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../BusList.css';

const BusList = () => {
    const [buses, setBuses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedBuses = JSON.parse(localStorage.getItem('buses') || '[]');
        setBuses(storedBuses);
    }, []);

    return (
        <div className="bus-list-container">
            <div className="list-header">
                <h2>Available Buses</h2>
                <button className="add-new-btn" onClick={() => navigate('/add-bus')}>
                    + Add New Bus
                </button>
            </div>

            {buses.length === 0 ? (
                <div className="no-buses">
                    <p>No buses added yet.</p>
                    <button onClick={() => navigate('/add-bus')}>Start by adding a bus</button>
                </div>
            ) : (
                <div className="bus-grid">
                    {buses.map((bus) => (
                        <div key={bus.id} className="bus-card">
                            <div className="bus-image-container">
                                {bus.imagePreview ? (
                                    <img src={bus.imagePreview} alt={bus.busName} />
                                ) : (
                                    <div className="no-image">No Image</div>
                                )}
                                <span className="bus-type-badge">{bus.busType}</span>
                            </div>

                            <div className="bus-details">
                                <div className="bus-header">
                                    <h3>{bus.busName}</h3>
                                    <span className="bus-number">{bus.busNumber}</span>
                                </div>

                                <div className="route-info">
                                    <div className="location">
                                        <span className="dot source"></span>
                                        <strong>{bus.startingLocation}</strong>
                                        <span className="time">{bus.departureTime}</span>
                                    </div>
                                    <div className="location">
                                        <span className="dot destination"></span>
                                        <strong>{bus.destination}</strong>
                                        <span className="time">{bus.arrivalTime}</span>
                                    </div>
                                </div>

                                <div className="extra-info">
                                    <span>💺 {bus.totalSeats} Seats</span>
                                    <span className="price">₹{bus.ticketPrice}</span>
                                </div>

                                <div className="boarding">
                                    <strong>Boarding:</strong> {bus.boardingPoints}
                                </div>

                                <button 
                                    className="book-btn"
                                    onClick={() => navigate('/seat-booking', { state: { bus } })}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BusList;
