import { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./ResumeModal.css";

export default function ResumeModal({ onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 600);
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content resume-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
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
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
            <div className="viewer-wrapper">
              <Viewer fileUrl="/JoseBautista.pdf" />
            </div>
          </Worker>
        )}

        <a
          href="/JoseBautista.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Open in New Tab
        </a>
      </div>
    </div>
  );
}
