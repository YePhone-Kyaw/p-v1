import { firaCode, poppins } from "@/fonts/fonts";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col h-screen w-full items-center justify-center "
    >
      <div className="flex flex-col ml-10 mr-10">
      <div className={`${firaCode.className} flex items-center gap-5 mb-10`}>
          <h1 className="flex text-2xl text-teal-300">About Me</h1>
          <span className="bg-teal-300 w-[100px] h-[1px] "></span>
        </div>
      <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
        <div className={`${poppins.className} text-md flex flex-col gap-5 lg:max-w-[600px] md:max-w-[520px] max-w-[450px]`}>
          <p >
            Hello! My name is Ye Phone (George) and I recently graduated from
            Southern Alberta Institute of Technology{" "}
            <a href="https://www.sait.ca/" className="text-teal-300">
              SAIT 
            </a>
            . I'm passionate creating websites, softwares and mobile applications.
            Additionally, I'm also interested in OOP principles and
            problem-solving skills to develop efficient applications. My journey
            in Software Development has started in 2021.
          </p>
          
            <p>
              As a recent graduate with software development from SAIT, I
              specialized in Web development, cross-platform mobile development,
              software testing and security.
            </p>
            <p>
              My strengths lie in problem-solving, collaborative teamwork, and
              quickly adapting to new technologies.
            </p>
            {/* <div>
              <p>
                Here are a few technologies I'm proficient and been working with
                recently:
              </p>
              <ul>
                <li></li>
              </ul>
            </div> */}
        </div>
        <img src="/me.jpg" alt="profile" className=" md:ml-20 md:mt-0 mt-14 h-64 w-56 rounded-lg "/>
      </div>
      </div>
            
    
    </section>
  );
};

export default About;
