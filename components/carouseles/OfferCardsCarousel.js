import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '@/styles/components/carouseles/OfferCardsCarousel.module.scss'; 
import Image from 'next/image';// Adjust the import path as necessary

const cardContent = [
    {
      imgSrc: '/imges/Why-Us-Icon-01.svg',
      imgAlt: '/imges/3.jpg',
      title: 'One on One classes',
      category: 'One-on-One classes are far Suoerior to group classes',
    },
    {
      imgSrc: '/imges/tutors.svg',
      imgAlt: 'Aqaaid (Beliefs)',
      title: 'Qualified Tutors',
      category: 'People  in  certain  areas  struggle to  find  relible Quran Teachers',
    },
    {
      imgSrc: '/imges/At-ease.svg',
      imgAlt: 'Fiqh (Islamic Jurisprudence)',
      title: 'Flexible Timings',
      category: 'The  most  important Advantage of Online Quran Academy',
    },
    {
      imgSrc: '/imges/portal.svg',
      imgAlt: 'Akhlaaq (Ethics and Morality)',
      title: ' Study in your Home',
      category: 'Study in your Home is convient and comfortable',
    },
    {
      imgSrc: '/imges/Economical-icon.svg',
      imgAlt: 'Islamic History',
      title: 'Economical',
      category: 'Quran online classes are less likely to be affected by inflation.',
    },
  ];
  


const OfferCardsCarousel = () => {
  const settings = {
    dots: true, // Use a custom class for the dots container
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  };
  
  
    return (
      <div className={styles.fourth_box_poster}>
        <div className="container-fluid">
          <Slider {...settings}>
            {cardContent.map((card, index) => (
              <div key={index} className={styles.cardContainer}>
                <div className={`card ${styles.card}`}>
                <center>
                <Image src={card.imgSrc}  alt={card.imgAlt} width={50} height={50} className={`card-img-top ${styles.imges}`} layout="responsive" />

                </center>
                  <div className="card-body">
                    <h2 className={`card-title ${styles.title}`}>{card.title}</h2>
                    <h5>{card.category}</h5>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default OfferCardsCarousel;


