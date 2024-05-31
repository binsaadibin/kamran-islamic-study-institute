
import React from 'react';
import styles from '@/styles/components/HomeEndCards.module.scss';
import Image from 'next/image';
const cardContent = [
  {
    imgSrc: "/imges/header-icon-1-coloured-300x300.png",
    imgAlt: "Image 1",
    title: "REGISTER YOURSELF"
  },
  {
    imgSrc: "/imges/header-icon-2-coloured-300x300.png",
    imgAlt: "Image 2",
    title: "FREE TRIAL CLASSES"
  },
  {
    imgSrc: "/imges/header-icon-3-coloured-300x300.png",
    imgAlt: "Image 3",
    title: "CONTROL IN CLASSES"
  }
];

const HomeEndCards = () => {
  return (
    <section className={styles.fourth_box_poster}>
      <div className="container">
        <div className="row">
          {cardContent.map((card, index) => (
            <div className="col-md-4" key={index}>
              <div className={`card ${styles.card}`}>
                <center>
                  <Image src={card.imgSrc} className="card-img-top" alt={card.imgAlt} width={50} height={50} layout="responsive"/>
                </center>
                <div className="card-body">
                  <h5 className={`card-title ${styles.h5}`}>{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEndCards;
