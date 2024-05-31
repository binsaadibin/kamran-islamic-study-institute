import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faFacebook, faInstagram, faYoutube, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../../../styles/components/headerAndFooter/TopHeaderComponent/SocialIcons.module.scss';

function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a href="https://facebook.com/kamran islamic intitue for islamic studty" target="_blank" rel="noopener noreferrer">
      <Image src="/icons/icon.svg (3).svg" alt="Logo" width={50} height={50} layout="responsive" className={styles.socialIcon} />
      </a>
      <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
      <Image src="/icons/icon.svg (4).svg" alt="Logo" width={50} height={50} layout="responsive" className={styles.socialIcon} />
      </a>
      <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer">
      <Image src="/icons/icon.svg (5).svg" alt="Logo" width={50} height={50} layout="responsive" className={styles.socialIcon} />
      </a>
      <a href="https://wa.me/+923229604360" target="_blank" rel="noopener noreferrer">
      <Image src="/icons/icon.svg (6).svg" alt="Logo" width={50} height={50} layout="responsive" className={styles.socialIcon} />
      </a>
      <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
      <Image src="/icons/icon.svg (7).svg" alt="Logo" width={50} height={50} layout="responsive" className={styles.socialIcon} />
      </a>
    </div>
  );
}

export default SocialIcons;


