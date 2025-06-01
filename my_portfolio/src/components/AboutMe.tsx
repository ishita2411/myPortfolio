"use client";
import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div id="aboutme">
      <div className="section-header "></div>
      <div className="about-content">
        <div className="about-description">
          I am currently a software engineer at Hewlett Packard Enterprise,
          where I work in the OEM team developing an end to end full stack
          application to increase team efficeiency by atleast 50%. <br></br>I
          have a strong backgroud in multiple frontend and backend technologies
          and have worked on developing CI/ CD pipelines using Jenkins and
          GitHub actions. I am also well versed with cloud technologies like
          Google Cloud Platform. I have also pursued a Masters in Computer
          Science from Rice University with a specialization in Data Science and
          Machine Learning.
          <br></br>
          <br></br>Outside of work, I enjoy reading books and dancing.
        </div>
        <div className="about-image">
          <img alt="Ishita Kundaliya" src={"/me.png"} />
        </div>
      </div>
    </div>
  );
}
