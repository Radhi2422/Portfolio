import React from "react";
import { useNavigate } from "react-router-dom";
import "./MyProjectsTypesPage.css";

// React integration0
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../../redux/project/projectSlice";

const projectCategories = [
 
   {
    title: "React + Nodejs + MongoDB",
    icon: "⚛️",
    description:
      "Full Stack applications",
    route: "/projects/mern",
    color: "#00A86B",
  },  
   {
    title: "Next.js",
    icon: "▲",
    description: "Modern Full Stack Applications",
    route: "/projects/nextjs",
    color: "#000000"
  },
  {
    title: "NestJS",
    icon: "🐈",
    description: "Scalable Server-Side Applications",
    route: "/projects/nestjs",
    color: "#E0234E"
  },
   {
    title: "Javascript",
    icon: "🟨",
    description:
      "ES6+, DOM, Node.js, Express.js, asynchronous programming, and full-stack JavaScript projects.",
    route: "/projects/javascript",
    color: "#F7DF1E",
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
  title: "C++",
  icon: "⚙️",
  description:
    "Core C++, OOP, STL, Data Structures, Algorithms, Multithreading and systems programming projects.",
  route: "/projects/cpp",
  color: "#00599C",
},
  // for js what all tech can i add list out like nextjs, nestjs with no details 
  //JavaScript Node.js Express.js NestJS Next.js React.js React Native Electron.js Socket.IO 
  //TypeScript Redux Redux Toolkit Zustand Jest Mocha Cypress Playwright Webpack Vite Babel ESLint Prettier npm Yarn 
  //pnpm GraphQL Apollo Prisma Sequelize Mongoose WebSockets REST APIs JWT OAuth RxJS Bun Deno Serverless AWS Lambda
  
];

const MyProjectsTypesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
            onClick={() => {
                    dispatch(setSelectedProject(project.route));
                    navigate(project.route)}}
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
