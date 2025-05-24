import { useEffect, useState } from "react";
import "./ResumeModal.css";
import ResumeViewer from "./ResumeViewer";

export default function ResumeModal({ onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 600);
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>My Resume</h2>

        {isMobile ? (
          <a
            href="/JoseBautista.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            View Full Resume
          </a>
        ) : (
          <ResumeViewer />
        )}
      </div>
    </div>
  );
}
