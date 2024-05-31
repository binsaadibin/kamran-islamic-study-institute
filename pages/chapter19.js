import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter19 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-19.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter19;