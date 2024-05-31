import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter2 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-2.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter2;