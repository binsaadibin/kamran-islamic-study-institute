import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter20 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-20.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter20;