import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter6 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-6.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter6;