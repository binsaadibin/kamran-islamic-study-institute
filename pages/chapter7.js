import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter7 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-7.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter7;