import React, { useState } from 'react';
import styles from '@/styles/components/BlogContent.module.scss';
import Image from 'next/image';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ContentColumn = ({ content }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = content.slice(offset, offset + itemsPerPage);

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        {currentItems.map((item, index) => (
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
                  <Image src="/imges/mosque-and-moon-during-ramadan-uhd-8k-wallpaper.jpg" alt="Picture" className={styles.firstImage} width={50} height={50} layout="responsive" />
                  <span className="ml-2">Kamran Institute for Islamic Study</span>
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
      <Stack spacing={2} alignItems="center" marginTop={4}>
        <Pagination
          count={Math.ceil(content.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default ContentColumn;


