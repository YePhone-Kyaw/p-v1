import React from "react";
import { socialMedia } from "../constants";
import Icon from "../../components/icon";

const Hero = () => {
  return (
    <main className="flex flex-col items-center h-100vh min-h-100vh p-0 md:h-auto sm:h-auto">
      <div className="">
        <h1 className="ml-[30px] mb:[4px] sm:ml-[20px] sm:mb-[2px] text-teal-400">
          Hi, my name is
        </h1>
        <div className="flex items-center">
          <h1 className="text-6xl font-sans">Ye Phone Kyaw</h1>
        </div>
        <p className="mb-6">
          I'm junior software developer based in Calgary, Alberta, Canada. I'm
          really passionate about coding, problem-solving.
        </p>

    <div className=''>
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
