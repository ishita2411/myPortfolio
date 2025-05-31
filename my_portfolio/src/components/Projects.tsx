"use client";
import "../styles/Projects.css";
import { myProjects } from "@/data/myProjects";
// import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  return (
    <div id="projects">
      <div className="heading">Projects</div>
      <hr></hr>
      <div className="card-container">
        {myProjects.map((project) => (

          <div className="card" key={project.name}>
            <div className="github_link">
              {project.githubLink && (
                <a href={project.githubLink}>
                  <img alt="logo" src="/github-mark.png" className="uni-logo" />
                </a>
              )}
            </div>
            <div className="project-name">{project.name}</div>
            <div className="project-description">{project.description}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
