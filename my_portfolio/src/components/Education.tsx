"use client";
import "../styles/Education.css";
import { myEducation } from "@/data/myEducation";
import Image from "next/image";

export default function Education() {
  return (
    <div id="education">
      <div className="heading">Education</div>
      <hr></hr>
      <div className="all-education">
        {myEducation.map((education) => (
          <div key={education.school} className="education">
            <div className="uni-name">
              <Image
                src={education.logo}
                alt="logo"
                width={25}
                height={25}
                className="uni-logo"
              />
              {education.school}
            </div>
            <div className="degree-location-date">
              <div className="degree">{education.degree}</div>
              <div className="date">
                {education.startDate} - {education.endDate}
              </div>
            </div>
            <div className="gpa">GPA: {education.gpa}</div>
            <div className="course-work">
              <b>Coursework:</b> <br></br>
              {education.courseWork}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
