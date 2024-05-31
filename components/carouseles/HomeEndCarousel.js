import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '@/styles/components/carouseles/HomeEndCarousel.module.scss';
import Image from 'next/image';// Adjust the import path as necessary

const cardContent = [
    {
      imgSrc: '/imges/3.jpg',
      imgAlt: '/imges/3.jpg',
      title: 'Islamic Supplications',
      date: '',
      category: 'Islamic Supplications',
    },
    {
      imgSrc: '/imges/aqeedah-ilyas-bhai.jpg',
      imgAlt: 'Aqaaid (Beliefs)',
      title: 'Aqaaid (Beliefs)',
      date: '',
      category: 'Aqaaid (Beliefs)',
    },
    {
      imgSrc: '/imges/shutterstock_36770200-400x250.jpg',
      imgAlt: 'Fiqh (Islamic Jurisprudence)',
      title: 'Islamic Jurisprudence',
      date: '',
      category: 'Fiqh (Islamic Jurisprudence)',
    },
    {
      imgSrc: '/imges/Akhlaq-The-beauty-of-an-Ummati-641x321-641x3211-1.jpg',
      imgAlt: 'Akhlaaq (Ethics and Morality)',
      title: ' Ethics and Morality',
      date: '',
      category: 'Akhlaaq (Ethics and Morality)',
    },
    {
      imgSrc: '/imges/landscape-scene-from-ancient-baghdad-inspired-by-video-games_23-2151220590.jpg',
      imgAlt: 'Islamic History',
      title: 'Islamic History',
      date: '',
      category: 'Islamic History',
    },
    {
      imgSrc: '/imges/noorani-qaida-islamic-books.jpg',
      imgAlt: 'Norani Qaida',
      title: 'Norani Qaida',
      date: '',
      category: 'Norani Qaida',
    },
    {
      imgSrc: '/imges/maxresdefault.jpg',
      imgAlt: 'Tajweed Ul Quran',
      title: 'Tajweed Ul Quran',
      date: '',
      category: 'Tajweed Ul Quran',
    },
    {
      imgSrc: '/imges/indonesia-bertauhid-ocEpT2tKX5c-unsplash-min-400x250.jpg',
      imgAlt: 'Quran Reading',
      title: 'Quran Reading',
      date: '',
      category: 'Quran Reading',
    },
    {
      imgSrc: '/imges/tafseer-quran_blue.jpg',
      imgAlt: 'Tafseer e Quran',
      title: 'Tafseer e Quran',
      date: '',
      category: 'Tafseer e Quran',
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
                  <Image src={card.imgSrc} alt={card.imgAlt} width={50} height={50} layout="responsive"  className="card-img-top" />
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


