import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter12 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-12.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter12;