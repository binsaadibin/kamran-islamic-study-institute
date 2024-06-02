import React from 'react';
import  styles from '@/styles/components/FeeCards.module.scss'
const FeeCards = ({data}) => {
  return (
    <div className="-fluid mt-5">
      <div className={`row ${styles.row}`}>
        {data.map((card, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className={`card animate__animated animate__zoomIn ${styles.card}`}>
              <div className="card-body">
                <h5 className={`card-title text-center ${styles.title}`}>{card.title}</h5>
                <h1><span className={styles.fee}>{card.fee}</span> <span className={styles.count}>{card.count}</span></h1>
                <ul className="list-group list-group-flush">
                  {card.items.map((item, idx) => (
                    <li key={idx} className={`list-group-item ${styles.list}`}>
                      {/* <i className={item.icon}></i>  */}
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-3">
                  <a href={card.buttonLink} className={`btn btn-primary ${styles.button}`}>
                    {card.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeCards;
