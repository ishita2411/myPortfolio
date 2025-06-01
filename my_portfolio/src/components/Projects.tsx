"use client";
import "../styles/Projects.css";
import { myProjects } from "@/data/myProjects";
import Image from "next/image";

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
                <a href={project.githubLink} target="_blank">
                  <Image
                    alt="github logo"
                    src="/github.svg"
                    width={35}
                    height={35}
                    className="github-logo"
                  />
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
