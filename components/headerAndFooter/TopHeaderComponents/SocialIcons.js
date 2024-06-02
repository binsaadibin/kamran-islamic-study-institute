import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
;
import Image from 'next/image';
import { faFacebook, faInstagram, faYoutube, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../../../styles/components/headerAndFooter/TopHeaderComponent/SocialIcons.module.scss';

function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
     
      <a href="https://www.facebook.com/profile.php?id=61559409706774" target="_blank" rel="noopener noreferrer">
      <FaFacebookSquare  className={styles.socialIcon} />
      </a>
      <a href="https://www.youtube.com/@KamraninstituteforIslamicstudy" target="_blank" rel="noopener noreferrer">
      < FaYoutubeSquare   className={styles.socialIcon} />
      </a>
      <a href="https://www.instagram.com/kamran_islamic_institute/" target="_blank" rel="noopener noreferrer">
      <FaSquareInstagram  className={styles.socialIcon}/>

      </a>
      <a href="https://wa.me/+923170547465" target="_blank" rel="noopener noreferrer">
      <FaWhatsappSquare className={styles.socialIcon} />
      </a>
      <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
      <FaXTwitter className={styles.socialIcon} />
      </a>
    </div>
  );
}

export default SocialIcons;


