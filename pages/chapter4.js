import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter4 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-4.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter4;