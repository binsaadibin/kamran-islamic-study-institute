import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone ,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/ContactCards.module.scss'

const ContactCards = () => {
  const contactCards = [
    {
      title: "Address",
      content: "Muslim Town Lahore Pakistan",
      icon: faMapMarkerAlt
    },
    {
      title: "Email",
      content: "kaminawazts@gmail.com",
      icon: faEnvelope
    },
    {
      title: "Phone",
      content: "+923170547465",
      icon: faPhone
    },
  ];

  return (
    <div className="container-fluid">
      <div className={`row  d-flex justify-content-center align-items-center mb-4 ${styles.firstRow}`}>
        <div className="col text-center d-flex justify-content-center align-items-center">
        <span className={styles.icon}> <FontAwesomeIcon icon={faAddressBook} size="3x" /></span>
        <span  className={styles.heading}> CONTACT US</span>
        </div>
      </div>
      <div className={`row ${styles.secondRow}`}>
        {contactCards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card ${styles.card}`}>
              <div className={`card-body text-center ${styles.card_body}`}> {/* Added text-center class here */}
                <div className={styles.cardIcon}>
                  <FontAwesomeIcon icon={card.icon} className={`mr-2 ${styles.icon}`} />
                </div>
                <h5 className={`card-title ${styles.title}`}>
                  {card.title}
                </h5>
                <p className={`card-tex ${styles.card_tex}`}>{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
