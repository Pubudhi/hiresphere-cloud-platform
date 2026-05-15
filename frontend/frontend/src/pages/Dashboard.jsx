import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>HireSphere Dashboard</h1>

      <br />

      <button onClick={() => navigate("/bookings")}>
        Book Interview
      </button>

      <br /><br />

      <button onClick={() => navigate("/submissions")}>
        Submit Coding Challenge
      </button>

      <br /><br />

      <button onClick={() => navigate("/history")}>
        View Interview History
      </button>
    </div>
  );
}

export default Dashboard;