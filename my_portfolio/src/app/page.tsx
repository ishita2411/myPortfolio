// import Image from "next/image";
// import styles from "./page.module.css";
'use client';

import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/Navbar";

// import React from 'react';
// import Typewriter from 'typewriter-effect';
// import Typography from "@material-ui/core/Typography"; 

export default function Home() {
  return (
    // <div className={styles.page}>
    <div>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Education />
      <Experience />
    </div>
  );
}
