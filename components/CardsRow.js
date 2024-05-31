import React from 'react';
import styles from '@/styles/components/CardsRow.module.scss';
import Image from 'next/image';

const cardsContent = [
  {
    title: 'The Essence of Quranic Learning',
    description: 'Embark on a journey of spiritual growth and understanding as you delve into the teachings of the Quran. Discover a path that leads to inner peace and enlightenment.',
    image: '/imges/istockphoto-1216661554-612x612.jpg',
    alt: 'Quranic Learning'
  },
  {
    title: 'Guidance from the Quran',
    description: 'The Quran urges us to reflect upon its verses: "And We revealed to you the message that you may make clear to the people what was sent down to them and that they might give thought.',
    image: '/imges/istockphoto-453218359-612x612.jpg',
    alt: 'Guidance from the Quran'
  },
  {
    title: 'Prophetic Emphasis on Quranic Education',
    description:`Follow Prophet Muhammad's wisdom: "The most superior among you are those who learn and teach the Quran." Embrace this path.`,
    image: '/imges/istockphoto-482765777-612x612.jpg',
    alt: 'Prophetic Emphasis on Quranic Education'
  },
  {
    title: 'A Lifelong Journey with the Quran',
    description: 'Embrace the Quran as a lifelong companion, reading, reflecting, and internalizing its teachings for a fulfilling and meaningful life.',
    image: '/imges/istockphoto-623955570-612x612.jpg',
    alt: 'Lifelong Journey with the Quran'
  },
];

const CardComponent = ({ title, description, image, alt }) => (
  <div className="col-lg-6 d-flex mb-4">
    <div className={`card flex-row flex-grow-1 ${styles.customCard}`}>  
      <Image src={image} alt={alt} className={`card-img-right ${styles.image}`} width={50} height={50} layout="responsive" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  </div>
);

const CardsRow = () => (
  <div className={`container-fluid ${styles.cardContainer}`}>
    <div className="row">
      {cardsContent.map((card, index) => (
        <CardComponent key={index} title={card.title} description={card.description} image={card.image} alt={card.alt} />
      ))}
    </div>
  </div>
);

export default CardsRow;
