import { useEffect, useState } from "react";
import { bookingAPI } from "../services/api";

function History() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const response = await bookingAPI.get("/bookings");
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Interview History</h1>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <p>
            <strong>Candidate:</strong> {booking.candidateName}
          </p>

          <p>
            <strong>Interviewer:</strong> {booking.interviewerName}
          </p>

          <p>
            <strong>Interview Type:</strong> {booking.interviewType}
          </p>

          <p>
            <strong>Status:</strong> {booking.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default History;