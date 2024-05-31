import React from 'react';
import styles from '@/styles/components/CounterCard.module.scss';

const CounterCard = () => {
  // Define an array of objects for card content
  const cardsContent = [
    {
      title: "120+",
      text: "Registered Students",
    },
    {
      title: "20+",
      text: "Quran Tutors",
    },
    {
      title: "25000+",
      text: "Lessons Conducted",
    }
  ];

  return (
    <div className="row">
      {cardsContent.map((card, index) => (
        <div key={index} className="col-md-4">
          <div className={`card ${styles.card}`}>
            <div className="card-body">
              <h5 className={`card-title ${styles.title}`}>{card.title}</h5>
              <p className={`card-text ${styles.text}`}>{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterCard;
