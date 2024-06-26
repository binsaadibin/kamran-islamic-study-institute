import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter24 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-24.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter24;