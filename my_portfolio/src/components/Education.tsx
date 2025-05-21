"use client";
import "../styles/Education.css";
import { myEducation } from "@/data/myEducation";

export default function Education() {
    console.log(myEducation)
  return (
    <div id="education">
      {myEducation.map((education) => (
        <div key={education.school} className="education">
            <div className="uni-name">
            <img alt="logo" src={education.logo}  className="uni-logo" /> 
            {education.school} 
            </div>
            <div className="degree-location-date">
            {/* <img alt="hi emoji" src={"/wave.jpeg"} width="50" height="50" />  */}
              <div className="degree">{education.degree}</div>
              <div className="date">
                {education.startDate} - {education.endDate}
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}
