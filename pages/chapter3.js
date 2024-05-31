import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter3 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-3.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter3;