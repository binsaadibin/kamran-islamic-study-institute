// import Layout from '../components/headerAndFooter/Layout';
import React from 'react';
import PdfViewer from '../components/PdfViewer';

const Download = () => {
    const pdfUrl = '/PdfFiles/Color-coded-1.pdf';

    return (

    //   <Layout>
        <div>
            {/* <h1>PDF Viewer</h1> */}
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
        // </Layout>
    );
};

export default Download;