"use client";
import "../styles/Navbar.css";

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
        </ul>
      </nav>
    </div>
  );
}
