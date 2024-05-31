import React from 'react';
import styles from '@/styles/components/BlogContent.module.scss'
import Image from 'next/image';

const ContentColumn = ({ content }) => {
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        {content.map((item, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className={styles.mainCard}>
              {/* Date and Time */}
              <div className={styles.DateAndTime}>
                <small className={styles.date}>{item.date}</small>
                <small className={styles.time}>{item.time}</small>
              </div>
             <div className={styles.subCard}>
                 {/* Small Heading */}
              <div className={styles.smallHeading}>
                <small>{item.smallHeading}</small>
              </div>
              {/* Main Heading */}
              <div className={styles.mainHeading}>
                <h2>{item.mainHeading}</h2>
              </div>
              {/* Div with By, Picture, Name and Icon */}
              <div className={`d-flex align-items-center justify-content-evenly mb-2 ${styles.detail}`}>
                <span>BY</span>
                <Image src={item.picture} alt="Picture" className={styles.firstImage} width={50} height={50} layout="responsive" />
                <span className="ml-2">{item.name}</span>
                <Image src={item.icon} alt="Icon" className={styles.secondImage} width={50} height={50} layout="responsive" />
              </div>
              {/* Description */}
              <div className={styles.description}>
                <p>{item.description}</p>
              </div>
              {/* Continue Reading Link */}
              <div className={styles.link}>
                <a href={item.link}>CONTINUE READING</a>
              </div>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentColumn;
