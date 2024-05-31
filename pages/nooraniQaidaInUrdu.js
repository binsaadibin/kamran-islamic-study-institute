import React from 'react';
import PdfViewer from '../components/PdfViewer';

const Download = () => {
    const pdfUrl = '/PdfFiles/qaida-tajweedi.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default Download;