import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '@/styles/components/carouseles/HomeEndCarousel.module.scss';
import Image from 'next/image';// Adjust the import path as necessary



const cardContent = [
  {
    image: '/imges/course-6.jpg',
    title: 'Noorani Qaida',
  },
  {
    image: '/imges/course-5.jpg',
    title: 'Tajweed ulQuran',
  },
  {
    image: '/imges/course-4.jpg',
    title: 'Quran Reading',
  },
  {
    image: '/imges/reading.jpg',
    title: 'Quran Tafseer',
  },
  {
    image: '/imges/course-5 (1).jpg',
    title: 'Quran Ijaza',
  },
  {
    image: '/imges/course-6 (1).jpg',
    title: 'Quran Memorization',
  },
  {
    image: '/imges/course-9.jpg',
    title: 'Learn Arabic',
  },
  {
    image: '/imges/course-10.jpg',
    title: 'Learn Ten Qirat',
  },
  {
    image: '/imges/course-11.jpg',
    title: 'Islamic Supplications',
  },
  {
    image: '/imges/course-12.jpg',
    title: 'Pillars of Islam',
  },
  {
    image: '/imges/course-115.jpg',
    title: 'Islamic Studies Junior Level',
  },
  {
    image: '/imges/course-116.jpg',
    title: 'Islamic Studies Senior Level',
  },
];



const HomeEndCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 4, // Number of slides to show by default
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',
      autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000,
    cssEase: 'linear', // Adjust spacing between centered slide and other slides
      responsive: [
        {
          breakpoint: 1440, // Large screens and below
          settings: {
            slidesToShow: 3,
            centerPadding: '50px',
          },
        },
        {
          breakpoint: 1024, // Medium screens and below
          settings: {
            slidesToShow: 2,
            centerPadding: '40px',
          },
        },
        {
          breakpoint: 768, // Small screens and below
          settings: {
            slidesToShow: 1,
            centerPadding: '20px',
          },
        },
      ],
    };
  
    return (
      <section className={styles.fourth_box_poster}>
        <div className="container-fluid">
          <Slider {...settings}>
            {cardContent.map((card, index) => (
              <div key={index} className={styles.cardContainer}>
                <div className={`card ${styles.card}`}>
                  <Image src={card.image} alt={card.imgSrc} width={50} height={50} layout="responsive"  className="card-img-top" />
                  <div className="card-body">
                    <h2 className={`card-title ${styles.title}`}>{card.title}</h2>
                    {/* <h5>{card.date}<span>{card.category}</span></h5> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default HomeEndCarousel;


