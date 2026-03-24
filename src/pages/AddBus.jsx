import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AddBus.css';

const AddBus = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        busName: '',
        busNumber: '',
        busType: '',
        totalSeats: '',
        startingLocation: '',
        destination: '',
        boardingPoints: '',
        departureTime: '',
        arrivalTime: '',
        ticketPrice: '',
        busImage: null,
        imagePreview: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'busImage') {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData({
                        ...formData,
                        busImage: file.name, // Store filename for reference
                        imagePreview: reader.result // Base64 string for preview
                    });
                };
                reader.readAsDataURL(file);
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.busName) newErrors.busName = 'Bus Name is required';
        if (!formData.busNumber) newErrors.busNumber = 'Bus Number is required';
        if (!formData.busType) newErrors.busType = 'Please select a bus type';
        if (!formData.totalSeats || formData.totalSeats <= 0) newErrors.totalSeats = 'Valid seat count is required';
        if (!formData.startingLocation) newErrors.startingLocation = 'Starting location is required';
        if (!formData.destination) newErrors.destination = 'Destination is required';
        if (!formData.boardingPoints) newErrors.boardingPoints = 'Boarding points are required';
        if (!formData.departureTime) newErrors.departureTime = 'Departure time is required';
        if (!formData.arrivalTime) newErrors.arrivalTime = 'Arrival time is required';
        if (!formData.ticketPrice || formData.ticketPrice <= 0) newErrors.ticketPrice = 'Valid ticket price is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Get existing buses from localStorage
            const existingBuses = JSON.parse(localStorage.getItem('buses') || '[]');

            // Add new bus with a unique ID
            const newBus = {
                ...formData,
                id: Date.now(),
            };

            const updatedBuses = [...existingBuses, newBus];

            // Save back to localStorage
            localStorage.setItem('buses', JSON.stringify(updatedBuses));

            console.log('Bus Data Saved:', newBus);
            alert('Bus Details Added Successfully!');

            // Redirect to Bus List page
            navigate('/buses');
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <div className="add-bus-container">
            <h2>Add New Bus Details</h2>
            <form className="bus-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="busName">Bus Name</label>
                    <input
                        type="text"
                        id="busName"
                        name="busName"
                        value={formData.busName}
                        onChange={handleChange}
                        placeholder="e.g. Express Travels"
                        className={errors.busName ? 'error' : ''}
                    />
                    {errors.busName && <span className="error-text">{errors.busName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="busNumber">Bus Number</label>
                    <input
                        type="text"
                        id="busNumber"
                        name="busNumber"
                        value={formData.busNumber}
                        onChange={handleChange}
                        placeholder="e.g. TN-01-AB-1234"
                        className={errors.busNumber ? 'error' : ''}
                    />
                    {errors.busNumber && <span className="error-text">{errors.busNumber}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="busType">Bus Type</label>
                    <select
                        id="busType"
                        name="busType"
                        value={formData.busType}
                        onChange={handleChange}
                        className={errors.busType ? 'error' : ''}
                    >
                        <option value="">Select Type</option>
                        <option value="AC">AC</option>
                        <option value="Non-AC">Non-AC</option>
                        <option value="Sleeper">Sleeper</option>
                        <option value="Seater">Seater</option>
                    </select>
                    {errors.busType && <span className="error-text">{errors.busType}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="totalSeats">Total Seats</label>
                    <input
                        type="number"
                        id="totalSeats"
                        name="totalSeats"
                        value={formData.totalSeats}
                        onChange={handleChange}
                        placeholder="e.g. 40"
                        className={errors.totalSeats ? 'error' : ''}
                    />
                    {errors.totalSeats && <span className="error-text">{errors.totalSeats}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="startingLocation">Starting Location</label>
                    <input
                        type="text"
                        id="startingLocation"
                        name="startingLocation"
                        value={formData.startingLocation}
                        onChange={handleChange}
                        placeholder="Source city"
                        className={errors.startingLocation ? 'error' : ''}
                    />
                    {errors.startingLocation && <span className="error-text">{errors.startingLocation}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="destination">Destination</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Destination city"
                        className={errors.destination ? 'error' : ''}
                    />
                    {errors.destination && <span className="error-text">{errors.destination}</span>}
                </div>

                <div className="form-group full-width">
                    <label htmlFor="boardingPoints">Boarding Points</label>
                    <input
                        type="text"
                        id="boardingPoints"
                        name="boardingPoints"
                        value={formData.boardingPoints}
                        onChange={handleChange}
                        placeholder="Point A, Point B, Point C"
                        className={errors.boardingPoints ? 'error' : ''}
                    />
                    {errors.boardingPoints && <span className="error-text">{errors.boardingPoints}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="departureTime">Departure Time</label>
                    <input
                        type="time"
                        id="departureTime"
                        name="departureTime"
                        value={formData.departureTime}
                        onChange={handleChange}
                        className={errors.departureTime ? 'error' : ''}
                    />
                    {errors.departureTime && <span className="error-text">{errors.departureTime}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="arrivalTime">Arrival Time</label>
                    <input
                        type="time"
                        id="arrivalTime"
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleChange}
                        className={errors.arrivalTime ? 'error' : ''}
                    />
                    {errors.arrivalTime && <span className="error-text">{errors.arrivalTime}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="ticketPrice">Ticket Price (₹)</label>
                    <input
                        type="number"
                        id="ticketPrice"
                        name="ticketPrice"
                        value={formData.ticketPrice}
                        onChange={handleChange}
                        placeholder="Price per seat"
                        className={errors.ticketPrice ? 'error' : ''}
                    />
                    {errors.ticketPrice && <span className="error-text">{errors.ticketPrice}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="busImage">Bus Image Upload</label>
                    <input
                        type="file"
                        id="busImage"
                        name="busImage"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-btn">Add Bus Details</button>
            </form>
        </div>
    );
};

export default AddBus;
