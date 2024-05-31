import React from 'react';
import styles from '@/styles/components/MainHeadingOfPages.module.scss';

export default function MainHeadingOfPages({ heading, backgroundImage }) {
  const headingStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className={styles.mainHeading} style={headingStyle}>
      <h1>{heading}</h1>
    </div>
  );
}
