import Link from 'next/link';
import styles from '@/styles/components/headerAndFooter/Footer.module.scss';
import SocialIcons from './TopHeaderComponents/SocialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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



// import React, { useState } from 'react';
// import styles from '@/styles/components/headerAndFooter/Header.module.scss';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/router';

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeSubDropdown, setActiveSubDropdown] = useState(null);
//   const router = useRouter();

//   const handleNavToggle = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleDropdownToggle = (e, dropdown) => {
//     e.preventDefault();
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//     setActiveSubDropdown(null); // Close sub-dropdown when toggling main dropdown
//   };

//   const handleSubDropdownToggle = (e, subDropdown) => {
//     e.preventDefault();
//     setActiveSubDropdown(activeSubDropdown === subDropdown ? null : subDropdown);
//   };

//   const handleDropdownClose = () => {
//     setActiveDropdown(null);
//     setActiveSubDropdown(null);
//   };

//   const handleDropdownMouseEnter = (dropdown) => {
//     if (window.innerWidth >= 992) {
//       setActiveDropdown(dropdown);
//     }
//   };

//   const handleDropdownMouseLeave = () => {
//     if (window.innerWidth >= 992) {
//       setActiveDropdown(null);
//       setActiveSubDropdown(null);
//     }
//   };

//   const handleCoursesClick = (e) => {
//     e.preventDefault();
//     router.push('/course');
//   };

//   const handleDownloadClick = (e) => {
//     e.preventDefault();
//     router.push('/download');
//   };

//   return (
//     <header className={styles.header}>
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="container-fluid">
//           <Link href="/">
//             <span className="">
//               <Image src="/imges/slazzer-edit-image (1).png" alt="Logo" width={50} height={50} className={styles.logo} />
//             </span>
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded={isNavOpen ? "true" : "false"}
//             aria-label="Toggle navigation"
//             onClick={handleNavToggle}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} onMouseLeave={handleDropdownClose}>
//             <ul className={`navbar-nav ${styles.headerMenu}`}>
//               <li className="nav-item">
//                 <Link href="/" passHref>
//                   <span className="nav-link">Home</span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/about" passHref>
//                   <span className="nav-link">About</span>
//                 </Link>
//               </li>
//               <li className={`nav-item dropdown ${styles.courses} ${activeDropdown === 'courses' ? 'show' : ''}`} onMouseEnter={() => handleDropdownMouseEnter('courses')} onMouseLeave={handleDropdownMouseLeave}>
//                 <a className="nav-link dropdown-toggle" href="/course" role="button" id="navbarDropdown" aria-expanded={activeDropdown === 'courses'} onClick={handleCoursesClick}>
//                   Courses
//                 </a>
//                 <ul className={`dropdown-menu ${styles.courseSubPages} ${activeDropdown === 'courses' ? 'show' : ''}`} aria-labelledby="navbarDropdown">
//                   <li className={`dropdown-submenu ${activeSubDropdown === 'quranCourses' ? 'show' : ''}`}>
//                     <a className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} href="#" onClick={(e) => handleSubDropdownToggle(e, 'quranCourses')}>Quran Courses</a>
//                     <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'quranCourses' ? 'show' : ''}`}>
//                       <li>
//                         <Link href="/noraaniQaida" passHref>
//                           <span>Noraani Qaida</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/tajweedulQuran" passHref>
//                           <span>Tajweed ul Quran</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/quranReading" passHref>
//                           <span>Quran Reading</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/learnTafseerQuran" passHref>
//                           <span>Learn Tafseer Quran</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/quranMemorization" passHref>
//                           <span>Quran Memorization</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/quranIjaza" passHref>
//                           <span>Quran Ijaza</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className={`dropdown-submenu ${activeSubDropdown === 'languageCourses' ? 'show' : ''}`}>
//                     <a className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} href="#" onClick={(e) => handleSubDropdownToggle(e, 'languageCourses')}>Language Courses</a>
//                     <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'languageCourses' ? 'show' : ''}`}>
//                       <li>
//                         <Link href="/arabicLanguage" passHref>
//                           <span>Arabic Language</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/learnTenQirat" passHref>
//                           <span>Learn Ten Qirat</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className={`dropdown-submenu ${activeSubDropdown === 'islamicStudies' ? 'show' : ''}`}>
//                     <a className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} href="#" onClick={(e) => handleSubDropdownToggle(e, 'islamicStudies')}>Islamic Studies</a>
//                     <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'islamicStudies' ? 'show' : ''}`}>
//                       <li>
//                         <Link href="/islamicSupplications" passHref>
//                           <span>Islamic Supplications</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/pillarsofIslam" passHref>
//                           <span>Pillars of Islam</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className={`dropdown-submenu ${activeSubDropdown === 'specialCourses' ? 'show' : ''}`}>
//                     <a className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} href="#" onClick={(e) => handleSubDropdownToggle(e, 'specialCourses')}>Special Courses</a>
//                     <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'specialCourses' ? 'show' : ''}`}>
//                       <li>
//                         <Link href="/juniorLevelCourse" passHref>
//                           <span>Junior Level Course</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/seniorLevelCourse" passHref>
//                           <span>Senior Level Course</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li className={`nav-item dropdown  ${styles.download} ${styles.download} ${activeDropdown === 'download' ? 'show' : ''}`} onMouseEnter={() => handleDropdownMouseEnter('download')} onMouseLeave={handleDropdownMouseLeave}>
//                 <a className="nav-link dropdown-toggle" href="/download" role="button" id="navbarDropdownDownload" aria-expanded={activeDropdown === 'download'} onClick={handleDownloadClick}>
//                   Download
//                 </a>
//                 <ul className={`dropdown-menu ${styles.downloadSubPages} ${activeDropdown === 'download' ? 'show' : ''}`} aria-labelledby="navbarDropdownDownload">
//                   <li>
//                     <Link href="/download/app" passHref>
//                       <span>App Download</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/download/ebook" passHref>
//                       <span>Ebook Download</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/download/software" passHref>
//                       <span>Software Download</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link href="/services" passHref>
//                   <span className="nav-link">Blog</span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/payment" passHref>
//                   <span className="nav-link">Payment</span>
//                 </Link>
//               </li>
//               <li className={`nav-item ${styles.register}`}>
//                 <Link href="/register" passHref>
//                   <span className="nav-link">Register Now</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
