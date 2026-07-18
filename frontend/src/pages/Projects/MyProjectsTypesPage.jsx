import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyProjectsTypesPage.css";

const projectCategories = [
  {
    title: ".NET / C#",
    icon: "💼",
    description:
      "Enterprise applications built using C#, ASP.NET Core, MVC, Web API, SQL Server and Azure.",
    route: "/projects/dotnet",
    color: "#512BD4",
  },
  {
    title: "MERN Stack",
    icon: "⚛️",
    description:
      "Full Stack applications using MongoDB, Express.js, React.js and Node.js.",
    route: "/projects/mern",
    color: "#00A86B",
  },
  {
    title: "Data Structures & Algorithms",
    icon: "🧩",
    description:
      "Interview questions, algorithm implementations and real-world DSA projects.",
    route: "/projects/dsa",
    color: "#16A34A",
  },
  {
    title: "Java",
    icon: "☕",
    description:
      "Core Java, Spring Boot, Multithreading, Collections and backend development projects.",
    route: "/projects/java",
    color: "#EA580C",
  },
];

const MyProjectsTypesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-page">

      <div className="projects-header">
        <h1>My Projects</h1>

        <p>
          A collection of projects showcasing my experience across multiple
          technologies, ranging from enterprise software to full stack web
          applications and algorithmic problem solving.
        </p>
      </div>

      <div className="projects-grid">
        {projectCategories.map((project) => (
          <div
            key={project.title}
            className="project-card"
            onClick={() => navigate(project.route)}
            style={{
              borderTop: `6px solid ${project.color}`,
            }}
          >
            <div className="project-icon">{project.icon}</div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <button>Explore Projects →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjectsTypesPage;