import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

const PDFViewer: React.FC = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="w-4/5 h-4/5">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/cv/NelsonVargas.pdf" plugins={[pageNavigationPluginInstance]} />
        </Worker>
      </div>
      
    </div>
  );
};

export default PDFViewer;