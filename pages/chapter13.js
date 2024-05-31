import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter13 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-13.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter13;