import React from 'react';
import PdfViewer from '../components/PdfViewer';

const rehmaniQaida = () => {
    const pdfUrl = '/PdfFiles/Rehmani-Qaida.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default rehmaniQaida;