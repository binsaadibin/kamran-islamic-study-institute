import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter8 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-8.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter8;