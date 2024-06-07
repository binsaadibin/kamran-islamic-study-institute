import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import styles from '@/styles/components/carouseles/ReviewsCarousel.module.scss';
import Image from 'next/image';

const cardsContent = [
  {
    rating: 4,
    text:  `Both my kids, aged 8 and 5, have been learning the Quran online with teacher Kamran since the start of the year. He keeps them engaged and makes lessons enjoyable and effective. His patience, especially when the kids are not in the mood, is commendable. I highly recommend him to parents looking for a similar experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'IM Ace',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text:  `Qari Kamran was my son Taha’s first Quran teacher and he was fantastic. He knows how to teach kids, especially those in the US or UK, making learning fun and not intimidating. Taha now reads the Quran independently. I highly recommend Qari Kamran for teaching Noorani Qaida and Quran to young kids.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Dr. Nazia Mojib',
    name: 'Pakistan'
  },
  {
    rating: 4,
    text: `Ustadh Kamran has been teaching my son Quran with Tajweed and Islamic manners since he was 4. His dedication, patience, and ability to engage young children are truly remarkable. He handles every situation with calmness and compassion. I highly recommend him for teaching Quran to children.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'zamzam ali',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text: `My 3 children have been learning the Quran online with Kamran, and they’ve made great progress. He is attentive to their mistakes and understanding when they make them. Kamran is well-suited for teaching Quran and the basics of Sunnah, greatly enhancing my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Zamzam Abdillahi',
    name: 'Pakistan'
  },






  {
    rating: 4,
    text:  `Both my kids, aged 8 and 5, have been learning the Quran online with teacher Kamran since the start of the year. He keeps them engaged and makes lessons enjoyable and effective. His patience, especially when the kids are not in the mood, is commendable. I highly recommend him to parents looking for a similar experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'IM Ace',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text:  `Qari Kamran was my son Taha’s first Quran teacher and he was fantastic. He knows how to teach kids, especially those in the US or UK, making learning fun and not intimidating. Taha now reads the Quran independently. I highly recommend Qari Kamran for teaching Noorani Qaida and Quran to young kids.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Dr. Nazia Mojib',
    name: 'Pakistan'
  },
  {
    rating: 4,
    text: `Ustadh Kamran has been teaching my son Quran with Tajweed and Islamic manners since he was 4. His dedication, patience, and ability to engage young children are truly remarkable. He handles every situation with calmness and compassion. I highly recommend him for teaching Quran to children.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'zamzam ali',
    name: 'Pakistan'
  },
  {
    rating: 5,
    text: `My 3 children have been learning the Quran online with Kamran, and they’ve made great progress. He is attentive to their mistakes and understanding when they make them. Kamran is well-suited for teaching Quran and the basics of Sunnah, greatly enhancing my children's online madrasa experience.`,
    image: '/imges/Teachers-Icons-male-201x300 (1).png',
    title: 'Zamzam Abdillahi',
    name: 'Pakistan'
  },
 
];



const ReviewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Show 3 slides by default
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,  // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:1300,
        settings: {
          slidesToShow: 2,  // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:900,
        settings: {
          slidesToShow: 1,  // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {cardsContent.map((card, index) => (
          <div key={index}>
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
