"use client";

import "../styles/Skills.css";

export default function Skills() {
  return (
    <div id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <img src="/skills.png" alt="Skills" width="40" height="40" />
          Skills
        </div>
        <hr></hr>
        <div className="all-skills">
          <div className="skill">
            Python, Java, JavaScript, Typescript, C, C++, HTML, CSS, Bash
            Scripting
          </div>
          <div className="skill">React.js, Next.js, Justand, Redux</div>
          <div className="skill">
            Django, Spring Boot, Node.js, Express.js, Flask
          </div>
          <div className="skill">
            SQL - MySQL, PostgreSQL, NoSQL - MongoDB, Firebase
          </div>
          <div className="skill">
            Google Cloud Platform, Firestore, AWS, Git, Jenkins, Docker,
            Kubernetes{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
