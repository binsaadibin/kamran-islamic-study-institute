import React from 'react';
import PdfViewer from '../components/PdfViewer';

const QuranTranslation = () => {
    const pdfUrl = '/PdfFiles/quran_en_taqiusmani.pdf';

    return (
        <div>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default QuranTranslation;