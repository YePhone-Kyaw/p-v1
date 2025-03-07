import React from "react";
import { socialMedia } from "../constants";
import Icon from "../../components/icon";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center h-screen px-10 pb-40 md:px-20 md:pb-40 lg:px-20 lg:pb-40">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-5xl md:text-7xl">Ye Phone Kyaw</h1>
        <h5 className="text-xl md:text-2xl text-teal-400">Software Developer</h5>
        <p className="text-lg md:max-w-screen-sm">
          I'm junior software developer based in Calgary, Alberta, Canada. I'm
          passionate about coding, problem-solving. Additionally, I'm eager to learn new technologies, sharpen and improve my data structure and algorithms skills. 
        </p>

        <div className="">
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
    </section>
  );
};

export default Hero;
