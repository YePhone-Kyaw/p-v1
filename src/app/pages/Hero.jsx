import React from "react";
import { socialMedia } from "../constants";
import Icon from "../components/icons/icon";

const Hero = () => {
  return (
    <main className="max-w-6xl p-40 lg:flex lg:w-full md:w-[30%]">
      <div className="flex flex-col space-y-4">
        <h5 className="text-s font-sans text-teal-400">
          Hi, my name is
        </h5>
        <div className="flex items-center">
          <h1 className="text-8xl font-sans">Ye Phone Kyaw</h1>
        </div>
        <p className="mb-6">
          I'm junior software developer based in Calgary, Alberta, Canada. I'm
          really passionate about coding, problem-solving.
        </p>

    <div className="list-none">
    <ul className="flex gap-5">
          {socialMedia.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href} 
                aria-label={item.name}
                target="_blank"
                className="text-neutral-300 hover:text-teal-400 transition-colors duration-300"
              >
                <Icon name={item.name} />
              </a>
            </li>
          ))}
        </ul>
    </div>
        
      </div>
    </main>
  );
};

export default Hero;
