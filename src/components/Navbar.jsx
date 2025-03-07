"use client";

import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../app/constants";

const Navbar = () => {
  // const [isMounted, setIsMounted] = useState(!isHome);
  // const [scrolledToTop, setScrolledToTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  // const nodeRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(previousScroll > currentScroll || currentScroll < 10);
      setPreviousScroll(currentScroll);
    };
    
    window.addEventListener('scroll', handleScroll);

    return() => window.removeEventListener('scroll', handleScroll);
  }, [previousScroll]);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-neutral-300 text-lg">
                  YPK
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {/* Desktop menu */}
            <ul className="flex space-x-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="py-4 px-2 text-neutral-300 hover:text-teal-400 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none relative w-6 h-6"
              onClick={toggleMenu}
            >
              <img
                src="/menu.svg"
                alt="menu"
                className={`absolute inset-0 w-6 h-6 transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/close.svg"
                alt="close"
                className={`absolute inset-0 w-6 h-6 transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className={`
            fixed inset-y-0 right-0 w-full md:hidden 
            transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <div
              className="absolute inset-y-0 left-0 w-1/2 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={toggleMenu}
            ></div>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-950 shadow-xl overflow-y-auto">
              <button
                className="absolute top-4 right-4 z-50"
                onClick={toggleMenu}
              >
                <img src="/close.svg" alt="close" className="w-6 h-6" />
              </button>
              <ul className="pt-16 pb-3 flex flex-col">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="block py-2 px-4 text-sm text-neutral-300 hover:text-teal-400 transition duration-300"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
    
  );
};

export default Navbar;
