import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>HireSphere</h1>

      <input placeholder="Email" />
      <br /><br />

      <input placeholder="Password" type="password" />
      <br /><br />

      <button onClick={() => navigate("/dashboard")}>
        Login
      </button>
    </div>
  );
}

export default Login;