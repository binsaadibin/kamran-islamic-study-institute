import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/carouseles/MainCarousel.module.scss';

const CarouselContent = [
  {
    imageSrc: '/imges/6xdbgt.jpg',
    altText: 'how-to-spiritually-prepare-for-motherhood-banner-1.png',
    title: 'Online Quran Classes',
    subtitle: 'BIN SAADI ONLINE QURAN ACADEMY',
    description: 'When faced with overwhelming challenges, take a step back and reflect on the positive aspects of your life instead.',
    buttonText: 'Get Admission now',
  },
  {
    imageSrc: '/imges/Is-Ruqyah-with-unclear-words-permitted_.jpg',
    altText: 'Is-Ruqyah-with-unclear-words-permitted_.jpg',
    title: 'Expert Tutors',
    subtitle: 'BIN SAADI ONLINE QURAN ACADEMY',
    description: 'We facilitate easy Quran learning for everyone. View our packages for more information.',
    buttonText: 'View Our Packages',
  },
  {
    imageSrc: '/imges/slider_005_1200x.webp',
    altText: 'how-to-spiritually-prepare-for-motherhood-banner-1.png',
    title: 'Learn and Teach Quran',
    subtitle: 'BIN SAADI ONLINE QURAN ACADEMY',
    description: 'The finest among you is the individual who learns the Holy Quran and imparts its knowledge to others.',
    buttonText: 'Contact Us',
  },
  {
    imageSrc: '/imges/AdobeStock_332447389-1200x400.webp',
    altText: 'how-to-spiritually-prepare-for-motherhood-banner-1.png',
    title: 'We Offer The best',
    subtitle: 'BIN SAADI ONLINE QURAN ACADEMY',
    description: 'Stay connected with Bin Saadi and gain the privilege of learning and sharing that knowledge with others.',
    buttonText: 'Feel free to ask.',
  },
];

const MainCarousel = () => {
  return (
    <div id="carouselExample" className={`carousel slide ${styles.carouselSlide}`} data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {CarouselContent.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className={`position-relative ${styles.overlay}`}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  layout="fill"
                  className={styles.image}
                />
              </div>
              <div className={`position-absolute top-0 start-0 w-100 h-100 ${styles.overlay} d-flex flex-column justify-content-center align-items-center text-center`}>
                <h5 className={styles.subtitle}>{item.subtitle}</h5>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.description}>{item.description}</p>
                <button className={`btn ${styles.carouselButton}`}>{item.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span> */}
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span> */}
      </button>
    </div>
  );
};

export default MainCarousel;
