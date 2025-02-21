import React from "react";

const About = () => {
  return (
    <section id="about" className="lg:flex lg:flex-col lg:w-full h-screen ">
      <h1 className="flex p-40 text-3xl text-teal-300">About Me</h1>
      <div className="">
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
    </section>
  );
};

export default About;
