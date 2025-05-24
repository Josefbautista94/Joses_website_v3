import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function ResumeViewer() {
  return (
    <div style={{ height: '70vh' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
        <Viewer fileUrl="/JoseBautista.pdf" />
      </Worker>
    </div>
  );
}
