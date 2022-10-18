import React from 'react'
import hero from "../images/hero3.png"
import Typewriter from "typewriter-effect";
import './home.css'
export default function Home() {
  return (
    <div id="home">
      <section class="text-gray-600 body-font">
        <div id="hero">
          <div id="hero-body">
            <h1>
              The Best
              <br />
              <Typewriter
                options={{
                  strings: ["40 Minutes","Exercise Forever"],
                  autoStart: true,
                  loop: true,
                }}
              />
             
              Of Your Day
            </h1>
            <button type="">Contact Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
