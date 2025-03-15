'use client'

import Icon from "@/components/icon";
import { firaCode, poppins } from "@/fonts/fonts";
import React, { useState } from "react";

const Experience = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleDemoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <section
      id="experience"
      className="flex flex-col h-screen w-full items-center justify-center relative"
    >
      <div>
        <div className={`${firaCode.className} flex items-center gap-5 mb-10`}>
          <h1 className="flex text-2xl text-teal-300">Experience</h1>
          <span className="bg-teal-300 w-[100px] h-[1px]"></span>
        </div>
        <div className="flex flex-col bg-gray-500/20 p-6 rounded-lg">
          <h3 className={`${firaCode.className} text-xl text-teal-300 mb-4`}>
            React Native Music Player
          </h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-10">
              <div className="flex gap-3">
              <img src="/music-app1.png" alt="music-app" className="h-24" />
              <img src="/music-app2.png" alt="music-app" className="h-24" />
              </div>

              <div className="flex items-baseline gap-5">
                <button
                  onClick={handleDemoClick}
                  className="mb-2 text-neutral-300 hover:text-teal-400 transition-colors duration-300"
                >
                  <Icon name="Demo" />
                </button>
                <a
                  href="https://github.com/YePhone-Kyaw/music-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-teal-400 transition-colors duration-300"
                >
                  <Icon name="GitHub" />
                </a>
              </div>
            </div>
            <p className={`${poppins.className} max-w-[400px] text-center`}>
              I implemented a music application by myself as a capstone project,
              which is a cross-platform mobile application designed to provide a
              seamless music streaming experience. I built it by using React
              Native, and this project showcases my ability to develop intuitive
              interfaces, integrate the{" "}
              <a
                href="https://www.deezer.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-400 transition-colors duration-300"
              >
                Deezer
              </a>{" "}
              API to access a vast catalog of music data, enabling
              functionalities such as search, favorites, genre browsing, and
              music playback.
            </p>
          </div>
        </div>
      </div>

      {showVideo && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
    onClick={handleCloseVideo} 
  >
    <div
      className="relative max-w-4xl w-full p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <video
        src="/music-app-demo.mp4"
        controls
        autoPlay
        className="h-80 rounded-lg shadow-lg"
      ></video>
    </div>
  </div>
)}

    </section>
  );
};

export default Experience;
