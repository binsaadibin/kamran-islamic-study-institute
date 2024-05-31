import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter9 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-9.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter9;