import React from 'react';
import styles from '@/styles/components/AllBlogsContent.module.scss'
import Image from 'next/image';

const AllBlogsContent = ({ content }) => {
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        {content.map((item, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className={styles.mainCard}>
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
                <Image src="/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg" alt="Picture" className={styles.firstImage} width={50} height={50} layout="responsive" />
                <span className="ml-2">Kamran Institute for Islamic Study</span>
                <Image src={item.icon} alt="Icon" className={styles.secondImage} width={50} height={50} layout="responsive" />
              </div>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsContent;
