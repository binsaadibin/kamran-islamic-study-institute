// pages/index.js
import React from 'react';
import Layout from '@/components/headerAndFooter/Layout';
import MainCarousel from '@/components/carouseles/MainCarousel';
import MainCards from '@/components/MainCards';
import QuranClasses from '@/components/QuranClasses';
import TeacherCard from '@/components/TeacherCrds';
import HomeEndCards from '@/components/HomeEndCards';
import HomeEndCarousel from '@/components/carouseles/HomeEndCarousel';
import Image from 'next/image';
import styles from '@/styles/pages/index.module.scss';

const Home = () => (
  <Layout>
    <div>
      {/* Main Carousel */}
      <MainCarousel />

      {/* First Section: Welcome Message and Main Cards */}
      <section className={styles.firstSection}>
        <div>
          <h1 className={styles.secHeading}>Kamran Institute For Islamic Study</h1>
          <p className={styles.secParagraph}>
          Kamran Institute For Islamic Study stands out as a premier institution dedicated to providing top-notch Quranic education. Recognizing the aspirations of parents to impart the best knowledge to their children, our academy focuses on instilling a profound understanding of the Holy Book of Allah SWT. Our commitment is to empower individuals for success in this life and the hereafter.
            <br />
            Our Islamic Institute offers Quranic courses tailored for kids, adults, males, females, and newly reverted Muslims. Specifically designed to create a joyful learning environment, our online Quran courses for children are facilitated by dedicated Arab and Non-Arab Quran teachers. You have the flexibility to interview multiple teachers and select the one that best suits your preferences. Embark on your journey of learning the Quran through personalized, one-on-one classes. In addition to Quranic studies, we provide instruction in Islamic courses, languages, and Noorani Qaida. Join us in the pursuit of comprehensive and enriching online education.
          </p>
        </div>
        <div className={styles.mainCards}>
          <MainCards />
        </div>
      </section>

      {/* Second Section: Courses Overview */}
      <section className={styles.secondSection}>
        <h1>Kamran Institute For Islamic Study Courses</h1>
        <center>
          <Image src="/imges/underline-blue-300x28.png" alt="underline-blue-300x28.png" width={300} height={30} className={`${styles.secondSectionImage}`} />
        </center>
        <p>
          The Kamran Institute For Islamic Study provides Quranic education tailored to various age groups, encompassing children, males, adults, recent converts, and females. Our diverse range of online courses includes Noorani Qaida designed for children, Quran Reading, Quranic Comprehension, Quran Memorization, Tajweed, Arabic, Urdu, Pashto, Islamic Studies, Quranic Exegesis (Tafsir), and Hadith.
        </p>
        <h1>Quran Classes for Kids, Adults, & Ladies</h1>
        <p>
          Embrace the enduring lessons of the Quran from the comfort of your own surroundings. Our dedicated online Quranic courses are crafted for children, adults, and women, featuring customized curricula adapted to their individual learning speeds and comprehension levels. Guarantee a personalized and enriching Quranic learning journey for everyone. Interactive, captivating, and imbued with profound insights, each curriculum is meticulously designed to cater to the distinctive requirements of learners. Join us and become a participant in this enlightening expedition.
        </p>
        <div>
          <QuranClasses />
        </div>
      </section>

      {/* Third Section: Our Online Quran Tutors */}
      <section className={styles.thirdSection}>
        <h1>Our Online Quran Tutors</h1>
        <center>
          <Image src="/imges/underline-blue-300x28.png" alt="underline-blue-300x28.png" width={300} height={30} className={`${styles.thirdSectionImage}`} />
        </center>
        <div>
          <TeacherCard />
        </div>
      </section>

      {/* Fourth Section: Home End Cards */}
      <section className={styles.fourthSection}>
        <div>
          <HomeEndCards />
        </div>
      </section>

      {/* Fifth Section: Our Courses Carousel */}
      <div className={styles.fifthSection}>
        <h1>Our Courses</h1>
        <center>
          <Image src="/imges/underline-blue-300x28.png" alt="underline-blue-300x28.png" width={300} height={30} className={`${styles.thirdSectionImage}`} />
        </center>
        <HomeEndCarousel />
      </div>
    </div>
  </Layout>
);

export default Home;
