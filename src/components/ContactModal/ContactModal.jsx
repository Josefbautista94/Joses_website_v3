import "./ContactModal.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Let's Connect</h2>
        <p>If you'd like to work together or chat, reach out below!</p>

        <div className="contact-links">
          <a href="mailto:JoseF.Bautista22@gmail.com">
            <FaEnvelope /> JoseF.Bautista22@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/josefbautista94/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/Josefbautista94" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
