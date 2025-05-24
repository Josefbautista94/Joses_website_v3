import { useEffect, useState } from "react";
import ResumeViewer from "./ResumeViewer";
import "./ResumeModal.css";

export default function ResumeModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>My Resume</h2>

        <ResumeViewer />

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
