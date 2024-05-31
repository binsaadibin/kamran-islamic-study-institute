import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter26 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-26.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter26;