import "./ResumeModal.css";

export default function ResumeModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content resume-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>My Resume</h2>
        <iframe
          src="/JoseBautista.pdf"
          title="Resume PDF"
          className="resume-frame"
        ></iframe>
        <a href="/resume.pdf" download className="download-btn">
          Download PDF
        </a>
      </div>
    </div>
  );
}
