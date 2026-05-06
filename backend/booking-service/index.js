const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const bookings = [];

app.get("/health", (req, res) => {
  res.json({ status: "booking-service running" });
});

app.post("/bookings", (req, res) => {
  const booking = {
    id: Date.now().toString(),
    candidateName: req.body.candidateName,
    interviewerName: req.body.interviewerName,
    date: req.body.date,
    status: "CONFIRMED"
  };

  bookings.push(booking);

  res.status(201).json(booking);
});

app.get("/bookings", (req, res) => {
  res.json(bookings);
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Booking service running on port ${PORT}`);
});