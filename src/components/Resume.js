import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showCoverLetter, setShowCoverLetter] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const currentFile = showCoverLetter ? '/files/Cover Letter.pdf' : '/files/Sameep_Vani_Resume.pdf';

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Resume & Cover Letter</h2>
      
      {/* Document Selector */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {setShowCoverLetter(false); setPageNumber(1);}}
          className={`px-4 py-2 rounded-lg font-medium ${
            !showCoverLetter 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Resume
        </button>
        <button
          onClick={() => {setShowCoverLetter(true); setPageNumber(1);}}
          className={`px-4 py-2 rounded-lg font-medium ${
            showCoverLetter 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Cover Letter
        </button>
      </div>

      {/* PDF Viewer Container */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">
            Page {pageNumber} of {numPages || '...'}
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="px-3 py-1 bg-white rounded border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
              className="px-3 py-1 bg-white rounded border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
            <a
              href={currentFile}
              download
              className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Download
            </a>
          </div>
        </div>

        <div className="flex justify-center overflow-auto" style={{ maxHeight: '800px' }}>
          <Document
            file={currentFile}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-gray-500">Loading PDF...</div>}
            error={<div className="text-red-500">Failed to load PDF</div>}
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-lg"
              width={Math.min(800, window.innerWidth - 100)}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
