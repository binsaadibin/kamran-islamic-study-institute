import React from 'react';
import PdfViewer from '../components/PdfViewer';

const nooraniQaidaInEnglish = () => {
    const pdfUrl = '/PdfFiles/Noorani Qaida - Color - English.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default nooraniQaidaInEnglish;