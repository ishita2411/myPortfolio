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
            <li><a href="#introduction">Home</a></li>
            <li><a href="#aboutme">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <a href ="#projects"><li>Projects</li></a>
        </ul>
    </nav>
        </div>



  );
}