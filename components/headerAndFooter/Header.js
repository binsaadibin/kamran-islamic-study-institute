import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/headerAndFooter/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubDropdown(null); // Close sub-dropdown when toggling main dropdown
  };

  const handleSubDropdownToggle = (subDropdown) => {
    setActiveSubDropdown(activeSubDropdown === subDropdown ? null : subDropdown);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleCoursesClick = (e) => {
    e.preventDefault();
    router.push('/course');
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    router.push('/download');
  };

  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link href="/">
            <span className="">
              <Image src="/icons/mainLogo.png" alt="Logo" width={50} height={50} layout="responsive" className={styles.logo} />
            </span>
          </Link>
          <button
            className={`navbar-toggler ${styles.handleNavToggle}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavToggle}
          >
            <FaBars className={styles. FaBars} />
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} onMouseLeave={handleDropdownClose}>
            <ul className={`navbar-nav ${styles.headerMenu}`}>
              <li className="nav-item">
                <Link href="/" passHref>
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" passHref>
                  <span className="nav-link">About</span>
                </Link>
              </li>
              <li className={`nav-item dropdown ${styles.courses} ${activeDropdown === 'courses' ? 'show' : ''}`} onMouseEnter={() => handleDropdownToggle('courses')} onMouseLeave={handleDropdownClose}>
                <span className="nav-link dropdown-toggle" role="button" aria-expanded={activeDropdown === 'courses'} onClick={handleCoursesClick}>
                  Courses
                </span>
                <ul className={`dropdown-menu ${styles.courseSubPages} ${activeDropdown === 'courses' ? 'show' : ''}`}>
                  <li className={`dropdown-submenu ${activeSubDropdown === 'quranCourses' ? 'show' : ''}`}>
                    <span className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} onClick={() => handleSubDropdownToggle('quranCourses')}>Quran Courses</span>
                    <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'quranCourses' ? 'show' : ''}`}>
                      <li>
                        <Link href="/noraaniQaida" passHref>
                          <span>Noraani Qaida</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tajweedulQuran" passHref>
                          <span>Tajweed ul Quran</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/quranReading" passHref>
                          <span>Quran Reading</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/learnTafseerQuran" passHref>
                          <span>Learn Tafseer Quran</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/quranMemorization" passHref>
                          <span>Quran Memorization</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/quranIjaza" passHref>
                          <span>Quran Ijaza</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`dropdown-submenu ${activeSubDropdown === 'languageCourses' ? 'show' : ''}`}>
                    <span className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} onClick={() => handleSubDropdownToggle('languageCourses')}>Language Courses</span>
                    <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'languageCourses' ? 'show' : ''}`}>
                      <li>
                        <Link href="/arabicLanguage" passHref>
                          <span>Arabic Language</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/learnTenQirat" passHref>
                          <span>Learn Ten Qirat</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`dropdown-submenu ${activeSubDropdown === 'islamicStudies' ? 'show' : ''}`}>
                    <span className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} onClick={() => handleSubDropdownToggle('islamicStudies')}>Islamic Studies</span>
                    <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'islamicStudies' ? 'show' : ''}`}>
                      <li>
                        <Link href="/islamicSupplications" passHref>
                          <span>Islamic Supplications</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pillarsofIslam" passHref>
                          <span>Pillars of Islam</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`dropdown-submenu ${activeSubDropdown === 'specialCourses' ? 'show' : ''}`}>
                    <span className={`dropdown-item dropdown-toggle ${styles.Quran_course}`} onClick={() => handleSubDropdownToggle('specialCourses')}>Special Courses</span>
                    <ul className={`dropdown-menu ${styles.Quran_courses} ${activeSubDropdown === 'specialCourses' ? 'show' : ''}`}>
                      <li>
                        <Link href="/juniorLevelCourse" passHref>
                          <span>Junior Level Course</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/seniorLevelCourse" passHref>
                          <span>Senior Level Course</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/blog" passHref>
                  <span className="nav-link">Blog</span>
                </Link>
              </li>
              <li className={`nav-item dropdown ${styles.download} ${activeDropdown === 'download' ? 'show' : ''}`} onMouseEnter={() => handleDropdownToggle('download')} onMouseLeave={handleDropdownClose}>
                <span className="nav-link dropdown-toggle" role="button" aria-expanded={activeDropdown === 'download'} onClick={handleDownloadClick}>
                  Download
                </span>
                <ul className={`dropdown-menu ${styles.downloadSubPages} ${activeDropdown === 'download' ? 'show' : ''}`}>
                  <li>
                    <Link href="/nooraniQaidaInUrdu" passHref>
                      <span>Noorani Qaida In Urdu</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nooraniQaidaInEnglish" passHref>
                      <span>Noorani Qaida In English</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rehmaniQaida" passHref>
                      <span>Rehmani Qaida in Urdu</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rehmaniQaidaInEnglish" passHref>
                      <span>Rehmani Qaida in English</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/colorCodedQuran" passHref>
                      <span>Download Color Coded Quran</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/QuranTranslation" passHref>
                      <span>Quran with English translation</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/payment" passHref>
                  <span className="nav-link">Payment</span>
                </Link>
              </li>
              <li className={`nav-item ${styles.register}`}>
                <Link href="/register" passHref>
                  <span className={`nav-link`}>Register Now</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


