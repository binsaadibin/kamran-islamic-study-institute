import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter28 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-28.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter28;