import { useEffect, useState } from "react";
import "./ResumeModal.css";

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
          <iframe
            src="/JoseBautista.pdf"
            title="Resume PDF"
            className="resume-frame"
          />
        )}

        <a href="/JoseBautista.pdf" download className="download-btn">
          Download PDF
        </a>
      </div>
    </div>
  );
}
