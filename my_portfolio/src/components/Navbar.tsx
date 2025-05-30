'use client';
import "../styles/Navbar.css";
import Link from 'next/link';
import { useRouter } from "next/navigation";
export default function NavBar() {
  const router = useRouter();
  return (


    
    <div className="nav-container">
    <nav className="navbar">
        <ul>
            <li><a href="#">&nbsp;&nbsp;Ishita Kundaliya</a></li>
            {/* <li><Link href="#experience">some</Link></li> */}
            <li className="extra_padding"> | </li>
            <a href="#introduction"><li>Home</li></a>
            <a href="#aboutme"><li>About</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#education"><li>Education</li></a>
            <a href="#experience"><li>Experience</li></a>
            <a href ="#projects"><li>Projects</li></a>
        </ul>
    </nav>
        </div>



  );
}