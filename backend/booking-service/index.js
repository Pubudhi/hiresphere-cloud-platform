const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {
  DynamoDBClient
} = require("@aws-sdk/client-dynamodb");

const {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand
} = require("@aws-sdk/lib-dynamodb");

const app = express();

app.use(cors());
app.use(express.json());

const client = new DynamoDBClient({
  region: "ap-southeast-1"
});

const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "HireSphereBookings";

app.get("/health", (req, res) => {
  res.json({ status: "booking-service running" });
});

app.post("/bookings", async (req, res) => {
  try {
    const booking = {
      bookingId: Date.now().toString(),
      candidateName: req.body.candidateName,
      interviewerName: req.body.interviewerName,
      interviewType: req.body.interviewType,
      date: req.body.date,
      time: req.body.time,
      status: "CONFIRMED"
    };

    await docClient.send(
      new PutCommand({
        TableName: TABLE_NAME,
        Item: booking
      })
    );

    res.status(201).json(booking);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Failed to create booking"
    });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const data = await docClient.send(
      new ScanCommand({
        TableName: TABLE_NAME
      })
    );

    res.json(data.Items);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to fetch bookings"
    });
  }
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Booking service running on port ${PORT}`);
});