import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter5 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-5.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter5;