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
          Developer | Javascript | Data Handling | DSA Enthusiast
        </h2>

        <p>
          Passionate about solving real-world problems using Data Structures,
          Algorithms, Development and scalable backend systems.
        </p>
        <p>Implementing: ES6+, Asynchronous JavaScript, Promises, Async/Await, Closures, Event Loop, Callbacks, Higher-Order Functions, Prototypes & Objects, `this` Context, Array Methods, Destructuring, Spread/Rest Operators, Modules, Error Handling, JSON, Fetch API, DOM Manipulation, Event Handling, Debouncing & Throttling</p>
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
        <span>JavaScript</span>
        <span>Python</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="skill-group">
      <span className="skill-title">Data Engineering</span>
      <div className="tags">
        <span>ETL</span>
        <span>Data Pipelines</span>
        <span>Spark</span>
        <span>PySpark</span>
      </div>
    </div>

    <div className="skill-group">
      <span className="skill-title">Big Data & Streaming</span>
      <div className="tags">
        <span>Kafka</span>
        <span>KafkaJS</span>
        <span>Spark</span>
        <span>Real-time Processing</span>
      </div>
    </div>
    {/* ```jsx */}
{/* <div className="skill-group">
  <span className="skill-title">Frontend Engineering</span>
  <div className="tags">
    <span>React</span>
    <span>HTML5</span>
    <span>CSS3</span>
    <span>Redux</span>
    <span>Angular</span>
    <span>Responsive Design</span>
  </div>
</div> */}
{/* ``` */}


    <div className="skill-group">
      <span className="skill-title">Cloud & DevOps</span>
      <div className="tags">
        <span>Azure</span>
        <span>Docker</span>
        <span>CI/CD</span>
        <span>Azure DevOps</span>
      </div>
    </div>

    <div className="skill-group">
      <span className="skill-title">AI / GenAI</span>
      <div className="tags">
        <span>LLMs</span>
        <span>GenAI</span>
        <span>Prompt Engineering</span>
        <span>AI APIs</span>
      </div>
    </div>

    <div className="skill-group">
      <span className="skill-title">Databases</span>
      <div className="tags">
        <span>SQL Server</span>
        <span>MongoDB</span>
        <span>PostgreSQL</span>
        <span>Redis</span>
      </div>
    </div>

    <div className="skill-group">
      <span className="skill-title">Backend & APIs</span>
      <div className="tags">
        {/* <span>ASP.NET Core</span> */}
        <span>Node.js</span>
        <span>Express</span>
        <span>REST APIs</span>
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
