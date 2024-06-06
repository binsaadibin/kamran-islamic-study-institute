import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter32 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-23.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter32;