import React from "react";
import hero from '../images/hero.png'
import hero2 from "../images/hero2.png";
import hero3 from "../images/man3.jpg";
export default function About() {
  return (
    <div id="about">
      <div class="flex justify-center">
        
        <div class="flex flex-col max-w-7xl justify-center items-center">
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src={hero}
                alt=""
              
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
               Md Asikur
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  Flowers are a beautiful way to show your appreciation for someone. They
                  are also a great way to show your love. Flowers can be delivered in a
                  variety of ways, including through mail, messenger, or even in person.
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
               John Doe
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  The Universe is a vast and ever-expanding place. It is composed of an
                  estimated 100 billion galaxies, each with billions of stars. It is
                  estimated that there are as many as 100 billion galaxies in the
                  observable universe.{" "}
                </a>
              </div>
            </div>
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src={hero}
                alt=""
                class=""
              />{" "}
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src={hero}
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
              Mark Zukerberg
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  The bond of friendship is one that is often unspoken and unrivaled. It
                  is a relationship that is founded on mutual respect and understanding.
                  Friendship is something that can be found in all walks of life, and is
                  often the foundation of a successful life.{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
