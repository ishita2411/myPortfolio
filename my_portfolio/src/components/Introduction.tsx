"use client";
import Typewriter from "typewriter-effect";
import "../styles/Introduction.css";

export default function Introduction() {
  return (
    <div className="introduction" id="introduction">
      <div className="say-hello">
        <img alt="hi emoji" src={"/wave.jpeg"} width="50" height="50" />{" "}
        &nbsp;Hi , I'm
      </div>

      <div></div>

      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Ishita Kundaliya!").start();
          }}
        />
      </h1>
      <div className="connect">
        Let's connect at :
        <a href="https://www.linkedin.com/in/ishita-kundaliya/" target="_blank">
          <img alt="linkedin" src={"/linkedin.svg"} width="50" height="50" />
        </a>
        <a href="https://github.com/ishita2411" target="_blank">
          <img alt="github" src={"/github.svg"} width="50" height="50" />
        </a>
        <a href="mailto:ishitakundaliya986@gmail.com" target="_blank">
          <img alt="email" src={"/mail.svg"} width="55" height="55" />
        </a>
      </div>
    </div>
  );
}
