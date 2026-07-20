import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectByTitle } from "../../../redux/project/projectThunk";
import "./ProjectPage.css";

const ProjectPage = () => {
  const dispatch = useDispatch();

  const projectTitle = useSelector(
    (state) => state.project.selectedProjectTitle
  );

  const { project, loading, error } = useSelector(
    (state) => state.project
  );

  useEffect(() => {
    if (projectTitle) {
      dispatch(fetchProjectByTitle(projectTitle));
    }
  }, [dispatch, projectTitle]);

  if (loading)
    return <h2 className="text-center mt-5">Loading Projects...</h2>;

  if (error)
    return <h2 className="text-center mt-5">Something Went Wrong..</h2>;

  if (!project || project.length === 0)
    return <h2 className="text-center mt-5">No Projects Found</h2>;


  return (
    <div className="project-container">

      <h1 className="page-title">
        {projectTitle} Projects
      </h1>


      <div className="project-grid">

        {project.map((item) => (

          <div className="project-card" key={item._id}>

            <div className="card-header">
              <h2>{item.title}</h2>
            </div>


            <div className="card-body">

              <p className="description">
                {item.description}
              </p>


              <h5>Technology Stack</h5>

              <div className="tech-container">
                {item.technologies?.map((tech)=>(
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>



              <h5 className="mt-3">
                Features
              </h5>


              <ul>
                {item.features?.slice(0,4).map((feature)=>(
                  <li key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>


              <div className="buttons">

                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  Github
                </a>


                {
                  item.liveDemo &&
                  <a
                    href={item.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                  >
                    Live Demo
                  </a>
                }

              </div>


            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ProjectPage;