import Link from 'next/link';
import styles from '@/styles/components/headerAndFooter/Footer.module.scss';
import SocialIcons from './TopHeaderComponents/SocialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import StrartJourney from '../StrartJourney';

const companyInfo = {
  name: 'Learn Quran With BinSaadi',
  description1: 'Bin Saad Online Academy operates as a self-governing educational institution under the supervision of a dedicated team of professionals. Our mission is to provide a transformative learning experience that empowers students to reach their full potential.',
  description2: 'We strive to create an inclusive and welcoming environment where diversity is celebrated, and students from all backgrounds feel valued and supported.',
  description3: 'Through innovative teaching methods and a commitment to continuous improvement, we aim to inspire a love for learning and equip students with the skills they need to thrive in an ever-changing world.',

};

const importantLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
  { href: '/course1', text: 'Course 1' },
  { href: '/course2', text: 'Course 2' },
  { href: '/course3', text: 'Course 3' }
];

const moreLinks = [
  { href: '/service', text: 'Services' },
  { href: '/download', text: 'Download' },
  { href: '/login', text: 'Login' },
  { href: '/payment', text: 'Payment' },
  { href: '/register', text: 'Register' }
];

const contactInfo = {
  address: 'Mulim town Lahore Pakistan',
  email: 'binsaadibin@gmail.com',
  phone: '+92 (322) 9604360'
};

const Footer = () => (
  <footer className={styles.footer}>

   <div> <StrartJourney/></div>
    <div className={styles.mainFooter}>
      <div className="container p-2">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-5 mb-3 mb-md-0 ml-md-4"> {/* Added margin and spacing classes */}
            <div className="text-white">
              <div className="card-body">
                <h5 className={`card-title mb-3 ${styles.cardTitle}`}>{companyInfo.name}</h5>
                <p className={styles.companyInfo}>{companyInfo.description1}</p>
                <p className={styles.companyInfo}>{companyInfo.description2}</p>
                {/* <p className={styles.companyInfo}>{companyInfo.description3}</p> */}
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="col-md-2 mb-3 mb-md-0 ml-md-4"> {/* Added margin and spacing classes */}
            <div className="text-white">
              <div className="card-body">
                <h5 className={`card-title mb-3 ${styles.cardTitle}`}>Important Links</h5>
                <ul className="list-unstyled">
                  {importantLinks.map((link, index) => (
                    <li key={index} className={styles.links}>
                      <span className={styles.symbol}>{'>'}</span>
                      <Link href={link.href} passHref className={styles.link}>
                        <span className={`nav-link`}>{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* More Links */}
          <div className="col-md-2 mb-3 mb-md-0 ml-md-4"> {/* Added margin and spacing classes */}
            <div className="text-white">
              <div className="card-body">
                <h5 className={`card-title mb-3 ${styles.cardTitle}`}>More Links</h5>
                <ul className="list-unstyled">
                  {moreLinks.map((link, index) => (
                    <li key={index} className={styles.links}>
                      <span className={styles.symbol}>{'>'}</span>
                      <Link href={link.href} passHref className={styles.link}>
                        <span className={`nav-link ${styles.link}`}>{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <div className="text-white">
              <div className={`card-body`}>
                <h5 className={`card-title mb-3 ${styles.cardTitle}`}>Contact</h5>
                <div className={styles.contacts}>
                  <span><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icons} /></span><span className={styles.access}>{contactInfo.address}</span>
                </div>
                <div className={styles.contacts}>
                  <span><FontAwesomeIcon icon={faEnvelope} className={styles.icons} /></span><span className={styles.access}>{contactInfo.email}</span>
                </div>
                <div className={styles.contacts}>
                  <span><FontAwesomeIcon icon={faPhoneAlt} className={styles.icons} /></span><span className={styles.access}>{contactInfo.phone}</span>
                </div>
                <div className={styles.contacts}><SocialIcons /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sub Footer */}
    <div className={`container-fluid ${styles.subFooter}`}>
      <p>&copy; 2023 Learn With Bin Saadi. All rights reserved Designed and developed by Waheed Ullah Saadi.</p>
    </div>
  </footer>
);

export default Footer;

