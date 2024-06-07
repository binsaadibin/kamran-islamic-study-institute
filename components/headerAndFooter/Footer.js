import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/headerAndFooter/Footer.module.scss';
import SocialIcons from './TopHeaderComponents/SocialIcons';
import { IoLocationSharp, IoMailSharp, IoPhonePortraitSharp } from 'react-icons/io5'; // Import React icons
import StrartJourney from '../StrartJourney';

const companyInfo = {
  name: 'Learn Quran With BinSaadi',
  description1: 'Kamran institute for Islamic study is dedicated to offering transformative learning experiences, empowering students to excel and reach their full potential.',
};
const allLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/courses', text: 'All Courses' },
  { href: '/download', text: 'Download' },
  { href: '/payment', text: 'Payment' },
  { href: '/register', text: 'Register' },
  { href: '/blog', text: 'Blog' },
  { href: '/noraaniQaida', text: 'Noraani Qaida' },
  { href: '/tajweedulQuran', text: 'Tajweed ul Quran' },
  { href: '/quranReading', text: 'Quran Reading' },
  { href: '/learnTafseerQuran', text: 'Learn Tafseer Quran' },
  { href: '/quranMemorization', text: 'Quran Memorization' },
  { href: '/quranIjaza', text: 'Quran Ijaza' },
  { href: '/arabicLanguage', text: 'Arabic Language' },
  { href: '/islamicSupplications', text: 'Islamic Supplications' },
  { href: '/pillarsofIslam', text: 'Pillars of Islam' },
  { href: '/juniorLevelCourse', text: 'Junior Level Course' },
  { href: '/seniorLevelCourse', text: 'Senior Level Course' }
];

const contactInfo = {
  address: 'Muslim town Lahore Pakistan',
  email: 'kamranislamicinstitue@gmail.com',
  phone: '+923170547465'
};

const Footer = () => {
  const firstColumnLinks = allLinks.slice(0, Math.ceil(allLinks.length / 3));
  const secondColumnLinks = allLinks.slice(Math.ceil(allLinks.length / 3), Math.ceil(2 * allLinks.length / 3));
  const thirdColumnLinks = allLinks.slice(Math.ceil(2 * allLinks.length / 3));

  return (
    <footer className={styles.footer}>
      <div><StrartJourney /></div>
      <div className={styles.mainFooter}>
        <div className="container-fluid p-2">
          <div className="row">
            {/* Company Info */}
            <div className={`col-xl-3 col-md-5 mb-3 mb-md-0 ml-md-4 ${styles.companyInfo}`}>
              <div className="text-white">
                <div className="card-body">
                  <div className={styles.logoDiv}> <Image src="/icons/mainLogo.png" alt="Logo" width={50} height={50} layout="responsive"  unoptimized={true} className={styles.logo} /></div>
                  <p>{companyInfo.description1}</p>
                </div>
              </div>
            </div>

            {/* Combined Links */}
            <div className="col-xl-6 col-md-3 mb-3 mb-md-0 ml-md-4">
              <div className="text-white">
                <div className="card-body">
                  <div className={`row ${styles.CombinedLinks}`}>
                    <div className={`col-4 ${styles.col4}`}>
                      <h6 className={styles.columnTitle}>Links</h6>
                      <ul className="list-unstyled">
                        {firstColumnLinks.map((link, index) => (
                          <li key={index} className={styles.links}>
                            <span className={styles.symbol}>{'>'}</span>
                            <Link href={link.href} passHref className={styles.link}>
                              <span className={`nav-link ${styles.link}`}>{link.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`col-4 ${styles.col4}`}>
                      <h6 className={styles.columnTitle}>More Links</h6>
                      <ul className="list-unstyled">
                        {secondColumnLinks.map((link, index) => (
                          <li key={index} className={styles.links}>
                            <span className={styles.symbol}>{'>'}</span>
                            <Link href={link.href} passHref className={styles.link} >
                              <span className={`nav-link ${styles.link}`}>{link.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`col-4 ${styles.col4}`}>
                      <h6 className={styles.columnTitle}>More Links</h6>
                      <ul className="list-unstyled">
                        {thirdColumnLinks.map((link, index) => (
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
              </div>
            </div>
             {/* Contact Info */}
             <div className={`col-xl-3 col-md-4 ${styles.contactInfo}`}>
              <div className="text-white">
                <div className={`card-body`}>
                  <h5 className={`card-title mb-3 ${styles.cardTitle}`}>Contact</h5>
                  <div className={styles.contacts}>
                    <span><IoLocationSharp className={styles.icons} /></span>
                    <span className={styles.access}>
                      <Link className={styles.myLinks} href={`tel:${contactInfo.phone}`}>
                        <span>{contactInfo.address}</span>
                      </Link>
                    </span>
                  </div>
                  <div className={styles.contacts}>
                    <span><IoMailSharp className={styles.icons} /></span>
                    <span className={styles.access}>
                      <Link className={styles.myLinks} href={`mailto:${contactInfo.email}`}>
                        <span>{contactInfo.email}</span>
                      </Link>
                    </span>
                  </div>
                  <div className={styles.contacts}>
                    <span><IoPhonePortraitSharp className={styles.icons} /></span>
                    <span className={styles.access}>
                      <Link className={styles.myLinks} href="https://wa.me/+923170547465">
                        <span>{contactInfo.phone}</span>
                      </Link>
                    </span>
                  </div>
                  <div className={styles.contacts}>
                   <div className={styles.socialIcons}> <SocialIcons /></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Sub Footer */}
<div className={`container-fluid ${styles.subFooter}`}>
        <p>Copyright © 2024. All rights reserved Powered & Designed by <span>BINSAADI WEB BUILDERS</span></p>
      </div>
    </footer>
  );
};

export default Footer;
