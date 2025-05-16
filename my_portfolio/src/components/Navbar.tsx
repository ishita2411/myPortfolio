'use client';
import "../styles/Navbar.css";
import Link from 'next/link';
export default function NavBar() {
  return (


    
    <div className="nav-container">
    <nav className="navbar">
        <ul>
            <li><a href="#introduction">&nbsp;&nbsp;Ishita Kundaliya</a></li>
            <li><Link href="#experience">some</Link></li>
            <li className="extra_padding"> | </li>
            <li><a href="index.html">Home</a></li>
            <li><a href="#aboutme">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
        </div>



  );
}