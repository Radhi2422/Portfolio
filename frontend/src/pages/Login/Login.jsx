import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../services/authService";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const userLoggedIn = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        userId,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", userId);

        if (response.data.role === "User") {
          navigate("/userdashboard", { replace: true });
        } else if (response.data.role === "Coder") {
          navigate("/codedashboard", { replace: true });
        } else {
          navigate("/dashboard", { replace: true });
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">

     

<div className="login-left">

    <div className="logo">
        {"</>"}
    </div>

    <h1>Radhika Mittal</h1>

    <p>
        Welcome to my personal developer portal. Explore my projects,
        practice coding challenges, and discover my journey as a
        Software Engineer passionate about Data Structures, Algorithms,
        Full Stack Development, and System Design.
    </p>

    <div className="feature-list">

        <div>🚀 DSA Practice & Coding Challenges</div>

        <div>💼 Full Stack Development Projects</div>

        <div>⚙️ System Design & Architecture</div>

        <div>📚 Technical Blogs & Learning Notes</div>

        <div>🏆 Coding Achievements & Certifications</div>

        <div>📈 Progress Tracking & Analytics</div>

    </div>

</div>





      <div className="login-right">

        <div className="login-card">

          <h2>Sign In</h2>

          <p>Continue to your account</p>

          <form onSubmit={userLoggedIn}>

            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <button type="submit">
              Login
            </button>

          </form>

          <div className="register-section">

            <span>Don't have an account?</span>

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;