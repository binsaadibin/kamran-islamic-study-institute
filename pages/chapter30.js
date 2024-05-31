import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter30 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-30.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter30;