"use client";

import Icon from "@/components/icon";
import MusicPlayer from "@/components/projects/MusicPlayer";
import { firaCode, poppins } from "@/fonts/fonts";
import React, { useEffect, useState } from "react";

const Experience = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleDemoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showVideo]);

  return (
    <section
      id="experience"
      className="flex flex-col h-screen w-full items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="w-full max-w-5xl">
        <div className={`${firaCode.className} flex items-center gap-5 mb-10`}>
          <h1 className="flex text-2xl text-teal-300">Experience</h1>
          <span className="bg-teal-300 w-[100px] h-[1px]"></span>
        </div>
        <MusicPlayer onDemoClick={handleDemoClick} />
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div
            className="relative w-full max-w-4xl mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/music-app-demo.mp4"
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-lg shadow-lg object-contain"
            ></video>
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors duration-300"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
