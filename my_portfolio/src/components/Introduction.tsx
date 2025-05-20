"use client";
import Typewriter from "typewriter-effect";
// import Typography from "@material-ui/core/Typography";
// import wave from "../../public/wave.png";
// import Image from 'next/image'
import "../styles/Introduction.css";
export default function Introduction() {
  return (
    <div className="introduction">
      <center>
      <div >

      {/* <img src={"/download.jpeg"} width="50" height="50" style="vertical-align: middle;"/>
      <span style="vertical-align: middle;">Text next to image</span> */}
            <img alt="hi emoji" src={"/wave.jpeg"} width="50" height="50" /> 
            <span className="introduction_emoji"> Hi , I'm</span>
            
          </div>
      
        <div>
          
        </div>
        
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Ishita Kundaliya!").start();
            }}
          />
        </h1>
      </center>
    </div>
  );
}
