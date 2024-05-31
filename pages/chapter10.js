import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter10 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-10.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter10;