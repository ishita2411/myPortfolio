"use client";
import "../styles/Experience.css";
import { experiences } from "@/data/myExperience";
export default function Experience() {
  let keyval=1;
  keyval=keyval+1;
  return (
    // <div id='about'></div>
    <div id="experience">
      {experiences.map((experience) => (
        
        <div key={experience.company} className="experience">
            
            <div className="company">
            <img alt="company_logo" src={experience.logo}  className="company-logo" /> 
            {experience.company} </div>
            <div className="title-location-date">
            {/* <img alt="hi emoji" src={"/wave.jpeg"} width="50" height="50" />  */}
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
  );
}
