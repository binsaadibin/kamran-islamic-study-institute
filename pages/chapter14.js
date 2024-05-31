import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter14 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-14.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter14;