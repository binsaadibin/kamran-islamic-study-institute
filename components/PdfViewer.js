import React from 'react';

const PdfViewer = ({ pdfUrl }) => (
    <embed src={pdfUrl} type="application/pdf" width="100%" height="700px" />
);

export default PdfViewer;