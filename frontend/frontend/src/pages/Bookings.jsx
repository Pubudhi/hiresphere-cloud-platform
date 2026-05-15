import { useState } from "react";
import { bookingAPI } from "../services/api";

function Bookings() {
  const [candidateName, setCandidateName] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [message, setMessage] = useState("");

  const createBooking = async () => {
    try {
      await bookingAPI.post("/bookings", {
        candidateName,
        interviewerName,
        interviewType: "System Design",
        date: "2026-05-20",
        time: "18:00"
      });

      setMessage("Booking created successfully");
    } catch (error) {
      setMessage("Booking failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Book Interview</h1>

      <input
        placeholder="Candidate Name"
        value={candidateName}
        onChange={(e) => setCandidateName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Interviewer Name"
        value={interviewerName}
        onChange={(e) => setInterviewerName(e.target.value)}
      />

      <br /><br />

      <button onClick={createBooking}>
        Create Booking
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Bookings;