"use client";
import "../styles/Navbar.css";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">&nbsp;&nbsp;Ishita Kundaliya</a>
          </li>
          <li className="extra_padding"> | </li>
          <a href="#introduction">
            <li>Home</li>
          </a>
          <a href="#aboutme">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#education">
            <li>Education</li>
          </a>
          <a href="#experience">
            <li>Experience</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <div className="resume-link">
          <a  href="/resume.pdf" target="_blank">
          <li>
            <Image
              src="/download.svg"
              alt="download"
              width={15}
              height={15}
            />
            
            &nbsp;Show Resume</li>
          </a>
          </div>
          
        </ul>
      </nav>
    </div>
  );
}
