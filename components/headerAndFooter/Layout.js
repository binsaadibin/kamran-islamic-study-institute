// components/Layout.js
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import TopHeader from './TopHeader';
// import layoutStyles from '../styles/Layout.module.scss'; // Import local CSS Module for Layout component

const Layout = ({ children }) => (
  <>
    <Head>
      <title>BINSAADI ONLIN QURAN ACADEMY</title>
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







