import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter16 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-16.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter16;