import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter22 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-22.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter22;