import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter29 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-29.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter29;