import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter21 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-21.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter21;