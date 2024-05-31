import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter15 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-15.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter15;