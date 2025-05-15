// import Image from "next/image";
// import styles from "./page.module.css";
'use client';

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
    </div>
  );
}
