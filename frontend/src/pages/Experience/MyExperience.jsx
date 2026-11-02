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
        "• Developing a B2B jewellery commerce platform using Java, Spring Boot, Spring Data JPA, and PostgreSQL, implementing scalable backend services, RESTful APIs, and business workflows.",
        "• Building responsive, component-based frontend applications using Next.js, integrating frontend components with backend APIs.",
        "• Applying distributed systems principles, CAP theorem concepts, and high-availability architecture patterns to improve system reliability, scalability, and throughput.",
        "• Integrating Agentic AI capabilities to automate business workflows and enhance application functionality.",
        "• Optimizing PostgreSQL database performance through indexing, table partitioning, and query optimization to reduce latency and improve scalability.",
        "• Implementing automated testing using Playwright and supporting Jenkins-based CI/CD workflows to improve application quality and deployment efficiency.",
        "• Managing Gradle builds, dependency resolution, and application troubleshooting, including debugging",
        "Hibernate/JPA issues, analyzing logs, and resolving API integration errors. "
    ],
  },
  {
    title: "🏢 HANSA Solutions",
    duration: "Associate System Developer",
    color: "#16a34a",
    description:
      "Developing and maintaining enterprise applications while working closely with clients. Responsible for feature development, production support, deployments, debugging, and delivering business solutions using Microsoft technologies.",
    highlights: [
        "• Progressed from Intern to Associate, demonstrating technical ownership, strong team collaboration.",
        "• Developed end-to-end business workflows and RESTful APIs using Core Java, Spring Boot, OOP,Hibernate.",
         "• Provided L2 Production Support (January–June 2026), resolving critical application issues through",
        "debugging, troubleshooting, root cause analysis, and performance optimization.",
        "• Developed components across multiple projects and implemented stored procedures, triggers functions, and optimized SQL queries using SQL Server (SSMS) and Oracle (PL/SQL).",
        "• Built responsive frontend using HTML, CSS, Typescript, and Angular, ensuring seamless integration with backend services.",
        "• Deployed and maintained applications on AWS EC2, leveraging Docker and Kubernetes for containerization, orchestration, and deployment troubleshooting.",
        "• Collaborate with engineering teams to deliver secure and scalable enterprise solutions.",
        "• Integrated Redis caching and CDN solutions to enhance application performance, content delivery.",
        "• Managed Gradle builds, Git workflows, and CI/CD pipelines, Jenkins following DevOps best practices.",
        "• Applied distributed systems and cloud-native architecture principles, leveraging AI-assisted development tools such as Microsoft Copilot and ChatGPT for research, debugging, and productivity."
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
      "FullStack Fundamentals",
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