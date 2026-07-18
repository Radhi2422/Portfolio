import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import { Navigate } from "react-router-dom";

export function Dashboard1() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>
   <h1>Dashboard</h1>;
  
  </>
}


export default function Dashboard() {
  const navigate=useNavigate();
  return (
  <div className="dashboard">

    <div className="hero">

      <h1>Hi, I'm Radhika Mittal 👋</h1>

      <h2>Software Developer | MERN | .NET | DSA Enthusiast</h2>

      <p>
        Passionate about solving real-world problems using Data Structures,
        Algorithms, Full Stack Development and scalable backend systems.
      </p>

    </div>

    <div className="skills-grid">

      <div
        className="skill-card"
        onClick={() => navigate("/dsa")}
      >
        <h2>🧩 DSA</h2>

        <p>
          LeetCode Solutions, Graphs, Trees, DP, Heaps,
          System Design Questions and Coding Notes.
        </p>
      </div>

      <div
        className="skill-card"
        onClick={() => navigate("/my-projects")}
      >
        <h2>🚀 My Projects</h2>

        <p>
          Projects I have built in my journey
        </p>
      </div>

      <div
        className="skill-card"
        onClick={() => navigate("/my-experiences")}
      >
        <h2>🏢 Professional Experience</h2>

        <p>
          Journey till now
        </p>
      </div>

      <div
        className="skill-card"
        onClick={() => navigate("/projects")}
      >
        <h2>💻 Featured Projects</h2>

        <p>
          Banking Analytics, GitHub Bot,
          Kafka Projects, Inventory System,
          Docker Deployments and more.
        </p>
      </div>

      <div
        className="skill-card"
        onClick={() => navigate("/blogs")}
      >
        <h2>📝 Technical Blogs</h2>

        <p>
          Articles on JavaScript,
          MERN, DSA, System Design
          and Interview Preparation.
        </p>
      </div>

      <div
        className="skill-card"
        onClick={() => navigate("/contact")}
      >
        <h2>📬 Contact</h2>

        <p>
          Resume, GitHub,
          LinkedIn,
          Email and YouTube.
        </p>
      </div>

    </div>

  </div>
);
}