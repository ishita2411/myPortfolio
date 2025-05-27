"use client";
import Typewriter from "typewriter-effect";
import "../styles/Introduction.css";
export default function Introduction() {
  return (
    <div className="introduction" id="introduction">
      <center>
        <div>
          <img alt="hi emoji" src={"/wave.jpeg"} width="50" height="50" />
          <span className="introduction_emoji"> Hi , I'm</span>
        </div>

        <div></div>

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
