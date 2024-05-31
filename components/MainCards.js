import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/MainCards.module.scss';

const cardsDetail = [
  {
    imageSrc: '/imges/icon-1-1-1-263x300.png',
    altText: 'icon-1-1-1-263x300.png',
    title: 'One to One Online Quran Classes',
    description: ' Enroll in personalized online Quran classes and gain knowledge from proficient instructors. Explore a complimentary demonstration and acquire education with the educators of your choice.',
  },
  {
    imageSrc: '/imges/icon-2-1-263x300.png',
    altText: 'icon-2-1-263x300.png',
    title: 'Take Quran Class at Your Ease',
    description: 'Plan your Quran classes at your convenience. Bin Saadi Online Quran Academy is tirelessly devising an improved, flexible schedule for e-Quran classes to accommodate the diverse needs of students.',
  },
  {
    imageSrc: '/imges/icon-3-1-263x300.png',
    altText: 'icon-3-1-263x300.png',
    title: 'Qualified Online Quran Teachers',
    description: 'We have a highly experienced team of qualified Quran teachers ready to guide you. Learn the Quran online at discounted rates now! Join us today to experience top-notch education with our expert instructors.',
  },
  {
    imageSrc: '/imges/icon-4-1-263x300.png',
    altText: 'icon-4-1-263x300.png',
    title: 'Online Portal for Students',
    description: 'We provide an online portal for student convenience. Access comprehensive information such as complete class history, schedules, fees, and invoices through our user-friendly platform.',
  },
];

const MainCards = () => {
  return (
    <div className={`container-fluid ${styles.cardContainer}`}>
      <div className={`row ${styles.cardRow}`}>
        {cardsDetail.map((item, index) => (
          <div key={index} className={`col-sm-6 col-md-3 ${styles.column}`}>
            <div className={`${styles.card} card`}>
              <center>
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  width={80}
                  height={90}
                  className={`${styles.image}`}
                  layout="responsive"
                />
              </center>
              <div className={`card-body text-center ${styles.cardBody}`}>
                <h2 className={`${styles.sec1Cardtitle}`}>{item.title}</h2>
                <p className={`card-text ${styles.sec1CardText}`}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCards;
