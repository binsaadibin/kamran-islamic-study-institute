import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter25 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-25.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter25;