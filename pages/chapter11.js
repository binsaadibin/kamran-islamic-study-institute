import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter1 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-11.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter1;