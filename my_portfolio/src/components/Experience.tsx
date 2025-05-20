"use client";
import "../styles/Experience.css";
import { experiences } from "@/data/myExperience";
export default function Experience() {
  console.log(experiences);
  let keyval=1;
  console.log(keyval);
  keyval=keyval+1;
    console.log(keyval);
  return (
    // <div id='about'></div>
    <div id="experience">
      <ul className="experience">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <div className="company">{experience.company} </div>
            <div className="title-location-date">
              <div className="title">{experience.title}</div>
              <div className="date">
                {experience.startDate} - {experience.endDate}
              </div>
            </div>

            <div className="skills">Skills: {experience.skills}</div>
            <ul className="description">
              {experience.description?.map((description) => (
                <li key={keyval++}>{description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
