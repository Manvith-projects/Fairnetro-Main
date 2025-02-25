import React, { useState } from 'react';
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">FAIRNETRO</div>

      {/* Mobile Menu Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="contact-btn">
        <button className="wbtn">Get In Touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
