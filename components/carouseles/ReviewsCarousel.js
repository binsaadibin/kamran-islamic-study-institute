import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import styles from '@/styles/components/carouseles/ReviewsCarousel.module.scss';
import Image from 'next/image';

const cardsContent = [
  {
    rating: 4,
    text:  `My 3 children have been attending online classes with Kamran and they have learned a lot of their Quran because of him. He is always very attentive towards their mistakes and understanding when they make them.Kamran is very well suited to teaching Quran and the basics of the Sunnah and has been a great help to my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Kamran Nawaz',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text:  `My 3 children have been attending online classes with Kamran and they have learned a lot of their Quran because of him. He is always very attentive towards their mistakes and understanding when they make them.Kamran is very well suited to teaching Quran and the basics of the Sunnah and has been a great help to my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Kamran Nawaz',
    name: 'Pakistan'
  },
  {
    rating: 4,
    text: `My 3 children have been attending online classes with Kamran and they have learned a lot of their Quran because of him. He is always very attentive towards their mistakes and understanding when they make them.Kamran is very well suited to teaching Quran and the basics of the Sunnah and has been a great help to my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Kamran Nawaz',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text: `My 3 children have been attending online classes with Kamran and they have learned a lot of their Quran because of him. He is always very attentive towards their mistakes and understanding when they make them.Kamran is very well suited to teaching Quran and the basics of the Sunnah and has been a great help to my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Kamran Nawaz',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text: `My 3 children have been attending online classes with Kamran and they have learned a lot of their Quran because of him. He is always very attentive towards their mistakes and understanding when they make them.Kamran is very well suited to teaching Quran and the basics of the Sunnah and has been a great help to my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Kamran Nawaz',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text: `My 3 children have been attending online classes with Kamran and they have learned a lot of their Quran because of him. He is always very attentive towards their mistakes and understanding when they make them.Kamran is very well suited to teaching Quran and the basics of the Sunnah and has been a great help to my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Kamran Nawaz',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text: `My 3 children have been attending online classes with Kamran and they have learned a lot of their Quran because of him. He is always very attentive towards their mistakes and understanding when they make them.Kamran is very well suited to teaching Quran and the basics of the Sunnah and has been a great help to my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Kamran Nawaz',
    name: 'Pakistan'
  },
];

const ReviewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 slides by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <Slider {...settings}>
        {cardsContent.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4"> {/* Bootstrap grid columns */}
            <div className={styles.card}>
              <div className={styles.rating}>
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                    size={20}
                  />
                ))}
              </div>
              <p className={styles.text}>{card.text}</p>
              <div className={styles.imageContainer}>
                

                <Image src={card.image} alt={card.title} className={styles.image} width={50} height={50} layout="responsive" />
                <div className={styles.info}>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.name}>{card.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;
