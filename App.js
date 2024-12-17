import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        reason: '',
        provider: '',
    });

    const [inNetworkStatus, setInNetworkStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckInsurance = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/check-insurance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ providerName: formData.provider }),
            });

            const data = await response.json();
            setInNetworkStatus(data.inNetwork);
        } catch (error) {
            console.error('Error checking insurance:', error);
            setInNetworkStatus(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data.message); // Log the success message

            // Optionally, reset the form or show a success message to the user
            setFormData({
                name: '',
                date: '',
                time: '',
                reason: '',
                provider: '',
            });
            setInNetworkStatus(null);
            alert('Appointment booked successfully!'); // Or use a more sophisticated notification

        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Error booking appointment. Please try again.');
        }
    };

    return (
        <div className="App">
            <h1>Fay Appointment Booking</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="reason">Reason for Visit:</label>
                    <input
                        type="text"
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="provider">Insurance Provider:</label>
                    <select
                        id="provider"
                        name="provider"
                        value={formData.provider}
                        onChange={handleChange}
                        onBlur={handleCheckInsurance}
                        required
                    >
                        <option value="">Select Provider</option>
                        <option value="Aetna">Aetna</option>
                        <option value="Blue Cross">Blue Cross</option>
                        <option value="UnitedHealthcare">UnitedHealthcare</option>
                        <option value="Cigna">Cigna</option>
                    </select>
                    {inNetworkStatus !== null && (
                        <p>
                            Provider is {inNetworkStatus ? 'in-network' : 'out-of-network'}
                        </p>
                    )}
                </div>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}

export default App;