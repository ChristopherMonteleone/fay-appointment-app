const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // You can change this to a different port if needed

// Enable CORS for all origins (for development)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// In-memory "database" of insurance providers (replace with a real database later)
const insuranceProviders = [
    { name: 'Aetna', inNetwork: true },
    { name: 'Blue Cross', inNetwork: true },
    { name: 'UnitedHealthcare', inNetwork: false },
    { name: 'Cigna', inNetwork: false },
];

// API endpoint to check insurance provider
app.post('/api/check-insurance', (req, res) => {
    const { providerName } = req.body;
    const provider = insuranceProviders.find((p) => p.name === providerName);

    if (provider) {
        res.json({ inNetwork: provider.inNetwork });
    } else {
        res.status(404).json({ error: 'Provider not found' });
    }
});

// API endpoint to handle appointment booking (basic for now)
app.post('/api/book-appointment', (req, res) => {
  const appointmentDetails = req.body;
  console.log('Appointment details received:', appointmentDetails);
  // In a real app, you would save this to a database
  res.json({ message: 'Appointment booked successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});