import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons from react-icons
import styles from '@/styles/components/ContactCards.module.scss';

const ContactCards = () => {
  const contactCards = [
    {
      title: "Address",
      content: "Muslim Town Lahore Pakistan",
      icon: FaMapMarkerAlt,
      link: "https://www.google.com/maps/place/Muslim+Town,+Lahore,+Pakistan" // Add Google Maps link
    },
    {
      title: "Email",
      content: "kaminawazts@gmail.com",
      icon: FaEnvelope,
      link: "mailto:kaminawazts@gmail.com" // Add mailto link
    },
    {
      title: "Phone",
      content: "+923170547465",
      icon: FaPhone,
      link: "https://wa.me/+923170547465" // Add tel link
    },
  ];

  return (
    <div className="container-fluid">
      <div className={`row d-flex justify-content-center align-items-center mb-4 ${styles.firstRow}`}>
        <div className="col text-center d-flex justify-content-center align-items-center">
          <span className={styles.icon}><FaMapMarkerAlt size="3em" /></span>
          <span className={styles.heading}> CONTACT US</span>
        </div>
      </div>
      <div className={`row ${styles.secondRow}`}>
        {contactCards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card ${styles.card}`}>
              <div className={`card-body text-center ${styles.card_body}`}>
                <a href={card.link} className={styles.link}>
                <div className={styles.cardIcon}>
                  <card.icon className={`mr-2 ${styles.icon}`} />
                </div>
                  </a>
                <h5 className={`card-title ${styles.title}`}>
                  {card.title}
                </h5>
                <p className={`card-text ${styles.card_text}`}>
                  <a href={card.link} className={styles.link}>
                    {card.content}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
