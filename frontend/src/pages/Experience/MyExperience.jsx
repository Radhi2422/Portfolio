import React from "react";
import "./MyExperience.css";
const experiences = [
  {
    title: "🚀 Currently Building",
    duration: "Present",
    color: "#9333ea",
    description:
      "Continuously expanding my technical expertise by building production-ready applications, solving Data Structures & Algorithms problems, and exploring modern software architecture.",
    highlights: [
      "Personal Developer Portfolio",
      "GitHub Automation Bots",
      "Kafka Real-Time Projects",
      "Docker & CI/CD Pipelines",
      "Advanced MERN Applications",
      "System Design Practice",
      "YouTube Technical Content",
      "Interview Preparation",
    ],
  },
  {
    title: "🏢 HANSA Solutions",
    duration: "Associate System Developer",
    color: "#16a34a",
    description:
      "Developing and maintaining enterprise applications while working closely with clients. Responsible for feature development, production support, deployments, debugging, and delivering business solutions using Microsoft technologies.",
    highlights: [
      "C# & ASP.NET Development",
      ".NET Core & Web API",
      "SQL Server",
      "Production Support",
      "Client Communication",
      "Bug Fixing & Enhancements",
      "UAT & Production Deployments",
      "Cross-team Collaboration",
    ],
  },
  {
    title: "💻 Freelance Development",
    duration: "Freelancer",
    color: "#2563eb",
    description:
      "Worked on custom web applications for clients, transforming business requirements into practical software solutions while improving communication and project management skills.",
    highlights: [
      "Full Stack Web Development",
      "Requirement Analysis",
      "Responsive UI Design",
      "Backend API Development",
      "Database Design",
      "Client Delivery",
    ],
  },
  {
    title: "🎓 College Projects",
    duration: "Learning Foundation",
    color: "#f97316",
    description:
      "Built academic and personal projects that established my programming fundamentals and sparked my interest in software engineering.",
    highlights: [
      "Core Java",
      "C# Fundamentals",
      "JavaScript",
      "Data Structures & Algorithms",
      "Database Management",
      "Team Projects",
      "Problem Solving",
      "Software Engineering Fundamentals",
    ],
  },
];

const MyExperience = () => {
  return (
    <div className="experience-page">

      <div className="experience-header">
        <h1>My Journey</h1>

        <p>
          Every project and experience has contributed to my growth as a
          Software Developer. Here's my journey so far.
        </p>
      </div>

      <div className="timeline">

        {experiences.map((item, index) => (
          <div className="timeline-card" key={index}>

            <div
              className="timeline-dot"
              style={{ background: item.color }}
            ></div>

            <div className="timeline-content">

              <h2>{item.title}</h2>

              <span>{item.duration}</span>

              <p>{item.description}</p>

              <ul>
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default MyExperience;