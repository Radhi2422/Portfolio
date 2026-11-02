import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import { Navigate } from "react-router-dom";

export function Dashboard1() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Hero Section */}
      <div className="hero">
        <h1>Hi, I'm Radhika Mittal 👋</h1>

        <h2>
          System Developer | Full Stack Developer | Backend Development
        </h2>

        <p>
          Passionate about solving real-world problems using Data Structures,
          Algorithms, Development and scalable backend systems.
        </p>
      </div>


      {/* Technical Skills */}
      {/* ```jsx */}
{/* Technical Skills */}
<section className="technical-skills">

  <h2>Technical Skills</h2>

  <div className="skills-container">

    <div className="skill-group">
      <span className="skill-title">Languages</span>
      <div className="tags">
        <span>Java</span>
        <span>Python</span>
      </div>
    </div>

    {/* <div className="skill-group">
      <span className="skill-title">Data Engineering</span>
      <div className="tags">
        <span>ETL</span>
        <span>Data Pipelines</span>
        <span>Spark</span>
        <span>PySpark</span>
      </div>
    </div> */}

    <div className="skill-group">
      <span className="skill-title">Big Data & Streaming</span>
      <div className="tags">
        <span>Kafka</span>
        <span>KafkaJS</span>
        <span>Spark</span>
        <span>Real-time Processing</span>
      </div>
    </div>
    <div className="skill-group">
      <span className="skill-title">Frontend Development</span>
      <div className="tags">
        <span>React.js</span>
        <span>Javascript</span>
        <span>Tailwind CSS</span>
        <span>Redux</span>
      </div>
    </div>
    <div className="skill-group">
      <span className="skill-title">Cloud & DevOps</span>
      <div className="tags">
        <span>AWS</span>
        <span>Docker</span>
        <span>CI/CD</span>
        <span>Linux</span>
      </div>
    </div>

    {/* <div className="skill-group">
      <span className="skill-title"></span>
      <div className="tags">
        <span>LLMs</span>
        <span>GenAI</span>
        <span>Prompt Engineering</span>
        <span>AI APIs</span>
      </div>
    </div> */}

    <div className="skill-group">
      <span className="skill-title">DSA</span>
      <div className="tags">
        <span>Dynamic Programming (DP)</span>
        <span>MongoDB</span>
        <span>PostgreSQL</span>
        <span>Redis</span>
      </div>
    </div>

    <div className="skill-group">
      <span className="skill-title">Networking</span>
      <div className="tags">
        {/* <span>ASP.NET Core</span> */}
        <span>DNS</span>
        <span>TCP/IP</span>
        <span>HTTP</span>
        <span>Load Balancers</span>
      </div>
    </div>

    {/* <div className="skill-group">
      <span className="skill-title">JavaScript</span>
      <div className="tags">
      
      </div>
    </div> */}

  </div>

</section>
{/* ``` */}



      {/* Projects / Experience / Contact */}
      <div className="skills-grid">

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
          onClick={() => navigate("/contact")}
        >
          <h2>📬 Contact</h2>

          <p>
            Resume, GitHub, LinkedIn, Email and YouTube.
          </p>
        </div>

      </div>

    </div>
  );
}
