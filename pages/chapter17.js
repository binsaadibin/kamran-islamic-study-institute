import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter17 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-17.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter17;