"use client";
import "../styles/Experience.css";
import { experiences } from "@/data/myExperience";
import Image from "next/image";


export default function Experience() {
  return (
    <div id="experience">
      <div className="heading">Experience</div>
      <hr></hr>
      <div className="all-experience">
        {experiences.map((experience) => (
          <div key={experience.company} className="experience">
            <div className="company">
              <Image
                alt="company_logo"
                src={experience.logo}
                width={25}
                height={25}
                className="company-logo"
              />
             
              {experience.company}{" "}
            </div>
            <div className="title-location-date">
              <div className="title">{experience.title}</div>
              <div className="date">
                {experience.startDate} - {experience.endDate}
              </div>
            </div>

            <div className="skills">Skills: {experience.skills}</div>

            <ul className="description">
              {experience.description?.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
