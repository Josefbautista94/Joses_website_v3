// src/components/Navbar/Navbar.jsx
import "./Navbar.css";
import ContactModal from "../ContactModal/ContactModal.jsx";
import ResumeModal from "../ResumeModal/ResumeModal.jsx";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#home">JB</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                setShowResume(true);
              }}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                setShowContact(true);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
}
