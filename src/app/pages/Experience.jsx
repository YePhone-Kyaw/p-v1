import { firaCode } from "@/fonts/fonts";
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col h-screen w-full items-center justify-center "
    >
      <div>
        <div className={`${firaCode.className} flex items-center gap-5 mb-10`}>
          <h1 className="flex text-2xl text-teal-300">Experience</h1>
          <span className="bg-teal-300 w-[100px] h-[1px] "></span>
        </div>
        <div>
          image
        </div>
      </div>
    </section>
  );
};

export default Experience;
