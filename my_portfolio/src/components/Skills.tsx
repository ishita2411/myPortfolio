"use client";

import "../styles/Skills.css";
import Image from "next/image";

export default function Skills() {
  const handleClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <Image src="/skills.png" alt="skills icon" width={40} height={40} />
          Skills
        </div>
        <hr></hr>
        <br></br>
        <div className="all-skills">
          <div className="skill">
            <Image src="/laptop.svg" alt="Languages" width="20" height="20" />
            Python, Java, JavaScript, Typescript, C, C++, HTML, CSS, Bash
            Scripting
          </div>
          <div className="skill">
            <Image
              src={"/file-code.svg"}
              alt="Frameworks"
              width="20"
              height="20"
            />
            React.js, Next.js, Justand, Redux
          </div>
          <div className="skill">
            <Image src="/server.svg" alt="Frameworks" width="20" height="20" />
            Django, Spring Boot, Node.js, Express.js, Flask
          </div>
          <div className="skill">
            <Image src="/database.svg" alt="Databases" width="20" height="20" />
            SQL - MySQL, PostgreSQL, NoSQL - MongoDB, Firestore
          </div>
          <div className="skill">
            <Image src="/code-compare.svg" alt="cloud" width="20" height="20" />
            Google Cloud Platform, Firebase, AWS, Git, Jenkins, Docker,
            Kubernetes
          </div>
        </div>
      </div>
      <div className="show-resume">
      <button onClick={handleClick}>Show Resume</button></div>
    </div>
  );
}
