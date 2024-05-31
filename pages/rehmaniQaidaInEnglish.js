import React from 'react';
import PdfViewer from '../components/PdfViewer';

const rehmaniQaidaInEnglish = () => {
    const pdfUrl = '/PdfFiles/rehmani-qaidah (2).pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default rehmaniQaidaInEnglish;