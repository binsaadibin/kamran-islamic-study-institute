import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import TopHeader from './TopHeader';
import Image from 'next/image'; // Import the Image component

const Layout = ({ children }) => (
  <>
    <Head>
      {/* Load the SVG logo as a favicon */}
      <link rel="shortcut icon" type="image/svg+xml" href="/icons/kamran institute for Islamic study logo.pdf (1).svg"/>
      <title>Kamran Institute for Islamic Study</title>
    </Head>
    <TopHeader/>
    <Header/>
    <div>
      <main>{children}</main>
    </div>
    <Footer/>
  </>
);

export default Layout;
