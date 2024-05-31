import React from 'react';
import PdfViewer from '../components/PdfViewer';

const chapter27 = () => {
    const pdfUrl = '/PdfFiles/Color-coded-27.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default chapter27;