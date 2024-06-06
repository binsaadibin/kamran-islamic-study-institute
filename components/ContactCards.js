import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons from react-icons
import styles from '@/styles/components/ContactCards.module.scss';

const ContactCards = () => {
  const contactCards = [
    {
      title: "Address",
      content: "Muslim Town Lahore Pakistan",
      icon: FaMapMarkerAlt // Use FaMapMarkerAlt icon
    },
    {
      title: "Email",
      content: "kaminawazts@gmail.com",
      icon: FaEnvelope // Use FaEnvelope icon
    },
    {
      title: "Phone",
      content: "+923170547465",
      icon: FaPhone // Use FaPhone icon
    },
  ];

  return (
    <div className="container-fluid">
      <div className={`row  d-flex justify-content-center align-items-center mb-4 ${styles.firstRow}`}>
        <div className="col text-center d-flex justify-content-center align-items-center">
          <span className={styles.icon}><FaMapMarkerAlt size="3em" /></span> {/* Use FaMapMarkerAlt icon */}
          <span className={styles.heading}> CONTACT US</span>
        </div>
      </div>
      <div className={`row ${styles.secondRow}`}>
        {contactCards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card ${styles.card}`}>
              <div className={`card-body text-center ${styles.card_body}`}>
                <div className={styles.cardIcon}>
                  <card.icon className={`mr-2 ${styles.icon}`} /> {/* Render the icon component */}
                </div>
                <h5 className={`card-title ${styles.title}`}>
                  {card.title}
                </h5>
                <p className={`card-text ${styles.card_text}`}>{card.content}</p> {/* Fix the class name */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
