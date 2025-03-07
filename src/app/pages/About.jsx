import React from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center h-screen ">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5 px-20">
        <span className="bg-teal-300 w-[100px] h-[1px] "></span>
        <h1 className="flex text-2xl text-teal-300">About Me</h1>
        </div>
       
      <div className="flex flex-col gap-5 ">
        <p>
          Hello! My name is Ye Phone and I enjoy creating websites and
          softwares. I am interested in OOP principles and problem-solving
          skills to develop efficient applications. My journey in Software
          Development has started in 2021.
        </p>
        <p>
          Recently graduated from Southern Alberta Institute of Technology{" "}
          <a href="https://www.sait.ca/" className="text-red-600">
            SAIT
          </a>
          . Eager to learn new technologies and I'm flexible and quick leaner.{" "}
        </p>
      </div>
      </div>
      
    </section>
  );
};

export default About;
