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
            <img src="/laptop.svg" alt="Languages" width="30" height="30" />
            Python, Java, JavaScript, Typescript, C, C++, HTML, CSS, Bash
            Scripting
          </div>
          <div className="skill">
            <img
              src={"/file-code.svg"}
              alt="Frameworks"
              width="30"
              height="30"
            />
            React.js, Next.js, Justand, Redux
          </div>
          <div className="skill">
            <img src="/server.svg" alt="Frameworks" width="30" height="30" />
            Django, Spring Boot, Node.js, Express.js, Flask
          </div>
          <div className="skill">
            <img src="/database.svg" alt="Databases" width="30" height="30" />
            SQL - MySQL, PostgreSQL, NoSQL - MongoDB, Firestore
          </div>
          <div className="skill">
            <img src="/code-compare.svg" alt="cloud" />
            Google Cloud Platform, Firebase, AWS, Git, Jenkins, Docker,
            Kubernetes{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
